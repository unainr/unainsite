"use client";

import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus, Loader2, Plus, RefreshCw, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useCreateTemplate, useUpdateTemplate } from "../../hooks/use-templates";
import { uploadTemplateImage } from "../../server/template.actions";
import { Template } from "@/types";
import { TemplateFormValues, templateSchema } from "../../server/schema";

// ─── Slug helper ──────────────────────────────────────────────────────────────

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface TemplateFormDialogProps {
  mode: "create" | "edit";
  template?: Template;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function TemplateFormDialog({
  mode,
  template,
  open,
  onOpenChange,
}: TemplateFormDialogProps) {
  const isEdit = mode === "edit";
  const { mutate: create, isPending: creating } = useCreateTemplate();
  const { mutate: update, isPending: updating } = useUpdateTemplate();
  const isPending = creating || updating;

  // Single image state
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<TemplateFormValues>({
    resolver: zodResolver(templateSchema),
    defaultValues: { title: "", slug: "", description: "", liveUrl: "", buyUrl: "" },
  });

  // Populate on edit / reset on close
  useEffect(() => {
    if (isEdit && template) {
      form.reset({
        title: template.title,
        slug: template.slug?.current ?? "",
        description: template.description,
        liveUrl: template.liveUrl,
        buyUrl: template.buyUrl,
      });
    } else {
      form.reset({ title: "", slug: "", description: "", liveUrl: "", buyUrl: "" });
    }
    setImageFile(null);
    setImagePreview(null);
  }, [open, isEdit, template, form]);

  // ── Image picker ────────────────────────────────────────────────────────────

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    e.target.value = "";
  }

  function removeImage() {
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImageFile(null);
    setImagePreview(null);
  }

  // ── Submit ──────────────────────────────────────────────────────────────────

  async function onSubmit(values: TemplateFormValues) {
    let imageAssetId: string | undefined;

    if (imageFile) {
      setUploading(true);
      const fd = new FormData();
      fd.append("image", imageFile);

      const uploadResult = await uploadTemplateImage(fd);
      setUploading(false);

      if (!uploadResult.success) {
        toast.error(uploadResult.error ?? "Image upload failed");
        return;
      }
      imageAssetId = uploadResult.assetId;
    }

    const payload = { ...values, imageAssetId };

    if (isEdit && template) {
      update(
        { id: template._id, data: payload },
        { onSuccess: () => onOpenChange(false) }
      );
    } else {
      create(payload, { onSuccess: () => onOpenChange(false) });
    }
  }

  const isSubmitting = isPending || uploading;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {mode === "create" && (
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1.5" />
            New Template
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit Template" : "New Template"}
          </DialogTitle>
        </DialogHeader>

        <form
          id="template-form"
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="mt-2"
        >
          <FieldGroup>
            {/* ── Title + auto-slug ── */}
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="template-title">Title</FieldLabel>
                  <Input
                    {...field}
                    id="template-title"
                    placeholder="Minimal SaaS Starter"
                    disabled={isSubmitting}
                    onChange={(e) => {
                      field.onChange(e);
                      const currentSlug = form.getValues("slug");
                      const prevAutoSlug = toSlug(field.value);
                      if (!currentSlug || currentSlug === prevAutoSlug) {
                        form.setValue("slug", toSlug(e.target.value), {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* ── Slug ── */}
            <Controller
              name="slug"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="template-slug">Slug</FieldLabel>
                    <button
                      type="button"
                      onClick={() =>
                        form.setValue(
                          "slug",
                          toSlug(form.getValues("title")),
                          { shouldValidate: true }
                        )
                      }
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <RefreshCw className="h-3 w-3" />
                      Re-generate
                    </button>
                  </div>
                  <Input
                    {...field}
                    id="template-slug"
                    placeholder="minimal-saas-starter"
                    disabled={isSubmitting}
                  />
                  <FieldDescription>
                    Auto-generated from title. Edit manually if needed.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* ── Description ── */}
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="template-description">
                    Description
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="template-description"
                    placeholder="Short description of the template"
                    rows={3}
                    disabled={isSubmitting}
                    className="resize-none"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* ── Live URL ── */}
            <Controller
              name="liveUrl"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="template-live">Live Demo URL</FieldLabel>
                  <Input
                    {...field}
                    id="template-live"
                    type="url"
                    placeholder="https://demo.template.com"
                    disabled={isSubmitting}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* ── Buy URL ── */}
            <Controller
              name="buyUrl"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="template-buy">Contra Buy URL</FieldLabel>
                  <Input
                    {...field}
                    id="template-buy"
                    type="url"
                    placeholder="https://contra.com/..."
                    disabled={isSubmitting}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* ── Preview Image ── */}
            <Field>
              <FieldLabel>
                Preview Image{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </FieldLabel>

              {imagePreview ? (
                <div className="relative group w-full">
                  <img
                    src={imagePreview}
                    alt="preview"
                    className="w-full h-40 object-cover rounded-md border border-border"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-3 py-2 text-sm border border-dashed border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors w-full justify-center"
                  >
                    <ImagePlus className="h-4 w-4" />
                    Upload preview image
                  </button>
                </>
              )}

              <FieldDescription>
                {isEdit
                  ? "Upload a new image to replace the existing one."
                  : "Recommended: 16:9 ratio, min 1200×675px."}
              </FieldDescription>
            </Field>
          </FieldGroup>

          {/* ── Actions ── */}
          <div className="mt-6 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" form="template-form" disabled={isSubmitting}>
              {uploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Uploading…
                </>
              ) : isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : isEdit ? (
                "Save changes"
              ) : (
                "Create"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
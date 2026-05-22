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

import { useCreateProject, useUpdateProject } from "../../hooks/use-projects";
import { uploadProjectImages } from "../../server/project.actions";
import { Project } from "@/types";
import { ProjectFormValues, projectSchema } from "../../server/schema";

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

interface ProjectFormDialogProps {
  mode: "create" | "edit";
  project?: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ProjectFormDialog({
  mode,
  project,
  open,
  onOpenChange,
}: ProjectFormDialogProps) {
  const isEdit = mode === "edit";
  const { mutate: create, isPending: creating } = useCreateProject();
  const { mutate: update, isPending: updating } = useUpdateProject();
  const isPending = creating || updating;

  // Image state — preview URLs + selected File objects
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: { name: "", slug: "", description: "", projectLink: "" },
  });

  // Populate on edit / reset on close
  useEffect(() => {
    if (isEdit && project) {
      form.reset({
        name: project.name,
        slug: project.slug?.current ?? "",
        description: project.description,
        projectLink: project.projectLink ?? "",
      });
    } else {
      form.reset({ name: "", slug: "", description: "", projectLink: "" });
    }
    // Clear image state on open/close
    setImageFiles([]);
    setImagePreviews([]);
  }, [open, isEdit, project, form]);

  // ── Image picker ────────────────────────────────────────────────────────────

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;

    const previews = files.map((f) => URL.createObjectURL(f));
    setImageFiles((prev) => [...prev, ...files]);
    setImagePreviews((prev) => [...prev, ...previews]);

    // Reset input so same file can be re-selected
    e.target.value = "";
  }

  function removeImage(index: number) {
    URL.revokeObjectURL(imagePreviews[index]);
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  }

  // ── Submit ──────────────────────────────────────────────────────────────────

  async function onSubmit(values: ProjectFormValues) {
    let imageAssetIds: string[] = [];

    // Upload images if any selected
    if (imageFiles.length > 0) {
      setUploading(true);
      const fd = new FormData();
      imageFiles.forEach((f) => fd.append("images", f));

      const uploadResult = await uploadProjectImages(fd);
      setUploading(false);

      if (!uploadResult.success) {
        toast.error(uploadResult.error ?? "Image upload failed");
        return;
      }
      imageAssetIds = uploadResult.assetIds ?? [];
    }

    const payload = { ...values, imageAssetIds };

    if (isEdit && project) {
      update({ id: project._id, data: payload }, { onSuccess: () => onOpenChange(false) });
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
            New Project
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Project" : "New Project"}</DialogTitle>
        </DialogHeader>

        <form
          id="project-form"
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="mt-2"
        >
          <FieldGroup>
            {/* ── Name + auto-slug ── */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="project-name">Project Name</FieldLabel>
                  <Input
                    {...field}
                    id="project-name"
                    placeholder="My Awesome Project"
                    disabled={isSubmitting}
                    onChange={(e) => {
                      field.onChange(e);
                      // Auto-generate slug only when slug is still empty or matches
                      // the previous auto-generated value
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
                    <FieldLabel htmlFor="project-slug">Slug</FieldLabel>
                    <button
                      type="button"
                      onClick={() =>
                        form.setValue(
                          "slug",
                          toSlug(form.getValues("name")),
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
                    id="project-slug"
                    placeholder="my-awesome-project"
                    disabled={isSubmitting}
                  />
                  <FieldDescription>
                    Auto-generated from name. Edit manually if needed.
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
                  <FieldLabel htmlFor="project-description">
                    Description
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="project-description"
                    placeholder="What does this project do?"
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

            {/* ── Project Link ── */}
            <Controller
              name="projectLink"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="project-link">Project URL</FieldLabel>
                  <Input
                    {...field}
                    id="project-link"
                    type="url"
                    placeholder="https://myproject.com"
                    disabled={isSubmitting}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* ── Images ── */}
            <Field>
              <FieldLabel>
                Images{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </FieldLabel>

              {/* Previews */}
              {imagePreviews.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {imagePreviews.map((src, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={src}
                        alt={`preview-${i}`}
                        className="h-20 w-20 object-cover rounded-md border border-border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Upload button */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
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
                {imagePreviews.length > 0 ? "Add more images" : "Upload images"}
              </button>
              <FieldDescription>
                {isEdit
                  ? "Upload new images to replace the existing ones."
                  : "Select one or more images for this project."}
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
            <Button type="submit" form="project-form" disabled={isSubmitting}>
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
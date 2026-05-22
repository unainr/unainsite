import { z } from "zod";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const urlField = z.string().url("Must be a valid URL");

// ─── Project ──────────────────────────────────────────────────────────────────

export const projectSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only"),
  description: z.string().min(1, "Description is required").max(1000),
  projectLink: urlField,
  // images are handled outside zod (FileList / uploaded asset refs)
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

// ─── Template ─────────────────────────────────────────────────────────────────

export const templateSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only"),
  description: z.string().min(1, "Description is required").max(500),
  liveUrl: urlField,
  buyUrl: urlField,
  // image handled outside zod
});

export type TemplateFormValues = z.infer<typeof templateSchema>;
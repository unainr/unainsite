"use server";

import { revalidatePath } from "next/cache";
import { sanityFetch } from "@/sanity/lib/live";
import { writeClient } from "@/sanity/lib/write-client";
import { PROJECT_FETCH_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/types";

// ─── Fetch ────────────────────────────────────────────────────────────────────

export async function getProjects(): Promise<Project[]> {
  const { data } = await sanityFetch({ query: PROJECT_FETCH_QUERY });
  return data ?? [];
}

// ─── Upload image to Sanity asset store ───────────────────────────────────────

export async function uploadProjectImages(
  formData: FormData
): Promise<{ success: boolean; assetIds?: string[]; error?: string }> {
  try {
    const files = formData.getAll("images") as File[];

    if (!files.length) return { success: true, assetIds: [] };

    const uploads = await Promise.all(
      files.map((file) =>
        writeClient.assets.upload("image", file, {
          filename: file.name,
          contentType: file.type,
        })
      )
    );

    return {
      success: true,
      assetIds: uploads.map((asset) => asset._id),
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Image upload failed";
    return { success: false, error: msg };
  }
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createProject(data: {
  name: string;
  slug: string;
  description: string;
  projectLink: string;
  imageAssetIds: string[];
}): Promise<{ success: boolean; error?: string }> {
  try {
    await writeClient.create({
      _type: "project",
      name: data.name,
      description: data.description,
      projectLink: data.projectLink,
      slug: {
        _type: "slug",
        current: data.slug,
      },
      images: data.imageAssetIds.map((id) => ({
        _type: "image",
        asset: { _type: "reference", _ref: id },
      })),
    });

    return { success: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to create project";
    return { success: false, error: msg };
  }
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updateProject(
  id: string,
  data: {
    name: string;
    slug: string;
    description: string;
    projectLink: string;
    imageAssetIds: string[]; // empty array = keep existing images
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    const patch = writeClient.patch(id).set({
      name: data.name,
      description: data.description,
      projectLink: data.projectLink,
      slug: {
        _type: "slug",
        current: data.slug,
      },
    });

    // Only overwrite images if new ones were uploaded
    if (data.imageAssetIds.length > 0) {
      patch.set({
        images: data.imageAssetIds.map((assetId) => ({
          _type: "image",
          asset: { _type: "reference", _ref: assetId },
        })),
      });
    }

    await patch.commit();
    return { success: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to update project";
    return { success: false, error: msg };
  }
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export async function deleteProject(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    await writeClient.delete(id);
    return { success: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to delete project";
    return { success: false, error: msg };
  }
}
"use server";

import { revalidatePath } from "next/cache";
import { sanityFetch } from "@/sanity/lib/live";
import { writeClient } from "@/sanity/lib/write-client";
import { templatesQuery } from "@/sanity/lib/queries";
import { Template } from "@/types";

// ─── Fetch ────────────────────────────────────────────────────────────────────

export async function getTemplates(): Promise<Template[]> {
  const { data } = await sanityFetch({ query: templatesQuery });
  return data ?? [];
}

// ─── Upload single image ──────────────────────────────────────────────────────

export async function uploadTemplateImage(
  formData: FormData
): Promise<{ success: boolean; assetId?: string; error?: string }> {
  try {
    const file = formData.get("image") as File;
    if (!file) return { success: true };

    const asset = await writeClient.assets.upload("image", file, {
      filename: file.name,
      contentType: file.type,
    });

    return { success: true, assetId: asset._id };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Image upload failed";
    return { success: false, error: msg };
  }
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createTemplate(data: {
  title: string;
  slug: string;
  description: string;
  liveUrl: string;
  buyUrl: string;
  imageAssetId?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    await writeClient.create({
      _type: "templates",
      title: data.title,
      description: data.description,
      liveUrl: data.liveUrl,
      buyUrl: data.buyUrl,
      slug: {
        _type: "slug",
        current: data.slug,
      },
      ...(data.imageAssetId && {
        image: {
          _type: "image",
          asset: { _type: "reference", _ref: data.imageAssetId },
        },
      }),
    });

    return { success: true };
  } catch (err) {
    const msg =
      err instanceof Error ? err.message : "Failed to create template";
    return { success: false, error: msg };
  }
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updateTemplate(
  id: string,
  data: {
    title: string;
    slug: string;
    description: string;
    liveUrl: string;
    buyUrl: string;
    imageAssetId?: string;
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    // ✅ fixed
const patch = writeClient.patch(id).set({
  title: data.title,
  description: data.description,
  liveUrl: data.liveUrl,
  buyUrl: data.buyUrl,
  slug: {
    _type: "slug",
    current: data.slug,
  },
  ...(data.imageAssetId && {
    image: {
      _type: "image",
      asset: { _type: "reference", _ref: data.imageAssetId },
    },
  }),
});

await patch.commit();
    return { success: true };
  } catch (err) {
    const msg =
      err instanceof Error ? err.message : "Failed to update template";
    return { success: false, error: msg };
  }
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export async function deleteTemplate(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    await writeClient.delete(id);
    return { success: true };
  } catch (err) {
    const msg =
      err instanceof Error ? err.message : "Failed to delete template";
    return { success: false, error: msg };
  }
}
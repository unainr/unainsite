"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  getTemplates,
  createTemplate,
  updateTemplate,
  deleteTemplate,
} from "../server/template.actions";
import { client } from "@/sanity/lib/client";
import { templatesQuery } from "@/sanity/lib/queries";
import { Template } from "@/types";

// ─── Query Keys ───────────────────────────────────────────────────────────────

export const templateKeys = {
  all: ["templates"] as const,
};

// ─── Query ────────────────────────────────────────────────────────────────────

export function useTemplates() {
  return useQuery({
    queryKey: templateKeys.all,
      queryFn: () => client.fetch<Template[]>(templatesQuery), // ← fixed
  });
}

// ─── Mutations ────────────────────────────────────────────────────────────────

export function useCreateTemplate() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      title: string;
      slug: string;
      description: string;
      liveUrl: string;
      buyUrl: string;
      imageAssetId?: string;
    }) => createTemplate(data),
    onSuccess: (res) => {
      if (!res.success) toast.error(res.error)
      qc.invalidateQueries({ queryKey: templateKeys.all });
      toast.success("Template created.");
    },
    onError: (err: Error) => toast.error(err.message),
  });
}

export function useUpdateTemplate() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: {
        title: string;
        slug: string;
        description: string;
        liveUrl: string;
        buyUrl: string;
        imageAssetId?: string;
      };
    }) => updateTemplate(id, data),
    onSuccess: (res) => {
      if (!res.success) toast.error(res.error)
      qc.invalidateQueries({ queryKey: templateKeys.all });
      toast.success("Template updated.");
    },
    onError: (err: Error) => toast.error(err.message),
  });
}

export function useDeleteTemplate() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTemplate(id),
    onSuccess: (res) => {
      if (!res.success) toast.error(res.error)
      qc.invalidateQueries({ queryKey: templateKeys.all });
      toast.success("Template deleted.");
    },
    onError: (err: Error) => toast.error(err.message),
  });
}
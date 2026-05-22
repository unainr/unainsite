"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../server/project.actions";

// ─── Query Keys ───────────────────────────────────────────────────────────────

export const projectKeys = {
  all: ["projects"] as const,
};

// ─── Query ────────────────────────────────────────────────────────────────────

export function useProjects() {
  return useQuery({
    queryKey: projectKeys.all,
    queryFn: () => getProjects(),
  });
}

// ─── Mutations ────────────────────────────────────────────────────────────────

export function useCreateProject() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      name: string;
      slug: string;
      description: string;
      projectLink: string;
      imageAssetIds: string[];
    }) => createProject(data),
    onSuccess: (res) => {
      if (!res.success) toast.error(res.error)
      qc.invalidateQueries({ queryKey: projectKeys.all });
      toast.success("Project created.");
    },
    onError: (err: Error) => toast.error(err.message),
  });
}

export function useUpdateProject() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: {
        name: string;
        slug: string;
        description: string;
        projectLink: string;
        imageAssetIds: string[];
      };
    }) => updateProject(id, data),
    onSuccess: (res) => {
      if (!res.success) toast.error(res.error)
      qc.invalidateQueries({ queryKey: projectKeys.all });
      toast.success("Project updated.");
    },
    onError: (err: Error) => toast.error(err.message),
  });
}

export function useDeleteProject() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProject(id),
    onSuccess: (res) => {
      if (!res.success) toast.error(res.error)
      qc.invalidateQueries({ queryKey: projectKeys.all });
      toast.success("Project deleted.");
    },
    onError: (err: Error) => toast.error(err.message),
  });
}
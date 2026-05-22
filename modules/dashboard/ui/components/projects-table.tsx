"use client";

import { useState } from "react";
import { ExternalLink, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

import { useProjects, useDeleteProject } from "../../hooks/use-projects";
import { ProjectFormDialog } from "./project-form-dialog";
import { Project } from "@/types";
import { DeleteDialog } from "./delete-dialog";

// ─── Loading skeleton ─────────────────────────────────────────────────────────

function ProjectsTableSkeleton() {
  return (
    <div className="space-y-2 px-1">
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full rounded-md" />
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ProjectsTable() {
  const { data: projects, isLoading } = useProjects();
  const { mutate: deleteProject, isPending: deleting } = useDeleteProject();

  const [editTarget, setEditTarget] = useState<Project | null>(null);
  const [editOpen, setEditOpen] = useState(false);

  function handleEdit(project: Project) {
    setEditTarget(project);
    setEditOpen(true);
  }

  if (isLoading) return <ProjectsTableSkeleton />;

  if (!projects?.length) {
    return (
      <p className="text-sm text-muted-foreground text-center py-10">
        No projects yet. Create one to get started.
      </p>
    );
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
            <TableHead className="hidden sm:table-cell">Slug</TableHead>
            <TableHead className="w-25">Link</TableHead>
            <TableHead className="w-20 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project._id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground max-w-70 truncate">
                {project.description}
              </TableCell>
              <TableCell className="hidden sm:table-cell text-muted-foreground text-xs font-mono">
                {project.slug?.current}
              </TableCell>
              <TableCell>
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View
                  </a>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => handleEdit(project)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <DeleteDialog
                    label="Project"
                    isPending={deleting}
                    onConfirm={() => deleteProject(project._id)}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit dialog — controlled externally */}
      {editTarget && (
        <ProjectFormDialog
          mode="edit"
          project={editTarget}
          open={editOpen}
          onOpenChange={(v) => {
            setEditOpen(v);
            if (!v) setEditTarget(null);
          }}
        />
      )}
    </>
  );
}
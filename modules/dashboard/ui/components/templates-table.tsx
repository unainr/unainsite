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

import { useTemplates, useDeleteTemplate } from "../../hooks/use-templates";
import { TemplateFormDialog } from "./template-form-dialog";
import { Template } from "@/types";
import { DeleteDialog } from "./delete-dialog";

// ─── Loading skeleton ─────────────────────────────────────────────────────────

function TemplatesTableSkeleton() {
  return (
    <div className="space-y-2 px-1">
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full rounded-md" />
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function TemplatesTable() {
  const { data: templates, isLoading } = useTemplates();
  const { mutate: deleteTemplate, isPending: deleting } = useDeleteTemplate();

  const [editTarget, setEditTarget] = useState<Template | null>(null);
  const [editOpen, setEditOpen] = useState(false);

  function handleEdit(template: Template) {
    setEditTarget(template);
    setEditOpen(true);
  }

  if (isLoading) return <TemplatesTableSkeleton />;

  if (!templates?.length) {
    return (
      <p className="text-sm text-muted-foreground text-center py-10">
        No templates yet. Create one to get started.
      </p>
    );
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
            <TableHead className="hidden sm:table-cell w-22.5">Live</TableHead>
            <TableHead className="hidden sm:table-cell w-22.5">Buy</TableHead>
            <TableHead className="w-20 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {templates.map((template) => (
            <TableRow key={template._id}>
              <TableCell className="font-medium">{template.title}</TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground max-w-60 truncate">
                {template.description}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {template.liveUrl && (
                  <a
                    href={template.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Demo
                  </a>
                )}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {template.buyUrl && (
                  <a
                    href={template.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Buy
                  </a>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => handleEdit(template)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <DeleteDialog
                    label="Template"
                    isPending={deleting}
                    onConfirm={() => deleteTemplate(template._id)}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editTarget && (
        <TemplateFormDialog
          mode="edit"
          template={editTarget}
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
"use client";

import { useState } from "react";
import { FolderKanban, LayoutTemplate } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ProjectsTable } from "../components/projects-table";
import { TemplatesTable } from "../components/templates-table";
import { ProjectFormDialog } from "../components/project-form-dialog";
import { TemplateFormDialog } from "../components/template-form-dialog";

export function DashboardView() {
  const [projectCreateOpen, setProjectCreateOpen] = useState(false);
  const [templateCreateOpen, setTemplateCreateOpen] = useState(false);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* ── Header ── */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your projects and templates from one place.
        </p>
      </div>

      <div className="h-px bg-border" />

      {/* ── Tabs ── */}
      <Tabs defaultValue="projects">
        <TabsList className="mb-4">
          <TabsTrigger value="projects" className="gap-2">
            <FolderKanban className="h-4 w-4" />
            Projects
          </TabsTrigger>
          <TabsTrigger value="templates" className="gap-2">
            <LayoutTemplate className="h-4 w-4" />
            Templates
          </TabsTrigger>
        </TabsList>

        {/* ── Projects tab ── */}
        <TabsContent value="projects">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-base font-semibold">
                  Projects
                </CardTitle>
                <CardDescription className="mt-0.5">
                  All your Sanity projects. Create, edit, or delete them here.
                </CardDescription>
              </div>
              <ProjectFormDialog
                mode="create"
                open={projectCreateOpen}
                onOpenChange={setProjectCreateOpen}
              />
            </CardHeader>
            <CardContent className="pt-0">
              <ProjectsTable />
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Templates tab ── */}
        <TabsContent value="templates">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-base font-semibold">
                  Templates
                </CardTitle>
                <CardDescription className="mt-0.5">
                  Manage your Contra templates. Add live demo and buy links.
                </CardDescription>
              </div>
              <TemplateFormDialog
                mode="create"
                open={templateCreateOpen}
                onOpenChange={setTemplateCreateOpen}
              />
            </CardHeader>
            <CardContent className="pt-0">
              <TemplatesTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export interface PropsLayout {
    children: React.ReactNode
}

// export interface Project {
//     _id?: string;
// 	name: string;
// 	description: string;
// 	images: string;
// 	projectLink: string;
// }



// ─── Project ──────────────────────────────────────────────────────────────────

export interface SanityImageAsset {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
}

export interface Project {
  _id: string;
  _createdAt: string;
  name: string;
  description: string;
  images: SanityImageAsset[];
  slug: { current: string };
  projectLink: string;
}

export type ProjectInput = Omit<Project, "_id" | "_createdAt">;

// ─── Template ─────────────────────────────────────────────────────────────────

export interface Template {
  _id: string;
  _createdAt: string;
  title: string;
  slug: { current: string };
  description: string;
  image: SanityImageAsset;
  liveUrl: string;
  buyUrl: string;
}

export type TemplateInput = Omit<Template, "_id" | "_createdAt">;
import { AnimatedListDemo } from "./animated/list";

export default function TechStackIcons() {
  return (
    <div className="container overflow-hidden mx-auto px-6 mb-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div>
            <h2 className="my-4 uppercase tracking-tighter text-5xl font-bold">
              Technology{" "}
              <span className="bg-clip-text italic text-transparent bg-linear-to-r from-blue-500 to-blue-400">
                Stack
              </span>
            </h2>
            <p className="text-md text-muted-foreground leading-relaxed text-pretty">
              Next.js, TypeScript, and Tailwind on the frontend. Hono RPC for
              type-safe backend calls, end to end, with TanStack Query
              handling data fetching and caching.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-md text-muted-foreground leading-relaxed">
              Every tool here is one I use daily, not a checklist. Hono RPC
              over a separate API layer means the frontend and backend share
              types automatically, no manual syncing, no runtime surprises.
            </p>

            <p className="text-md text-muted-foreground leading-relaxed">
              I add AI and LLM integrations where they solve a real problem —
              not because it's trendy, but because it's what a project
              actually needs.
            </p>
          </div>
        </div>

        {/* Right Column - Animated Tech Stack List */}
        <AnimatedListDemo />
      </div>
    </div>
  );
}
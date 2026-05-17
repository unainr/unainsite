// components/templates-card-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function TemplatesCardSkeleton() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header skeleton */}
        <div className=" text-center mb-12">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-80" />
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <Skeleton className="aspect-video w-full" />
              <div className="p-5 space-y-3">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
                <div className="flex justify-between pt-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-28" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
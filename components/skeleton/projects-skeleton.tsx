import { Card, CardHeader, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const CardProductSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col rounded-xl shadow-lg overflow-hidden"
        >
          {/* Image Skeleton */}
          <Skeleton className="w-full h-60 sm:h-64 lg:h-72" />

          {/* Card Body */}
          <Card className="flex flex-col flex-1 border-none rounded-none">
            <CardHeader className="space-y-3 pb-2">
              {/* Title */}
              <Skeleton className="h-5 w-3/4" />

              {/* Description lines */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </CardHeader>

            {/* Footer (pushed bottom) */}
            <CardFooter className="mt-auto pt-4">
              <Skeleton className="h-10 w-28 rounded-md" />
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default CardProductSkeleton

import { Suspense } from "react"
import TemplatesCardSkeleton from "@/components/skeleton/templates-card-skeleton"
import TemplatesCard from "../components/templates-card"

export const TemplatesView = () => {
  return (
    <>
      <Suspense fallback={<TemplatesCardSkeleton />}>
      <TemplatesCard />
    </Suspense>
    </>
  )
}

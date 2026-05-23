import CardProduct from "@/components/cards/card-studio";
import CardProductSkeleton from "@/components/skeleton/projects-skeleton";
import { client } from "@/sanity/lib/client";
import { PROJECT_FETCH_QUERY } from "@/sanity/lib/queries";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
interface Props{
	count?:number;
	startCount?:number;
}
export const ProjectWrapper = async ({count,startCount}:Props) => {
	const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => client.fetch(PROJECT_FETCH_QUERY),
  });
  if (isLoading) return <CardProductSkeleton />;
	return (
		<>
			
				<CardProduct projects={projects} count={count} startCount={startCount} />
			
		</>
	);
};

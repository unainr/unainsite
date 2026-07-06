'use client';
import CardProduct from "@/components/cards/card-studio";
import CardProductSkeleton from "@/components/skeleton/projects-skeleton";
import { client } from "@/sanity/lib/client";
import { PROJECT_FETCH_QUERY } from "@/sanity/lib/queries";
import { useQuery } from "@tanstack/react-query";
import ProjectAnimatedLayout from "./animated/animated-card-list";
interface Props{
	count?:number;
	startCount?:number;
}
export const ProjectWrapper =  ({count,startCount}:Props) => {
	const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => client.fetch(PROJECT_FETCH_QUERY),
  });
  if (isLoading) return <CardProductSkeleton />;
	return (
		<>
			
				 <ProjectAnimatedLayout
      projects={projects}
      count={count}
      startCount={startCount}
      heading="My Projects"
      defaultView="card"
    />
			
		</>
	);
};

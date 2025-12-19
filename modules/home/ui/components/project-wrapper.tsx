import CardProduct from "@/components/cards/card-studio";
import CardProductSkeleton from "@/components/skeleton/projects-skeleton";
import { client } from "@/sanity/lib/client";
import { PROJECT_FETCH_QUERY } from "@/sanity/lib/queries";
import { Suspense } from "react";
interface Props{
	count?:number;
	startCount?:number;
}
export const ProjectWrapper = async ({count,startCount}:Props) => {
	const projects = await client.fetch(PROJECT_FETCH_QUERY);
	return (
		<>
			<Suspense fallback={<CardProductSkeleton/>}>
				<CardProduct projects={projects} count={count} startCount={startCount} />
			</Suspense>
		</>
	);
};

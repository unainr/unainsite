import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Projects = {
	_id: string;
	name: string;
	description: string;
	projectLink: string;
	images: string[];
};

type Props = {
	projects: Projects[];
	count?: number;
	startCount?: number;
};

const CardProduct = ({ projects, count, startCount }: Props) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
			{projects.slice(startCount, count).map((project) => (
				<div
					key={project._id}
					className="flex flex-col rounded-xl shadow-lg overflow-hidden">
					{/* Image */}
					<div className="relative w-full h-60 sm:h-64 lg:h-72">
						<Image
							src={project.images[0]}
							alt={project.name}
							fill
							className="object-cover"
						/>
					</div>

					{/* Card */}
					<Card className="flex flex-col flex-1 border-none rounded-none">
						<CardHeader className="pb-2">
							<CardTitle className="text-lg sm:text-xl">
								{project.name}
							</CardTitle>
							<CardDescription className="line-clamp-3 text-sm text-muted-foreground">
								{project.description}
							</CardDescription>
						</CardHeader>

						{/* Push footer to bottom */}
						<CardFooter className="mt-auto flex justify-start">
							<Link href={project.projectLink} target="_blank">
								<Button size="lg">View</Button>
							</Link>
						</CardFooter>
					</Card>
				</div>
			))}
		</div>
	);
};

export default CardProduct;

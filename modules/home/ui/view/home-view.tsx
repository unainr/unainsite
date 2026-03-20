import { ProjectWrapper } from "../components/project-wrapper";
import TextScrollSlide from "../components/text-scroll-slide";
import TechStackIcons from "../components/teach-icons";
import FeaturesCards from "../components/features-card";
import Features from "../components/features";
import FolderCode from "../components/folder-code";
import EtherealBeamsHero from "../components/ethereal-beams-hero";

export const HomeView = () => {
	return (
		<>
			<EtherealBeamsHero />
			<div className="my-16">
				<TextScrollSlide />
			</div>
			<Features />
			<div className="text-center mb-16">
				<div className="my-4 tracking-tighter uppercase text-5xl font-bold">
					Featured{" "}
					<span className=" italic bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
						Projects
					</span>
				</div>

				<p className="text-gray-400 max-w-2xl mx-auto">
					Explore some of my recent work showcasing web development expertise
					across different industries and technologies.
				</p>
			</div>

			<ProjectWrapper count={6} startCount={0} />
			<FolderCode />
			<FeaturesCards />
			<TechStackIcons />
		</>
	);
};

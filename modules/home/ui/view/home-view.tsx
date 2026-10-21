import AgentBentoGrid from "@/modules/home/ui/components/agent-bento-grid";
import { Pricing } from "@/modules/pricing/ui/components/pricing";
import TemplatesCard from "@/modules/templates/ui/components/templates-card";
import Features from "../components/features";
import GlassHero from "../components/glassfold";
import { ProjectWrapper } from "../components/project-wrapper";
import TechStackIcons from "../components/teach-icons";
import Testimonials from "../components/testimonials";

export const HomeView = () => {
	return (
		<>
			<GlassHero />
			<Features />
			<div className="text-center">
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
			<AgentBentoGrid className="my-10" />
			<TechStackIcons />
			<Pricing />

			<TemplatesCard startCount={0} endCount={3} />

			<Testimonials />
		</>
	);
};

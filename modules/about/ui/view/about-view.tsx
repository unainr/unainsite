import IntroSection from "../components/intro-section";
import SkillsSection from "../components/skills-section";
import JourneySection from "../components/journey-section";
import StatsSection from "../components/stats-section";
import PageBanner from "@/components/page-banner";

export const AboutView = () => {
	return (
		<>
			<PageBanner
				title="About Me"
				breadcrumbs={[
					{ label: "Home", href: "/" },
					{ label: "About", href: "/about" },
				]}
			/>
			<IntroSection />
			<SkillsSection />
			<JourneySection />
			<StatsSection />
		</>
	);
};

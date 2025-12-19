import React from "react";
import PageHero from "../components/about-hero";
import IntroSection from "../components/intro-section";
import SkillsSection from "../components/skills-section";
import JourneySection from "../components/journey-section";
import StatsSection from "../components/stats-section";

export const AboutView = () => {
	return (
		<>
			<PageHero
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

import React from "react";
import PageHero from "../components/services-hero";
import ServiceCards from "../components/service-cards";
import ProcessSection from "../components/process-section";
import ServicesCTA from "../components/services-cta";

export const ServicesView = () => {
	return (
		<>
			<PageHero
				title="Services"
				breadcrumbs={[
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/services" },
				]}
			/>
			<ServiceCards />
			<ProcessSection />
			<ServicesCTA />
		</>
	);
};

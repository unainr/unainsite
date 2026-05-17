import ServiceCards from "../components/service-cards";
import ProcessSection from "../components/process-section";
import ServicesCTA from "../components/services-cta";
import PageBanner from "@/components/page-banner";

export const ServicesView = () => {
	return (
		<>
			<PageBanner
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

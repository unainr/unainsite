import ContactForm from "../components/contact-form";
import PageBanner from "@/components/page-banner";

export const ContactView = () => {
	return (
		<>
			<PageBanner
				title="Contact Me"
				breadcrumbs={[
					{ label: "Home", href: "/" },
					{ label: "Contact", href: "/contact" },
				]}
			/>
			<ContactForm />
			{/* <SocialLinks /> */}
		</>
	);
};

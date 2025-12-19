import React from "react";
import PageHero from "../components/contact-hero";
import ContactForm from "../components/contact-form";
import SocialLinks from "../components/social-links";

export const ContactView = () => {
	return (
		<>
			<PageHero
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

import { defineField, defineType } from "sanity";

export const templates = defineType({
	name: "templates",
	title: "Templates",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title" },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			title: "Preview Image",
			type: "image",
			options: { hotspot: true },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "liveUrl",
			title: "Live Demo URL",
			type: "url",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "buyUrl",
			title: "Contra Buy URL",
			type: "url",
			validation: (Rule) => Rule.required(),
		}),
	],
});

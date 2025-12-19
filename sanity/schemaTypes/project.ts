import { defineField, defineType } from "sanity";

export const project = defineType({
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Project Name",
		}),

        defineField({
			name: "description",
			type: "text",
			title: "Project Description",
		}),

        defineField({
			name: "images",
			type: "array",
			title: "Project Images",
			of: [{ type: "image" }],
		}),
        defineField({
            name: "slug",
            type: "slug",
            title: "Project Slug",
            options:{
                source: "name",
            }
        }),
        defineField({
            name:"projectLink",
            type:"url",
            title:"Project Link"
        }),
	],
});
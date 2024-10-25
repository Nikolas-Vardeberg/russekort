import { defineField } from "sanity";


export const editor = defineField({
    name: "editor",
    title: "Redaktør",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Navn på Redaktør",
            type: "string",
        },
        {
            name: "image",
            title: "Bilde av Redaktør",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                },
            ],
        },
    ],
});
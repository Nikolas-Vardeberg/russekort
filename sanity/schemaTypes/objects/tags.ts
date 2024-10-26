import { Tags } from "lucide-react";
import { defineField } from "sanity";


export const tags = defineField({
    name: "tags",
    title: "Tags",
    type: "document",
    icon: Tags,
    fields: [
        {
            name: "name",
            title: "Navn",
            type: "string",
        },
        {
            type: "slug",
            name: "slug",
            options: {
                source: 'title',
            },
        },
    ],
});
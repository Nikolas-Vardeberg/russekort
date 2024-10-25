import { defineType } from "sanity";
import { seo } from "../objects/seo";
import { blocks } from "../objects/blocks";



export const TransportPage = defineType({
    name: "transportPage",
    type: "document",
    title: "Transport Sider",
    groups: [
        {
            name: "general",
            title: "General",
            default: true,
        },
        {
            name: "seo",
            title: "SEO",
        }
    ],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            group: "general",
        },
        {
            name: "mainImage",
            type: "image",
            title: "Main image",
            description: "The main image of the article",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
            group: 'general',
        },
        {
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
            },
            group: "general",
        },
        {
            name: "excerpt",
            type: "text",
            title: "Excerpt",
            group: "general"
        },
        {
            ...blocks,
            group: "general",
        },
        {
            ...seo,
            group: "seo"
        }
    ]
})
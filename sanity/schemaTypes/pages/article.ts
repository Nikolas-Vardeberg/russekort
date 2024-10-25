import { defineType } from "sanity";
import { seo } from "../objects/seo";
import { blocks } from "../objects/blocks";

export const article = defineType({
    type: "document",
    name: "article",
    title: "Article",
    groups: [
        {
            name: "general",
            title: "General",
            default: true,
        },
        {
            name: "byline",
            title: "Byline",
        },
        {
            name: "seo",
            title: "SEO",
        },
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
            group: "general",
        },
        {
            name: "slug",
            type: "slug",
            options: {
                source: 'title',
            },
            group: "general",
        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Pulisert",
            description: "Dato for publisering av artikkelen",
            group: "byline",
            initialValue: new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        },  
        {
            ...seo,
            group: "seo",
        },
        {
            ...blocks,
            group: "general",
        }
        //TODO: EDITOR
    ],
    orderings: [
        {
            title: "Publiseringsdato (nyeste først)",
            name: "publishDateDesc",
            by: [{ field: "publishedAt", direction: 'desc'}],
        },
        {
            title: "Publiseringsdato (eldste først)",
            name: "publishDateAsc",
            by: [{ field: "publishedAt", direction: "asc"}],
        },
        {
            title: "Tittel (A-Å)",
            name: "titleAsc",
            by: [{ field: "title", direction: "asc"}],
        },
        {
            title: "Tittel (A-Å)",
            name: "titleDesc",
            by: [{ field: 'title', direction: "asc"}],
        }
    ]
})
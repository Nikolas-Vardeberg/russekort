import { defineType } from "sanity";


export const quote = defineType({
    name: "quote",
    title: "Quote",
    type: "object",
    fields: [
        {
            name: "editor",
            type: "reference",
            to: [{ type: "editor" }],
            title: "Editor",
        },
        {
            name: "quote",
            type: "text",
            title: "Quote",
        },
    ],
})
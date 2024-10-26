import { MessageSquareQuote } from "lucide-react";
import { defineType } from "sanity";


export const quote = defineType({
    name: "quote",
    title: "Quote",
    type: "object",
    icon: MessageSquareQuote,
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
    preview: {
        select: {
            quote: "quote",
            editor: "editor.name",
        },
        prepare(selection) {
            const { quote, editor } = selection;
            return {
                title: quote,
                subtitle: editor,
            }
        }
    }
})
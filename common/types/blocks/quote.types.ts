import { Editor } from "../editor.types";


export type IQuote = {
    _type: "quote",
    editor: Editor;
    quote: string;
}
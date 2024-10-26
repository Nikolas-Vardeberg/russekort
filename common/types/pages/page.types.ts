import { Blocks } from "../blocks/index.types";
import { Editor } from "../editor.types";


export type TransportPage = {
    _type: "transportPage";
    _id: string;
    title: string;
    slug: string;
    blocks?: Blocks[];
    excerpt: string;
}

export type ArticlePage = {
    _type: "article";
    _id: string;
    title: string;
    slug: string;
    block?: Blocks[];
    mainImage: any;
    editor: Editor;
    tags: any;
    //TODO: CREATE MAImage TYPE;
    //TODO: CREATE TAGS TYPE;
}
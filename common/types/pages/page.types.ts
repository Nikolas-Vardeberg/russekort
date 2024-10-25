import { Blocks } from "../blocks/index.types";


export type TransportPage = {
    _type: "transportPage";
    _id: string;
    title: string;
    slug: string;
    blocks?: Blocks[];
    excerpt: string;
}
import { groq } from "next-sanity";
import { BLOCKS_QUERY } from "../blocks/index.queries";
import { EDITOR_QUERY } from "../editor.queries";


export const ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    mainImage -> {
        "url": assets->url,
        alt,
    },
    publishedAt,
    tags[]->{
        "slug": slug.current,
        title,
    }
    "slug": current.slug,
    "blocks": blocks[]${BLOCKS_QUERY},
    "editor": editor->${EDITOR_QUERY},
    //TODO: RELATED
    seo,
}`
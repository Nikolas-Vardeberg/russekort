import { groq } from "next-sanity";


export const EDITOR_QUERY = groq`{
    name,
    image {
      "url": asset->url,
      alt,
    }
}`
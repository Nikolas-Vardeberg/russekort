import { groq } from "next-sanity";
import { VIDEO_BLOCK_QUERY } from "./video.queries";
import { QUOTE_QUERY } from "./quote.queries";
import { TRANSPORT_BLOCKS_QUERIES } from "./transport-block.queries";

export const BLOCKS_QUERY = groq`{
    _key,
    _type,
    _type == "quote" => ${QUOTE_QUERY},
    _type == "video" => ${VIDEO_BLOCK_QUERY},
    _type == "transportBlocks" => ${TRANSPORT_BLOCKS_QUERIES},
}`;
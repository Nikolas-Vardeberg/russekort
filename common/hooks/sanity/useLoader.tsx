import { draftMode } from 'next/headers';
import { createClient, QueryOptions, type QueryParams } from "next-sanity";

import "server-only";
import { client } from '@/sanity/lib/client';

const token = process.env.SANITY_API_READ_TOKEN;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function useLoader<const QueryString extends string>({
    query,
    params = {},
    revalidate = 60, // default revalidation time in seconds
    tags = [],
  }: {
    query: QueryString;
    params?: QueryParams;
    revalidate?: number | false;
    tags?: string[];
  }) {
    const isDraftMode = (await draftMode()).isEnabled;
  
    if (isDraftMode && !token) {
      throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
    }
  
    const queryOptions: QueryOptions = {};
    let maybeRevalidate = revalidate;
  
    if (isDraftMode) {
      queryOptions.token = token;
      queryOptions.perspective = "previewDrafts";
      queryOptions.stega = true;
  
      maybeRevalidate = 0; // Do not cache in Draft Mode
    } else if (tags.length) {
      maybeRevalidate = false; // Cache indefinitely if tags supplied
    }
    
    return client.fetch(query, params, {
      ...queryOptions,
      next: {
        revalidate: maybeRevalidate,
        tags,
      },
    });
  }

  export default {useLoader};
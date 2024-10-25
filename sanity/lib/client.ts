import { createClient, QueryOptions, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from '../env'
import { draftMode } from 'next/headers';

import { token } from "./token";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
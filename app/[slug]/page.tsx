import Blocks from "@/common/components/blocks/blocks";
import { getTransportPageQuery } from "@/common/queries/pages/transport-page.queries";
import type {TransportPage} from "@/common/types/pages/page.types";
import { sanityFetch } from "@/sanity/lib/client";
import { notFound } from "next/navigation";



type Props = {
    params: {
        'transport-page': string;
    }
}

export default async function TransportPage({ params }: Props) {
    const data = await sanityFetch({
        query: getTransportPageQuery,
        params,
    });

    if (!data) return notFound();

    return(
        <div>
            <div>
                <h2>{data.title}</h2>
                <p>{data.excerpt}</p>
            </div>

            <Blocks blocks={data.blocks ?? []} />
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </div>
    )
}
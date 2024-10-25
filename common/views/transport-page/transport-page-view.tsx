"use client"

import Blocks from "@/common/components/blocks/blocks"
import PageHeader from "@/common/components/page-header/PageHeader"
import { TransportPage } from "@/common/types/pages/page.types"

const TransportPageView = ({ data: page }: { data: TransportPage}) => {
    return(
        <div className="bg-primary-dark pt-12">

            <PageHeader title={page.title} excerpt={page.excerpt} />
            
            <Blocks blocks={page.blocks ?? []}  />
        </div>
    )
}

export default TransportPageView
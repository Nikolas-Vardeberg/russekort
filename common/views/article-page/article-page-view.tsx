"use client"

import Blocks from "@/common/components/blocks/blocks"
import PageHeader from "@/common/components/page-header/PageHeader"
import { ArticlePage} from "@/common/types/pages/page.types"

const ArticlePageView = ({ data: page }: { data: ArticlePage}) => {
    return(
        <div className="bg-primary-main">
            <pre>
                {JSON.stringify(page, undefined, 2)}
            </pre>
            
            <Blocks blocks={page.blocks ?? []}  />
        </div>
    )
}

export default ArticlePageView
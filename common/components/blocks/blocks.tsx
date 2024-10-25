import type { Blocks as BlockType } from '@/common/types/blocks/index.types';
import Quote from './Quote';
import { clsx } from '@/common/utils/clsx';

export const RenderBlock = ({ block, k: key }: { block: BlockType; k: number }) => {
    switch (block._type) {
        case "quote":
            return <Quote key={key} {...block} />
    }
}

const Blocks = ({ blocks }: { blocks: BlockType[] }) => {
	return (
		<div className={clsx('my-10 flex flex-col')}>
			{blocks?.map((block, i) => (
				<RenderBlock key={`${block._key}-${i}`} block={block} k={i} />
			))}
		</div>
	);
};

export default Blocks;

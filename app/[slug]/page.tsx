import { notFound } from "next/navigation";



type Props = {
    params: {
        'transport-page': string;
    }
}

const getData = async (slug:string) => {
}

export default async function TransportPage({ params }: Props) {
    const data = await getData(params['transport-page']);

	if (!data) return notFound();

    return(
        <div>
            
        </div>
    )
}
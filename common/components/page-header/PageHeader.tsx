"use client"

const PageHeader = ({title, excerpt}: { title: string; excerpt: string; }) => {
    return(
            <div className="mx-auto w-full container px-4 sm:px-5 grid grid-cols-12 my-10 md:my-20">
                <div className="col-span-12 sm:col-span-10 md:col-span-9 md:col-start-1">
                    <h1 className="text-white text-5xl font-bold">{title}</h1>
                    <div className="mt-4">
                        <p className="text-white text-xl md:text-3xl leading-normal">{excerpt}</p>
                    </div>
                </div>
            </div>
    )
}

export default PageHeader
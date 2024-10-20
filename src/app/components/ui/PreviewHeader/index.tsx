import Link from "next/link";

const PreviewHeader = (): JSX.Element => {
    return (
        <section>
            <div className="flex justify-between">
                <Link href={"/links"}>
                    <button className="capitalize text-primary border border-primary rounded-lg px-5 py-2 hover:bg-primary/10 font-semibold">Back to editor</button>
                </Link>
                <button className="bg-primary capitalize  border border-primary rounded-lg px-5 py-2 hover:bg-primary/60 font-semibold text-white">Share Link</button>
            </div>
        </section>
    )
}
export default PreviewHeader;
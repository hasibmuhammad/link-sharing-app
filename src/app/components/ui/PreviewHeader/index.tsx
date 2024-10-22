import Link from "next/link";

const handleCopytoClipboard = (): void => {
    console.log(window.location.href);
    navigator.clipboard.writeText(window.location.href);
}

const PreviewHeader = (): JSX.Element => {
    return (
        <section>
            <div className="flex justify-between">
                <Link href={"/profile"}>
                    <button className="capitalize text-primary border border-primary rounded-lg px-5 py-2 hover:bg-primary/10 font-semibold">Back to editor</button>
                </Link>
                <button onClick={handleCopytoClipboard} className="bg-primary capitalize  border border-primary rounded-lg px-5 py-2 hover:bg-primary/60 font-semibold text-white">Share Link</button>
            </div>
        </section>
    )
}
export default PreviewHeader;
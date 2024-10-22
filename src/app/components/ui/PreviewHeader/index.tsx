"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IProps {
    onCopy: (state: boolean) => void
}

const PreviewHeader = ({ onCopy }: IProps): JSX.Element => {

    const [copied, setCopied] = useState(false);

    const handleCopytoClipboard = (): void => {
        setCopied(false);
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
    }

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 3000)
        }

        onCopy(copied);
    }, [copied])



    return (
        <section>
            <div className="flex justify-between">
                <Link href={"/profile"}>
                    <button className="capitalize text-primary border border-primary rounded-lg px-3 md:px-5 py-2 hover:bg-primary/10 font-semibold">Back to editor</button>
                </Link>
                <button onClick={handleCopytoClipboard} className="bg-primary capitalize  border border-primary rounded-lg px-5 py-2 hover:bg-primary/60 font-semibold text-white">Share Link</button>
            </div>
        </section>
    )
}
export default PreviewHeader;
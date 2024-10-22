"use client";
import PreviewHeader from "@/app/components/ui/PreviewHeader";
import { RootState } from "@/app/store/store";
import { listArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Preview = (): JSX.Element | null => {

    const links = useSelector((state: RootState) => { return state?.links?.links });
    const profileInfo = useSelector((state: RootState) => { return state?.profile });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <main className="relative">
            <section className="bg-primary h-[357px] py-5 md:py-10 md:rounded-b-3xl">
                <header className="px-5 lg:px-0">
                    <div className="max-w-[1300px] w-full mx-auto bg-white p-6 rounded-lg">
                        <PreviewHeader />
                    </div>
                </header>
            </section>

            <section className="flex relative justify-center px-4 md:px-0">
                <div className="absolute -top-32  bg-white max-w-[349px] w-full h-[550px] rounded-2xl shadow-preview">
                    <div className="mt-12 space-y-6">
                        <div className="flex justify-center">
                            <div className={`bg-[#EEEEEE] w-24 h-24 rounded-full border-4 ${profileInfo?.profileImage ? "border-primary" : ""}`}>
                                {profileInfo?.profileImage && <Image
                                    src={profileInfo?.profileImage ?? ""}
                                    width={96}
                                    height={96}
                                    alt="Profile Image"
                                    className="w-full h-full rounded-full object-cover"
                                />}
                            </div>
                        </div>
                        <div className="space-y-3 flex flex-col items-center">
                            {
                                (profileInfo?.firstName && profileInfo?.lastName) ?
                                    <span className="w-[160px] h-4 text-center text-slate-500 text-sm">
                                        {profileInfo?.firstName} {profileInfo?.lastName}
                                    </span>
                                    :
                                    <div className="bg-[#EEEEEE] w-[160px] h-4 rounded-[104px]"></div>
                            }
                            {
                                profileInfo?.email ?
                                    <span className="w-[160px] h-2 text-center text-slate-500 text-sm">
                                        {profileInfo?.email}
                                    </span>
                                    :
                                    <div className="bg-[#EEEEEE] w-[72px] h-2 rounded-[104px]"></div>
                            }

                        </div>
                    </div>
                    <div className="mt-10 flex flex-col items-center gap-4">
                        <div className="w-[237px] h-[44px] bg-[#EEEEEE] rounded-lg"></div>
                        <div className="w-[237px] h-[44px] bg-[#EEEEEE] rounded-lg"></div>
                        <div className="w-[237px] h-[44px] bg-[#EEEEEE] rounded-lg"></div>
                        <div className="w-[237px] h-[44px] bg-[#EEEEEE] rounded-lg"></div>
                        <div className="w-[237px] h-[44px] bg-[#EEEEEE] rounded-lg"></div>
                    </div>

                    {
                        links && links?.map((li, index) => {
                            console.log(li);
                            return (
                                <div
                                    className="absolute left-[56px]"
                                    style={{ top: `${44 + index * 10 + index * 1}%` }}
                                    key={li?.id}
                                >
                                    <Link href={`${li?.url ? li?.url : "#"}`} target="_blank">
                                        <div
                                            className={`w-[237px] h-[44px] rounded-lg px-4 flex justify-between cursor-pointer`}
                                            style={{ backgroundColor: `${listArray[li?.selectedItem - 1]?.color}` }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={listArray[li?.selectedItem - 1]?.icon}
                                                    alt={listArray[li?.selectedItem - 1]?.title}
                                                    width={16}
                                                    height={16}
                                                    style={{ filter: "invert(1)" }}
                                                />
                                                <p className="text-white">
                                                    {listArray[li?.selectedItem - 1]?.title}
                                                </p>
                                            </div>
                                            <Image
                                                src={"/images/arrow-right.svg"}
                                                alt="Caret"
                                                width={16}
                                                height={16}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default Preview;
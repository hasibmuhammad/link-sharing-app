"use client";
import { RootState } from "@/app/store/store";
import { listArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const MobileMockup = (): JSX.Element => {
    const links = useSelector((state: RootState) => { return state?.links?.links });
    const profileInfo = useSelector((state: RootState) => { return state.profile });

    return (
        <div className="relative">
            <Image
                src={"/images/phone-mockup.svg"}
                alt="Phone mockup"
                width={308}
                height={632}
            />

            {
                profileInfo?.profileImage && <div className="absolute top-[62px] left-[106px]">
                    <div className="w-24 h-24 border-4 border-primary rounded-full">
                        <Image
                            src={profileInfo.profileImage}
                            alt="Profile Image"
                            className="w-full h-full object-cover rounded-full"
                            width={96}
                            height={96}
                        />
                    </div>
                </div>
            }

            {
                links && links?.map((li, index) => {
                    const currentLi = listArray?.filter(item => { return item?.id === li?.selectedItem });
                    return (
                        <div
                            className="absolute left-[35px]"
                            style={{ top: `${44 + index * 10}%` }}
                            key={li?.id}
                        >
                            {
                                li?.url ?
                                    <Link href={`${li?.url}`} target="_blank">
                                        <div
                                            className={`w-[237px] h-[44px] rounded-lg px-4 flex justify-between cursor-pointer`}
                                            style={{ backgroundColor: currentLi[0]?.color }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={currentLi[0]?.icon}
                                                    alt={currentLi[0]?.title}
                                                    width={16}
                                                    height={16}
                                                    style={{ filter: "invert(1)" }}
                                                />
                                                <p className="text-white">
                                                    {currentLi[0]?.title}
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
                                    :
                                    <div
                                        className={`w-[237px] h-[44px] rounded-lg px-4 flex justify-between cursor-pointer`}
                                        style={{ backgroundColor: currentLi[0]?.color }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={currentLi[0]?.icon}
                                                alt={currentLi[0]?.title}
                                                width={16}
                                                height={16}
                                                style={{ filter: "invert(1)" }}
                                            />
                                            <p className="text-white">
                                                {currentLi[0]?.title}
                                            </p>
                                        </div>
                                        <Image
                                            src={"/images/arrow-right.svg"}
                                            alt="Caret"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MobileMockup
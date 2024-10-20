"use client";
import PreviewHeader from "@/app/components/ui/PreviewHeader";
import { RootState } from "@/app/store/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Preview = (): JSX.Element => {
    const links = useSelector((state: RootState) => { return state?.links?.links });
    const listArray = [
        { id: 1, title: "GitHub", icon: "/images/github.svg", color: "rgba(26, 26, 26, 1)", link: "https://github.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
        { id: 2, title: "YouTube", icon: "/images/youtube.svg", color: "rgba(238, 57, 57, 1)", link: "https://www.youtube.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:user\/|c\/)?|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
        { id: 3, title: "LinkedIn", icon: "/images/linkedin.svg", color: "rgba(45, 104, 255, 1)", link: "https://linkedin.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?linkedin\.com\/(?:in|pub|company)\/([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
        { id: 4, title: "Facebook", icon: "/images/facebook.svg", color: "rgba(253, 189, 72, 0.8)", link: "https://www.facebook.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:profile\.php\?id=|people\/)?([a-zA-Z0-9._-]+)(?:\/.*)?$/ },
        { id: 5, title: "Frontend Mentor", icon: "/images/frontendmentor.svg", color: "rgba(22, 117, 169, 0.9)", link: "https://www.frontendmentor.io/", regEx: /^https:\/\/www.frontendmentor.io\/profile\/.+$/ },
        { id: 6, title: "Twitch", icon: "/images/twitch.svg", color: "rgba(201, 96, 164, 0.6)", link: "https://www.twitch.tv/", regEx: /^(?:https?:\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
        { id: 7, title: "Stack Overflow", icon: "/images/stackoverflow.svg", color: "rgba(46, 167, 51, 0.9)", link: "https://stackoverflow.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?stackoverflow\.com\/users\/([0-9]+)(?:\/.*)?$/ },
        { id: 8, title: "Dev.to", icon: "/images/devto.svg", color: "rgba(51, 51, 51, 1)", link: "https://dev.to/", regEx: /^(?:https?:\/\/)?(?:www\.)?dev\.to\/([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
        { id: 9, title: "CodeWars", icon: "/images/codewars.svg", color: "rgba(138, 26, 80, 1)", link: "https://www.codewars.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?codewars\.com\/users\/([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
        { id: 10, title: "CodePen", icon: "/images/codepen.svg", color: "rgba(238, 47, 117, 0.6)", link: "https://codepen.io/", regEx: /^(?:https?:\/\/)?(?:www\.)?codepen\.io\/([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
        { id: 11, title: "freeCodeCamp", icon: "/images/freecodecamp.svg", color: "rgba(48, 34, 103, 1)", link: "https://www.freecodecamp.org/", regEx: /^(?:https?:\/\/)?(?:www\.)?freecodecamp\.org\/([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
        { id: 12, title: "Twitter", icon: "/images/twitter.svg", color: "rgba(47, 132, 229, 0.8)", link: "https://twitter.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)(?:\/.*)?$/ },
        { id: 13, title: "Email", icon: "/images/email.svg", color: "rgba(155, 100, 214, 1)", link: "https://www.gmail.com", regEx: /^(?:https?:\/\/)?(?:www\.)?gitlab\.com\/([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
        { id: 14, title: "GitLab", icon: "/images/gitlab.svg", color: "rgba(114, 85, 82, 0.7)", link: "https://about.gitlab.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?gitlab\.com\/([a-zA-Z0-9_-]+)(?:\/.*)?$/ },
    ];


    return (
        <main className="relative">
            <section className="md:bg-primary bg-white h-[357px] md:py-10 rounded-b-3xl">
                <header className="px-5 lg:px-0">
                    <div className="max-w-[1300px] w-full mx-auto bg-white py-6 md:px-6 rounded-lg">
                        <PreviewHeader />
                    </div>
                </header>
            </section>

            <section className="flex justify-center">
                <div className="absolute top-0 translate-y-52 bg-white md:w-[349px] w-full h-[550px] md:rounded-2xl md:shadow-preview">
                    <div className="md:mt-12 space-y-6">
                        <div className="flex justify-center">
                            <div className="bg-[#EEEEEE] w-24 h-24 rounded-full border-4 border-primary"></div>
                        </div>
                        <div className="space-y-3 flex flex-col items-center">
                            <div className="bg-[#EEEEEE] w-[160px] h-4 rounded-[104px]"></div>
                            <div className="bg-[#EEEEEE] w-[72px] h-2 rounded-[104px]"></div>
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
                                            style={{ backgroundColor: `${listArray[li?.selectedItem - 1].color}` }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={listArray[li?.selectedItem - 1].icon}
                                                    alt={listArray[li?.selectedItem - 1].title}
                                                    width={16}
                                                    height={16}
                                                    style={{ filter: "invert(1)" }}
                                                />
                                                <p className="text-white">
                                                    {listArray[li?.selectedItem - 1].title}
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
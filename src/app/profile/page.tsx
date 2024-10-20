"use client";
import { Header } from "@/app/components/ui/Header";
import Image from "next/image";
import { useState } from "react";

const Profile = (): JSX.Element => {
    const [links, setLinks] = useState<{ id: number, link: string, selectedItem: number, isDropdownOpen: boolean }[]>([]);

    const handleAddNewLink = (): void => {
        const newLink = {
            id: links.length + 1,
            link: `Link #${links.length + 1}`,
            selectedItem: 1,
            isDropdownOpen: false,
        };
        setLinks([...links, newLink]);
    };

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

    const toggleDropdown = (id: number): void => {
        setLinks(links.map(link => { return link.id === id ? { ...link, isDropdownOpen: !link.isDropdownOpen } : link }));
    };

    const handlePlatformSelect = (id: number, selectedItem: number): void => {
        setLinks(links.map(link => { return link.id === id ? { ...link, selectedItem, isDropdownOpen: false } : link }));
    };

    const handleRemoveLink = (id: number): void => {
        setLinks(links.filter(link => { return link.id !== id }));
    };

    return (
        <>
            <header className="px-5 lg:px-0">
                <div className="max-w-[1300px] w-full mx-auto my-10 bg-white p-6 rounded-lg">
                    <Header />
                </div>
            </header>
            <section className="max-w-[1300px] mx-auto px-5 lg:px-0">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-white md:col-span-1 p-6 h-[800px] rounded-lg hidden lg:flex justify-center items-center">
                        <div className="relative">
                            <Image
                                src={"/images/phone-mockup.svg"}
                                alt="Phone mockup"
                                width={308}
                                height={632}
                            />

                            {
                                links && links?.map((li, index) => {
                                    const currentLi = listArray?.filter(item => { return item?.id === li?.selectedItem });
                                    return (
                                        <div
                                            className="absolute left-[35px]"
                                            style={{ top: `${44 + index * 10}%` }}
                                            key={li?.id}
                                        >
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
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="bg-white p-10 col-span-3 lg:col-span-2 rounded-lg">
                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Customize your links</h1>
                            <p className="text-slate-400">
                                Add/edit/remove links below and then share all your profiles with the world!
                            </p>
                        </div>
                        <div className="mt-10">
                            <button onClick={handleAddNewLink} disabled={links?.length === 5} className="hover:bg-primary/10 w-full border border-primary rounded-lg font-bold text-primary py-2 disabled:cursor-not-allowed">+ Add New Link</button>
                        </div>

                        {links.length === 0 && (
                            <div className="mt-10 bg-background rounded-xl flex justify-center items-center h-[456px]">
                                <div>
                                    <div className="flex justify-center items-center">
                                        <Image
                                            src={"/images/empty-link-placeholder.svg"}
                                            width={250}
                                            height={160}
                                            alt="Empty Link Placeholder"
                                        />
                                    </div>
                                    <h2 className="text-center font-bold text-2xl md:text-4xl">Let&apos;s get you started</h2>
                                    <p className="max-w-[560px] text-center">
                                        Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
                                    </p>
                                </div>
                            </div>
                        )}

                        {links.map((li) => {
                            const selectedOne = listArray.find(item => { return item.id === li.selectedItem });
                            return (
                                <div key={li.id} className="mt-5">
                                    <div className="p-5 bg-background rounded-xl h-[273px]">
                                        <div className="flex items-center gap-1">
                                            <div>
                                                <Image
                                                    src={"/images/hamburger.svg"}
                                                    width={12}
                                                    height={24}
                                                    alt="Menu"
                                                />
                                            </div>
                                            <div className="w-full flex items-center justify-between">
                                                <span className="text-slate-500 font-bold">
                                                    {li.link}
                                                </span>
                                                <span onClick={() => { handleRemoveLink(li.id); }} className="text-slate-500 font-medium cursor-pointer">Remove</span>
                                            </div>
                                        </div>

                                        <div>
                                            <form className="space-y-3">
                                                <div className="relative mt-2">
                                                    <label htmlFor={`platform-${li.id}`} className="text-xs">Platform</label>
                                                    <div id={`platform-${li.id}`}>
                                                        <div onClick={() => { toggleDropdown(li.id); }} className="relative bg-white rounded-lg cursor-pointer border px-4 h-12 flex items-center">
                                                            <div className="flex items-center gap-3">
                                                                {selectedOne && (
                                                                    <>
                                                                        <Image
                                                                            src={selectedOne.icon}
                                                                            alt={selectedOne.title}
                                                                            width={16}
                                                                            height={16}
                                                                        />
                                                                        {selectedOne.title}
                                                                    </>
                                                                )}
                                                            </div>
                                                            <div className={`absolute right-6 duration-500 transition-rotate ease-out ${li.isDropdownOpen ? "rotate-180" : "rotate-0"}`}>
                                                                <Image
                                                                    src="/images/caret.svg"
                                                                    alt="Caret"
                                                                    width={13}
                                                                    height={13}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className={`${li.isDropdownOpen ? "absolute z-10 w-full" : "hidden"} bg-white border rounded-lg px-4 mt-[6px] overflow-auto`}>
                                                        {listArray.map(item => {
                                                            return (
                                                                <li key={item.id} onClick={() => { handlePlatformSelect(li.id, item.id); }} className="cursor-pointer flex items-center gap-3 border-b h-12">
                                                                    <Image
                                                                        src={item.icon}
                                                                        alt={item.title}
                                                                        width={16}
                                                                        height={16}
                                                                    />
                                                                    {item.title}
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <label className="text-xs" htmlFor="link">Link</label>
                                                    <div className="relative flex items-center">
                                                        <input
                                                            placeholder={`e.g. ${selectedOne ? selectedOne.link : ""}`}
                                                            className="pl-10 w-full bg-white rounded-lg border px-4 h-12 flex items-center focus:outline-none focus:border-primary focus:shadow-custom"
                                                        />
                                                        <div className="absolute top-[40%] left-4">
                                                            <Image
                                                                src={"/images/logo-links.svg"}
                                                                alt="Link"
                                                                width={16}
                                                                height={16}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {
                            links?.length > 0 &&
                            <div className="mt-10">
                                <hr />
                                <div className="mt-10 flex justify-end items-center">
                                    <button className="bg-primary px-5 py-2 rounded-lg text-white">Save</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;

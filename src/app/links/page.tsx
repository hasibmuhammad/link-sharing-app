"use client";
import { Header } from "@/app/components/ui/Header";
import MobileMockupWrapper from "@/app/components/ui/MobileMockupWrapper";
import { RootState } from "@/app/store/store";
import { listArray } from "@/constants";
import { addLink, handlePlatformSelectRedux, removeLink, toggleDropDownRedux, update, updateLink } from "@/redux/features/links/linksSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Links = (): JSX.Element | null => {
    const [isMounted, setIsMounted] = useState(false);
    const [error, setError] = useState<{ id: number | null; message: string }[]>([]);

    const links = useSelector((state: RootState) => { return state?.links?.links });

    const dispatch = useDispatch();

    const handleAddNewLink = (): void => {
        dispatch(addLink());
    };

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    const toggleDropdown = (id: number): void => {
        // setLinks(links.map(link => { return link.id === id ? { ...link, isDropdownOpen: !link.isDropdownOpen } : link }));
        dispatch(toggleDropDownRedux(id));
    };

    const handlePlatformSelect = (id: number, selectedItem: number): void => {
        // setLinks(links.map(link => { return link.id === id ? { ...link, selectedItem, isDropdownOpen: false } : link }));
        dispatch(handlePlatformSelectRedux({ id, selectedItem }));
    };

    const handleRemoveLink = (id: number): void => {
        // setLinks(links.filter(link => { return link.id !== id }));
        dispatch(removeLink(id))
    };

    const handleInputChange = (id: number, newLink: string): void => {
        dispatch(updateLink({ id, newLink }));
    };



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        setError([]);

        links?.forEach((item) => {
            if (item.url === "") {
                setError((prevErrors) => {
                    // Check if the error with the same id already exists
                    const errorExists = prevErrors.some((error) => {
                        return error.id === item?.id
                    });
                    if (!errorExists) {
                        // Add the new error if it doesn't exist
                        return [...prevErrors, { id: item?.id, message: "Can't be empty!" }];
                    }
                    return prevErrors; // Return the previous errors without modification if error already exists
                });
            }
        });

        if (error.length === 0) {
            dispatch(update());
        }


    }


    return (
        <>
            <header className="px-5 lg:px-0">
                <div className="max-w-[1300px] w-full mx-auto md:my-10 md:bg-white py-6 md:p-6 rounded-lg">
                    <Header />
                </div>
            </header>
            <section className="max-w-[1300px] mx-auto px-5 lg:px-0">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-white md:col-span-1 p-6 h-[800px] rounded-lg hidden lg:flex justify-center items-center">
                        <MobileMockupWrapper />
                    </div>
                    <div className="bg-white py-5 md:p-10 col-span-3 lg:col-span-2 rounded-lg">
                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Customize your links</h1>
                            <p className="text-slate-400">
                                Add/edit/remove links below and then share all your profiles with the world!
                            </p>
                        </div>
                        <div className="mt-10">
                            <button onClick={handleAddNewLink} disabled={links?.length === 5} className="hover:bg-primary/10 w-full border border-primary rounded-lg font-bold text-primary py-2 disabled:cursor-not-allowed">+ Add New Link</button>
                        </div>

                        {links?.length === 0 && (
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

                        {links?.map((li, index) => {
                            const selectedOne = listArray.find(item => { return item.id === li.selectedItem });
                            return (
                                <div key={index} className="mt-5">
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
                                            <form id="form" onSubmit={handleSubmit} className="space-y-3">
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
                                                                        <span>
                                                                            {selectedOne.title}
                                                                        </span>
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
                                                                <li
                                                                    key={item.id} onClick={() => { handlePlatformSelect(li.id, item.id); }}
                                                                    className={`cursor-pointer flex items-center gap-3 border-b h-12 ${selectedOne?.id === item?.id ? "text-primary" : ""}`}>
                                                                    <Image
                                                                        src={item.icon}
                                                                        alt={item.title}
                                                                        width={16}
                                                                        height={16}
                                                                        className={`${selectedOne?.id === item?.id ? "filter" : ""}`}
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
                                                            value={li?.url}
                                                            onChange={(e) => { handleInputChange(li.id, e.target.value); }}
                                                            placeholder={`e.g. ${selectedOne ? selectedOne.link : ""}`}
                                                            className={`pl-10 w-full bg-white rounded-lg border px-4 h-12 flex items-center focus:outline-none focus:border-primary focus:shadow-custom
                                                                        ${error.some((er) => {
                                                                return er.id === li?.id
                                                            }) ? "border-red-500" : ""}
                                                                    `}
                                                        />
                                                        {
                                                            error && error.map((er, idx) => {
                                                                if (er.id === li?.id) {

                                                                    return (
                                                                        <div key={idx} className="absolute right-4">
                                                                            <p className="text-red-400">{er?.message}</p>
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                        }
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
                                <div className="mt-10 flex md:justify-end md:items-center">
                                    <button form="form" type="submit" className="bg-primary px-5 py-2 rounded-lg text-white hover:bg-primary/40 w-full md:w-[100px]">Save</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Links;


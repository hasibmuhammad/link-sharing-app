"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = (): JSX.Element => {
    const pathname = usePathname();

    const isActive = (path: string): string => {
        return pathname === path ? "bg-primary/10 text-primary px-5 py-2 rounded-lg font-semibold" : "text-gray-500 font-semibold";
    };

    return (
        <header>
            <nav>
                <ul className="flex justify-between items-center max-w-7xl mx-auto">
                    <li>
                        <Link href={"/links"}>
                            <Image className="hidden md:block" src="/images/logo-devlinks-large.svg" width={183} height={40} alt="Logo - Devlinks Logo" />
                            <Image className="md:hidden block" src="/images/logo-devlinks-small.svg" width={40} height={40} alt="Logo - Devlinks Logo" />
                        </Link>
                    </li>
                    <ul className="flex gap-10">
                        <li className={`flex items-center gap-2 cursor-pointer ${isActive("/links")} hover:text-primary`}>
                            <Link href="/links" className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 21 20"
                                >
                                    <path d="M11.154 14.65a.936.936 0 0 1 0 1.329l-.464.464a4.689 4.689 0 1 1-6.631-6.631l1.884-1.884a4.687 4.687 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.813 2.813 0 0 0-3.857.114l-1.883 1.882a2.813 2.813 0 1 0 3.978 3.978l.464-.464a.936.936 0 0 1 1.327 0ZM16.94 3.558a4.695 4.695 0 0 0-6.63 0l-.465.464a.94.94 0 1 0 1.328 1.328l.464-.464a2.813 2.813 0 0 1 3.978 3.978l-1.883 1.885a2.813 2.813 0 0 1-3.858.111.942.942 0 0 0-1.25 1.407 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .002-6.633v-.002Z"></path>
                                </svg>
                                <p className="hidden md:block">Links</p>
                            </Link>
                        </li>
                        <li className={`flex items-center gap-2 cursor-pointer ${isActive("/profile")} hover:text-primary`}>
                            <Link href="/profile" className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 21 20"
                                    className="header--logo"
                                >
                                    <path d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z"></path>
                                </svg>
                                <p className="hidden md:block">Profile Details</p>
                            </Link>
                        </li>
                    </ul>
                    <li>
                        <Link href={"/preview"}>
                            <button className="hover:bg-primary/10 border border-primary px-5 py-2 text-primary rounded-lg font-bold">
                                <span className="hidden md:block">Preview</span>
                                <Image className="md:hidden block" src="/images/preview.svg" width={20} height={20} alt="Logo - Devlinks Logo" />
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

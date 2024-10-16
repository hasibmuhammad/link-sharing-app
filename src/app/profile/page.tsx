"use client";
import Image from "next/image";
import { useState } from "react";

const Profile = (): JSX.Element => {
    const [links, setLinks] = useState([]);
    return (
        <section className="max-w-[1300px] mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-white md:col-span-1 p-6 h-[800px] rounded-lg flex justify-center items-center">
                    <Image
                        src={"/images/phone-mockup.svg"}
                        alt="Phone mockup"
                        width={308}
                        height={632}
                    />
                </div>
                <div className="bg-white p-10 md:col-span-2 h-[800px] rounded-lg">
                    <div className="space-y-4">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Customize your links</h1>
                        <p className="text-slate-400">
                            Add/edit/remove links below and then share all your profiles with the world!
                        </p>
                    </div>
                    <div className="mt-10">
                        <button className="hover:bg-primary/10 w-full border border-primary rounded-lg font-bold text-primary py-2">+Add New Link</button>
                    </div>

                    {
                        links?.length === 0 &&
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
                                <h2 className="text-center font-bold text-2xl md:text-4xl">Let’s get you started</h2>
                                <p className="max-w-[560px] text-center">
                                    Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Profile
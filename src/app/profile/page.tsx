"use client";
import { Header } from "@/app/components/ui/Header";
import MobileMockupWrapper from "@/app/components/ui/MobileMockupWrapper";
import { RootState } from "@/app/store/store";
import { updateProfileImage } from "@/redux/features/profile/profileSlice";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = (): JSX.Element | null => {
    const [isMounted, setIsMounted] = useState(false);
    const uploadFileRef = useRef(null);
    const profileInfo = useSelector((state: RootState) => { return state?.profile });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");


    const dispatch = useDispatch();

    useEffect(() => {
        setSelectedImage(profileInfo?.profileImage ?? null);
    }, [profileInfo]);

    // Helper function to convert a Blob to a Base64 string
    const convertBlobToBase64 = (blob: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = (): void => { resolve(reader.result as string); };
            reader.onerror = (error): void => { reject(error); };
            reader.readAsDataURL(blob);
        });
    };

    const handleImageUpload = (): void => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = async (event: Event): Promise<void> => {
            const target = event.target as HTMLInputElement;
            const file = target.files && target.files[0];

            if (file) {
                try {
                    const base64Image = await convertBlobToBase64(file);
                    setSelectedImage(base64Image);
                    dispatch(updateProfileImage(base64Image));
                } catch (error) {
                    console.error("Error converting image to Base64:", error);
                }
            }
        };
        input.click();
    };

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    const handleSubmitProfile = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setFirstNameError("");
        setLastNameError("");

        if (!firstName) {
            setFirstNameError("First name is required!");
        }

        if (!lastName) {
            setLastNameError("Last name is required!");
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
                            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Profile Details</h1>
                            <p className="text-slate-400">
                                Add your details to create a personal touch to your profile.
                            </p>
                        </div>

                        <div className="mt-10 space-y-4">
                            <div className="bg-background rounded-xl p-5 space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
                                    <label htmlFor="profilepicture" className=" text-slate-400">Profile Picture</label>
                                    <div className="flex flex-col md:flex-row md:items-center md:gap-10">
                                        <div
                                            ref={uploadFileRef}
                                            className={`relative rounded-xl w-[193px] h-[193px] bg-primary/20 cursor-pointer`}
                                            onClick={handleImageUpload}
                                        >

                                            {selectedImage && <div className={`absolute w-full flex justify-center items-center h-full object-cover hover:bg-black/40 hover:rounded-xl`}>
                                                <div className="text-white flex flex-col items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 40 40"><path fill="current" d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"></path></svg>
                                                    <p className="font-semibold">
                                                        + Change Image
                                                    </p>
                                                </div>
                                            </div>}

                                            {selectedImage ? (
                                                <div className="w-full h-full">
                                                    <Image
                                                        src={selectedImage}
                                                        alt="Uploaded"
                                                        width={193}
                                                        height={193}
                                                        className="object-cover w-full h-full rounded-xl"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex justify-center items-center h-full">
                                                    <div className="text-primary flex flex-col items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 40 40"><path fill="current" d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"></path></svg>
                                                        <p className="font-semibold">
                                                            + Upload Image
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-slate-400 text-sm max-w-[222px] w-full">
                                            Image must be below 1024x1024px. Use PNG or JPG format.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <form id="profile-form" onSubmit={handleSubmitProfile}>
                                <div className="bg-background rounded-xl p-5 space-y-4">
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        <label htmlFor="profilepicture" className=" text-slate-400 max-w-[280px] w-full">First Name *</label>
                                        <div className="w-full relative">
                                            <input
                                                value={firstName}
                                                onChange={(e) => { setFirstName(e.target.value); }}
                                                placeholder="Enter first name"
                                                className={`w-full bg-white rounded-lg border px-4 h-12 flex items-center focus:outline-none focus:border-primary focus:shadow-custom ${firstNameError && "border border-red-400"}`}
                                            />
                                            {
                                                firstNameError &&
                                                <p className="text-red-400 absolute top-[16px] right-4 text-xs">
                                                    {firstNameError}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        <label htmlFor="profilepicture" className=" text-slate-400 max-w-[280px] w-full">Last Name *</label>
                                        <div className="w-full relative">
                                            <input
                                                value={lastName}
                                                onChange={(e) => { setLastName(e.target.value); }}
                                                placeholder="Enter last name"
                                                className={`w-full bg-white rounded-lg border px-4 h-12 flex items-center focus:outline-none focus:border-primary focus:shadow-custom ${lastNameError && "border border-red-400"}`}
                                            />
                                            {
                                                lastNameError &&
                                                <p className="text-red-400 absolute top-[16px] right-4 text-xs">
                                                    {lastNameError}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        <label htmlFor="profilepicture" className=" text-slate-400 max-w-[280px] w-full">Email</label>
                                        <div className="w-full">
                                            <input
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value); }}
                                                placeholder="Enter email"
                                                className={`w-full bg-white rounded-lg border px-4 h-12 flex items-center focus:outline-none focus:border-primary focus:shadow-custom`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="mt-10">
                            <hr />
                            <div className="mt-10 flex md:justify-end md:items-center">
                                <button type="submit" form="profile-form" className="bg-primary px-5 py-2 rounded-lg text-white w-full md:w-[100px]">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;

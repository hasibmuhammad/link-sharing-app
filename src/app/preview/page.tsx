import Image from "next/image";

const Preview = (): JSX.Element => {
    return (
        <section className="max-w-[1300px] mx-auto">
            <div className="bg-white p-6 max-w-[560px] w-full h-[800px] rounded-lg flex justify-center items-center">
                <Image
                    src={"/images/phone-mockup.svg"}
                    alt="Phone mockup"
                    width={308}
                    height={632}
                />
            </div>
        </section>
    )
}

export default Preview;
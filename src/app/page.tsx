"use client";
import { Header } from "@/app/components/ui/Header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.push("/links");
  }, [router]);
  return (
    <main>
      <header className="px-5 lg:px-0">
        <div className="max-w-[1300px] w-full mx-auto my-10 bg-white p-6 rounded-lg">
          <Header />
        </div>
      </header>
    </main>
  )
}

export default Home;

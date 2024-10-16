"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.push("/links");
  }, [router]);
  return (
    <main>

    </main>
  )
}

export default Home;

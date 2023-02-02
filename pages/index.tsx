import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import Parallax from "../components/parallax";
import Portfolio from "../components/Portfolio";
import TtechStack from "../components/techStack";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Parallax />
        <Portfolio />
        <TtechStack />
      </main>
    </div>
  );
};

export default Home;

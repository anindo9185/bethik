import type { NextPage } from "next";
import Head from "next/head";
import TextSelection from "../components/TextSelection";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TextSelection />
    </div>
  );
};

export default Home;

import Head from "next/head";
import Image from "next/image";
import LoginPage from "./login/LoginPage";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Learncab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginPage />
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import { HomeAbout, MainHero, PromoBanner } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Private Travel Services | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHero />
      <HomeAbout />
      <PromoBanner />
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Layout, { siteTitle } from "@/components/layout";

import utilStyles from "@/styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title"></h1>
      Read <Link href="/posts/first-post">the first post!</Link>
      <br />
      Read <Link href="/posts/something">something!</Link>
      <Image
        src="/images/Ayrton_Senna_1988_Canada.webp"
        width={500}
        height={500}
        alt="Ayrton Senna 1988"
      />
    </Layout>
  );
}

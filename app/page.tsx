import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title"></h1>
      Read <Link href="/posts/first-post">this page!</Link>
      <Image
        src="/images/Ayrton_Senna_1988_Canada.webp"
        width={500}
        height={500}
        alt="Ayrton Senna 1988"
      />
    </div>
  );
}

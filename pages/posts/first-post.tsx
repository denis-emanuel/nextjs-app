import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>Random page</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>Random page</h1>
      <Link href="/">Back to home</Link>
    </div>
  );
}

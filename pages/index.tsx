import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import About from "../components/About";
import ArtCollection from "../components/ArtCollection";
import Home from "../components/Home";

export default function Main() {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/#home") {
      setTimeout(() => {
        document
          .getElementById("homeSection")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
    if (router.asPath === "/#about") {
      setTimeout(() => {
        document
          .getElementById("aboutSection")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Michelangelo Exhibition</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Michelangelo Exhibition main page" />
        <meta
          name="keywords"
          content="Michelangelo, Exhibition, Michelangelo Exhibition"
        />
        <meta property="og:title" content="Michelangelo Exhibition" />
        <meta
          property="og:description"
          content="Michelangelo Exhibition main page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
        <About />
        <ArtCollection full={false} />
      </main>
    </>
  );
}

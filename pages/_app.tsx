import "@/styles/globals.css";
import "@/styles/mobile.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/router";
import { isMobile as checkMobile } from "@/lib/isMobile";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (checkMobile() && !router.pathname.startsWith('/m')) {
      router.push(`/m${router.pathname}`);
    }
  }, [router]);

  const headChildren: ReactNode = (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebApplication",
            name: "OpenScroll",
            url: "https://www.openscroll.me/",
            description: "Unveil knowledge and ideas with ease.",
            creator: {
              "@type": "Person",
              name: "The Scroll",
            },
            datePublished: "2024-01-01",
            applicationCategory: "SocialNetworkingApplication",
          }),
        }}
      />
    </>
  );

  return (
    <>
      <Head children={headChildren} />
      <Component {...pageProps} />
    </>
  );
}
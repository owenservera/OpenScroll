// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Global structured data */}
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
                name: "The Scroll", // Replace with your name or brand
              },
              datePublished: "2024-01-01",
              applicationCategory: "SocialNetworkingApplication",
            }),
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

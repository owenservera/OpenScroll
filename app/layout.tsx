import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/test.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.openscroll.me'),
  title: {
    default: "OpenScroll",
    template: "%s | OpenScroll"
  },
  description: "OpenScroll - Effortless web browsing with smart auto-scrolling technology. Save time and enhance your reading experience.",
  keywords: ["auto scroll", "web browsing", "reading tool", "productivity", "browser extension", "scroll automation"],
  authors: [{ name: "OpenScroll Team" }],
  creator: "OpenScroll",
  publisher: "OpenScroll",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.openscroll.me',
    languages: {
      'en-US': 'https://www.openscroll.me',
    },
  },
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.openscroll.me',
    siteName: 'OpenScroll',
    title: 'OpenScroll - Smart Auto-Scrolling Technology',
    description: 'OpenScroll - Effortless web browsing with smart auto-scrolling technology. Save time and enhance your reading experience.',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'OpenScroll Logo',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenScroll - Smart Auto-Scrolling Technology',
    description: 'OpenScroll - Effortless web browsing with smart auto-scrolling technology. Save time and enhance your reading experience.',
    images: ['/favicon/android-chrome-512x512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: '48x48' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/favicon/site.webmanifest' },
      { rel: 'android-chrome', url: '/favicon/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/favicon/android-chrome-512x512.png', sizes: '512x512' }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "OpenScroll",
            "description": "OpenScroll - Effortless web browsing with smart auto-scrolling technology. Save time and enhance your reading experience.",
            "applicationCategory": "BrowserExtension",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "OpenScroll Team"
            }
          })}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

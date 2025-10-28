import { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "SCTI - Quality Education in Nunthala, Sindhuli",
  description: "SCTI",
  keywords: "SCTI",
  url: "https://www.SCTI.com",
  openGraph: {
    type: "website",
    url: "https://www.SCTI.com",
    title: "SCTI - Quality Education in Nunthala, Sindhuli",
    description:
      "Join SCTI for diploma courses. Located in Nunthala, Sindhuli, we nurture future leaders with discipline and academic excellence.",
  },
  twitter: {
    handle: "@SCTIcollege",
    site: "@SCTIcollege",
    cardType: "summary_large_image",
    authors: [{ name: "munabasnet" }],
  },
};

export default function RootLayout({ children }) {
  console.log(
    "RootLayout rendering with URL:",
    process.env.NEXT_PUBLIC_CONVEX_URL
  );
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error(
      "NEXT_PUBLIC_CONVEX_URL is not set in the environment variables."
    );
  }

  return (
    <html lang="en">
      <head>
        {/* 🚫 Disable favicon completely */}
        <link rel="icon" href="data:," />
      </head>
      <body className="flex flex-col min-h-screen">
        <NextTopLoader showSpinner={false} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import NextTopLoader from "nextjs-toploader";


  export const metadata = {
  title: "SCTI - Quality Education in Nunthala, Sindhuli",
  description:
    "SCTI",
  keywords:
    "SCTI Plus Two College, Sindhuli college, Nunthala college, plus two college Nepal, +2 Science, +2 Management, +2 Humanities, NEB college, best college in Sindhuli, Siddha Baba +2, Sidhuli Gurukul colllege, quality education, student success, academic excellence, discipline in education, college in Sindhuli",
  url: "https://www.SCTI.com",
  openGraph: {
    type: "website",
    url: "https://www.SCTI.com",
    title: "SCTI  - Quality Education in Nunthala, Sindhuli",
    description:
      "Join SCTI for diploma courses. Located in Nunthala, Sindhuli, we nurture future leaders with discipline and academic excellence.",
    images: [
      {
        url: "https://i.ibb.co/8L6fGBtr/ee15ae19-6cb9-428b-8b3a-d0303cd82f45.jpg",
        width: 1200,
        height: 630,
        alt: "SCTI in Sindhuli",
      },
    ],
  },
  twitter: {
    handle: "@SCTIcollege", 
    site: "@SCTIcollege",
    cardType: "summary_large_image",
      authors: [{ name: "munabasnet" }],
  },
};



export default function RootLayout({ children }) {
  console.log("RootLayout rendering with URL:", process.env.NEXT_PUBLIC_CONVEX_URL);
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL is not set in the environment variables.");
  }

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
      <NextTopLoader showSpinner={false}/>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
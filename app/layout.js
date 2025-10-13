import { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import NextTopLoader from "nextjs-toploader";


  export const metadata = {
  title: "SiddhaBaba Plus Two College - Quality Education in Nunthala, Sindhuli",
  description:
    "SiddhaBaba Plus Two College offers quality +2 education in Science, Management, and Humanities streams. Located in Nunthala, Sindhuli, we are committed to academic excellence, discipline, and student success.",
  keywords:
    "SiddhaBaba Plus Two College, Sindhuli college, Nunthala college, plus two college Nepal, +2 Science, +2 Management, +2 Humanities, NEB college, best college in Sindhuli, Siddha Baba +2, Sidhuli Gurukul colllege, quality education, student success, academic excellence, discipline in education, college in Sindhuli",
  url: "https://www.siddhababaplustwo.com",
  openGraph: {
    type: "website",
    url: "https://www.siddhababaplustwo.com",
    title: "SiddhaBaba Plus Two College - Quality Education in Nunthala, Sindhuli",
    description:
      "Join SiddhaBaba Plus Two College for NEB +2 programs in Science, Management, and Humanities. Located in Nunthala, Sindhuli, we nurture future leaders with discipline and academic excellence.",
    images: [
      {
        url: "https://i.ibb.co/8L6fGBtr/ee15ae19-6cb9-428b-8b3a-d0303cd82f45.jpg",
        width: 1200,
        height: 630,
        alt: "SiddhaBaba Plus Two College in Sindhuli",
      },
    ],
  },
  twitter: {
    handle: "@siddhababacollege", 
    site: "@siddhababacollege",
    cardType: "summary_large_image",
      authors: [{ name: "Asuura & girlwhocodes" }],
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
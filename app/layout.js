export const metadata = {
  // Core SEO
  title: {
    default: "SCTI - Quality Education in Nunthala, Sindhuli",
    template: "%s | SCTI", // For dynamic titles on subpages, e.g., "About Us | SCTI"
  },
  description: "Join SCTI for diploma courses in Nunthala, Sindhuli. We nurture future leaders with discipline, academic excellence, and hands-on training in technology and innovation.",
  keywords: "SCTI, Sindhuli college, diploma courses, quality education, Nunthala, technical institute, Nepal education",
  // Viewport for responsive design
  viewport: "width=device-width, initial-scale=1",
  // Robots for search engine crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Canonical URL
  alternates: {
    canonical: "https://www.scti.edu.np", // Replace with your actual domain
  },
  // Favicons
  icons: {
    icon: "/favicon-new.ico",
    shortcut: "/favicon-16x16.png", // Optional: Add more sizes for better support
    apple: "/apple-touch-icon.png",
  },
  // Open Graph (Facebook/LinkedIn)
  openGraph: {
    type: "website",
    url: "https://www.scti.edu.np", // Consistent lowercase domain
    title: "SCTI - Quality Education in Nunthala, Sindhuli",
    description: "Join SCTI for diploma courses. Located in Nunthala, Sindhuli, we nurture future leaders with discipline and academic excellence.",
    siteName: "SCTI",
    images: [
      {
        url: "/og-image.jpg", // Add a 1200x630px image for previews (e.g., campus photo)
        width: 1200,
        height: 630,
        alt: "SCTI Campus in Nunthala, Sindhuli",
      },
    ],
    locale: "en_NP", // For Nepal
    countryName: "Nepal",
  },
  // Twitter (X) Cards
  twitter: {
    card: "summary_large_image",
    site: "@SCTIcollege", // Your official handle
    creator: "@SCTIcollege", // Or "@munabasnet" if personal
    title: "SCTI - Quality Education in Nunthala, Sindhuli",
    description: "Join SCTI for diploma courses. Located in Nunthala, Sindhuli, we nurture future leaders with discipline and academic excellence.",
    images: ["/twitter-image.jpg"], // 1200x675px recommended
  },
};
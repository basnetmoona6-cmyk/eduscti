"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CollegeCTAEnhanced from "./CollegeCTA";

// Initialize the Convex client
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL, {
  unsavedChangesWarning: false,
});

export default function ClientLayout({ children }) {
  return (
    <ConvexProvider client={convex}>
      <NavBar />
      <main className="flex-grow">{children}</main>
      <CollegeCTAEnhanced />
      <Footer />
    </ConvexProvider>
  );
}
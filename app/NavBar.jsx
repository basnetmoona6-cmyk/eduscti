"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useQuery } from "convex/react"
import { api } from "../convex/_generated/api"
import { Menu, X } from "lucide-react"

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const news = useQuery(api.news.getNews) || {
    text: "SCTI College Nunthala, Sindhuli — Call: 9854041424",
  }

  const inPageSections = ["home", "aboutus", "programs", "gallery", "contact"]

  // Scroll handling
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleScroll = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const handleLinkClick = (href, sectionId, isInPage = false) => {
    if (isInPage) handleScroll(sectionId)
    else router.push(href)
    setIsMobileMenuOpen(false)
    setActiveSection(sectionId)
  }

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About Us", href: "/Aboutus", id: "aboutus" },
    { name: "Programs", href: "/programs", id: "programs" },
    { name: "Gallery", href: "/gallery", id: "gallery" },
    { name: "Contact", href: "/contact", id: "contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Marquee */}
      {!isScrolled && (
        <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white text-sm py-2 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee flex gap-8 px-4">
            <span>{news.text}</span>
            <span>{news.text}</span>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 bg-white shadow-md ${isScrolled ? "py-2" : "py-3"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.img
              src="https://i.ibb.co/99tSZyY0/scti-logo.jpg"
              alt="SCTI Logo"
              className="h-10 w-10 rounded-md object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <span className="text-xl font-bold text-purple-700">SCTI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.href, link.id, inPageSections.includes(link.id))}
                className={`font-medium text-gray-700 px-3 py-2 rounded-md transition-all ${
                  activeSection === link.id
                    ? "text-purple-700 bg-purple-50 font-semibold"
                    : "hover:text-purple-700 hover:bg-purple-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/registerform">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:from-purple-700 hover:to-purple-600"
              >
                Pre-Register →
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            className="lg:hidden text-gray-700"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href, link.id, inPageSections.includes(link.id))}
                  className="block py-2 text-gray-700 font-medium hover:text-purple-700"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/registerform">
                <button className="mt-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white w-full py-2 rounded-full text-sm font-semibold shadow hover:from-purple-700 hover:to-purple-600 transition">
                  Pre-Register →
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* CSS for Marquee */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </header>
  )
}

export default NavBar

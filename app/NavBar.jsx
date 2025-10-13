"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { api } from "../convex/_generated/api"
import { useQuery } from "convex/react"

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const navbarRef = useRef(null)
  const dropdownRef = useRef(null)
  const router = useRouter()
  const news = useQuery(api.news.getNews) || {
    text: "SCTI College Nunthala, Sindhuli Phone No.047520365/9843546519",
  }

  const inPageSections = ["home", "aboutus", "programs", "gallery", "viewannouncements", "Contact"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    inPageSections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScrollPosition = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScrollPosition)
    return () => window.removeEventListener("scroll", handleScrollPosition)
  }, [])

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight)
      }
    }
    updateNavbarHeight()
    window.addEventListener("resize", updateNavbarHeight)
    return () => window.removeEventListener("resize", updateNavbarHeight)
  }, [isScrolled])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  const handleScroll = (sectionId) => {
    setActiveSection(sectionId)
    setIsAboutDropdownOpen(false)
    if (inPageSections.includes(sectionId)) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
    setIsAboutDropdownOpen(false)
  }

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prev) => !prev)
  }

  const closeDropdown = () => {
    setIsAboutDropdownOpen(false)
  }

  const handleLinkClick = (href, sectionId, isInPage = false) => {
    if (isInPage) {
      handleScroll(sectionId)
    } else {
      router.push(href)
    }
    setActiveSection(sectionId || activeSection)
    setIsAboutDropdownOpen(false)
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About Us", href: "/Aboutus", id: "aboutus" },
    { name: "Programs", href: "/programs", id: "programs" },
    { name: "Gallery", href: "/gallery", id: "gallery" },
    { name: "Announcement", href: "/viewannouncements", id: "viewannouncements" },
    { name: "Contact", href: "/contact", id: "Contact" },
  ]

  const aboutLinks = [
    { name: "About Us", href: "/Aboutus#about-us" },
    { name: "Why Us", href: "/Aboutus#why-us" },
    { name: "Our Story", href: "/Aboutus#our-story" },
    { name: "Our Mission", href: "/Aboutus#vision-mission?tab=mission" },
    { name: "Our Vision", href: "/Aboutus#vision-mission?tab=vision" },
  ]

  const teacherLinks = [{ name: "Teachers", href: "/teacher" }]
  const staffLinks = [{ name: "Staff", href: "/staff" }]

  const messageLinks = [
    { name: "Message from ChairPerson", href: "/messages/chairperson" },
    { name: "Message from Academic Coordinator", href: "/messages/academic-coordinator" },
  ]

  // Shared About Us Dropdown Component
  const AboutDropdown = ({ isMobile = false }) => (
    <motion.div
      ref={dropdownRef}
      className={`${
        isMobile ? "relative w-full bg-white shadow-lg z-40" : "absolute left-0 w-full bg-white shadow-2xl z-40"
      } border-t-2 border-purple-600 overflow-y-auto max-h-[80vh]`}
      style={isMobile ? {} : { top: `${navbarHeight + 2}px` }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
        <button
          onClick={closeDropdown}
          className="absolute top-4 right-4 text-gray-600 hover:text-purple-700 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About Siddhababa */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">About Siddhababa</h3>
            {aboutLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href, "aboutus", false)}
                className="block text-gray-700 hover:text-purple-700 hover:bg-purple-50 py-1.5 px-2 rounded-md text-sm font-medium transition duration-200 text-left"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Column 2: Teachers */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Teachers</h3>
            {teacherLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href, null, false)}
                className="block text-gray-700 hover:text-purple-700 hover:bg-purple-50 py-1.5 px-2 rounded-md text-sm font-medium transition duration-200 text-left"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Column 3: Staff */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Staff</h3>
            {staffLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href, null, false)}
                className="block text-gray-700 hover:text-purple-700 hover:bg-purple-50 py-1.5 px-2 rounded-md text-sm font-medium transition duration-200 text-left"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Column 4: Messages */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Messages</h3>
            {messageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href, null, false)}
                className="block text-gray-700 hover:text-purple-700 hover:bg-purple-50 py-1.5 px-2 rounded-md text-sm font-medium transition duration-200 text-left"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="fixed top-0 left-0 w-full z-50 font-sans" ref={navbarRef}>
      {!isScrolled && (
        <motion.div
          className="bg-gradient-to-r from-purple-800 to-purple-600 text-white text-sm py-2 px-4 sm:px-6 lg:px-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="marquee">
              <div className="marquee-content">
                <span>{news.text}</span>
                <span>{news.text}</span>
                <span>{news.text}</span>
                <span>{news.text}</span>
              </div>
            </div>
          </div>
          <style jsx>{`
            .marquee {
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
            }
            .marquee-content {
              display: inline-flex;
              animation: marquee 25s linear infinite;
            }
            .marquee-content span {
              display: inline-block;
              padding-right: 50px;
              font-size: 14px;
              letter-spacing: 0.5px;
            }
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </motion.div>
      )}

      <motion.nav
        className="bg-white shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center pl-4 sm:pl-0">
              <Link href="/" className="flex items-center space-x-2">
                <motion.img
                  src="https://i.ibb.co/99tSZyY0/scti-logo.jpg"
                  alt="SCTI Logo"
                  className="h-13 w-12 object-contain"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.span
                  className="text-xl font-extrabold text-purple-700 hover:text-purple-800 transition duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  SCTI
                </motion.span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 mr-4 lg:mr-0">
              {navLinks.map((link) => {
                const isInPage = inPageSections.includes(link.id)
                return (
                  <div key={link.id} className="relative">
                    {link.id === "aboutus" ? (
                      <button
                        onClick={toggleAboutDropdown}
                        className={`flex items-center text-gray-700 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-semibold transition duration-300 ${
                          activeSection === link.id ? "text-purple-700 font-bold" : ""
                        }`}
                      >
                        {link.name}
                        <motion.svg
                          className="h-4 w-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isAboutDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                        {activeSection === link.id && (
                          <motion.div
                            className="absolute bottom-0 left-0 w-full h-1 bg-purple-700 rounded-full"
                            layoutId="underline"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.href, link.id, isInPage)}
                        className={`relative text-gray-700 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-semibold transition duration-300 ${
                          activeSection === link.id ? "text-purple-700 font-bold" : ""
                        }`}
                      >
                        {link.name}
                        {activeSection === link.id && (
                          <motion.div
                            className="absolute bottom-0 left-0 w-full h-1 bg-purple-700 rounded-full"
                            layoutId="underline"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    )}
                  </div>
                )
              })}
              <Link href="/registerform">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-full font-semibold text-sm hover:from-purple-700 hover:to-purple-600 transition duration-300 shadow-md flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span>Pre-Register</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center pr-8">
              <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-purple-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* About Us Dropdown (Desktop) */}
        {isAboutDropdownOpen && !isMobileMenuOpen && <AboutDropdown />}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-4">
              {navLinks.map((link) => {
                const isInPage = inPageSections.includes(link.id)
                return (
                  <div key={link.id}>
                    {link.id === "aboutus" ? (
                      <>
                        <button
                          onClick={toggleAboutDropdown}
                          className={`flex items-center w-full text-left text-gray-700 hover:text-purple-700 px-3 py-2 rounded-md text-base font-semibold ${
                            activeSection === link.id ? "text-purple-700 font-bold" : ""
                          }`}
                        >
                          {link.name}
                          <motion.svg
                            className="h-4 w-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: isAboutDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                        {isAboutDropdownOpen && <AboutDropdown isMobile={true} />}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.href, link.id, isInPage)}
                        className={`block text-gray-700 hover:text-purple-700 px-3 py-2 rounded-md text-base font-semibold ${
                          activeSection === link.id ? "text-purple-700 font-bold" : ""
                        }`}
                      >
                        {link.name}
                        {activeSection === link.id && (
                          <motion.div
                            className="absolute bottom-0 left-0 w-full h-1 bg-purple-700 rounded-full"
                            layoutId="underline-mobile"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    )}
                  </div>
                )
              })}
              <Link href="/registerform">
                <button
                  onClick={() => handleLinkClick("/registerform", null, false)}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-full font-semibold text-sm hover:from-purple-700 hover:to-purple-600 transition duration-300 shadow-md mt-2 flex items-center justify-center space-x-2"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span>Pre-Register</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  )
}

export default NavBar
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Bell, BookOpen } from "lucide-react";

const Hero = () => {
  const actionButtons = [
    
    {
      icon: <Camera className="w-3 h-3" />,
      label: "Gallery",
      href: "/gallery",
    },
  
    {
      icon: <BookOpen className="w-3 h-3" />,
      label: "Programs",
      href: "/programs",
    },
  ];

  return (
    <section className="relative h-[70vh] sm:h-screen w-full overflow-hidden">
      {/* Floating Apply Now Button */}
      <motion.div
        className="fixed bottom-16 right-3 z-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <Link href="/registerform">
          <button className="bg-yellow-400 text-purple-800 px-3 py-2 rounded-full shadow-lg font-bold text-xs hover:bg-yellow-500 transition duration-300">
            Apply Now!
          </button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <div className="relative h-[70vh] sm:h-screen w-full flex items-center justify-center">
        {/* Background Image */}
       {/* Background Image */}
<img
  src="https://i.ibb.co/sJVKGdmH/ss.jpg"
  alt="Hero background"
  className="absolute w-full h-full object-contain sm:object-cover z-0 py-4 sm:py-0"
  style={{ top: "50px", position: "absolute" }} // shifts image 20px down
/>


        {/* Overlay tint */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        <div className="z-20 text-center text-white px-3 relative w-full">
          <motion.h1
            className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 via-purple-200 to-white text-transparent leading-tight"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "0.5px rgba(168, 170, 226, 0.2)",
              textShadow: "0 2px 4px rgba(151, 176, 246, 0.6)",
              paddingBottom: "0.25rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sindhuli Community Technical Institute 
          </motion.h1>
          <p className="text-sm sm:text-lg md:text-xl font-semibold mb-3 sm:mb-6">
            A Polytechnic to provide qualitative training
          </p>
          <div className="flex justify-center gap-2 sm:gap-4">
            <Link href="/registerform">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition duration-300 text-xs sm:text-base">
                Apply Now
              </button>
            </Link>
            <Link href="/programs">
              <button className="border border-white text-white font-semibold px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white hover:text-purple-800 transition duration-300 text-xs sm:text-base">
                Explore Programs
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Smaller Action Buttons at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 mb-3 sm:mb-5">
        <div className="w-full px-3">
          <motion.div
            className="flex justify-center gap-3 sm:gap-6 md:gap-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {actionButtons.map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              >
                <Link href={button.href}>
                  <motion.button
                    className="group flex flex-col items-center text-white hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="bg-black/40 backdrop-blur-sm p-1 sm:p-2 rounded-full mb-1 group-hover:bg-black/60 transition-colors duration-300">
                      {button.icon}
                    </div>
                    <span className="text-xs font-medium">{button.label}</span>
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

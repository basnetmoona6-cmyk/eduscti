"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronRight, ChevronLeft, BookOpen, GraduationCap, ArrowRight, Award } from "lucide-react";
import { useState, useEffect } from "react";

const programs = [
  {
    id: 1,
    title: "B.Tech. Ed. in IT",
    description: "A comprehensive program in IT education and training.",
    image: "https://i.ibb.co/GvYNCbFr/sindhuli-community-college.jpg",
    color: "from-blue-500 to-blue-600",
    icon: <GraduationCap className="w-6 h-6" />,
    details: {
      overview: "This program provides a solid foundation in Information Technology, focusing on modern software development and system management.",
      curriculum: [
        { category: "Core", subjects: ["Programming Fundamentals", "Database Management", "Networking"] },
        { category: "Electives", subjects: ["Web Development", "Cybersecurity", "AI Basics"] },
      ],
      eligibility: "Minimum 10+2 with Science background or equivalent with a minimum of 50% marks.",
    },
  },
  {
    id: 2,
    title: "B.Tech. Ed. in Civil Engineering",
    description: "Explore the fundamentals of civil engineering and infrastructure development.",
    image: "https://i.ibb.co/GvYNCbFr/sindhuli-community-college.jpg",
    color: "from-green-500 to-green-600",
    icon: <BookOpen className="w-6 h-6" />,
    details: {
      overview: "A detailed curriculum covering design, construction, and maintenance of infrastructure projects.",
      curriculum: [
        { category: "Core", subjects: ["Structural Analysis", "Geotechnical Engineering", "Hydraulics"] },
        { category: "Electives", subjects: ["Transportation Engineering", "Environmental Engineering"] },
      ],
      eligibility: "Minimum 10+2 with Science background or equivalent with a minimum of 50% marks.",
    },
  },
  {
    id: 3,
    title: "Diploma in Agriculture",
    description: "Learn modern agricultural techniques and sustainable farming practices.",
    image: "https://i.ibb.co/GvYNCbFr/sindhuli-community-college.jpg",
    color: "from-yellow-500 to-yellow-600",
    icon: <GraduationCap className="w-6 h-6" />,
    details: {
      overview: "This diploma focuses on agricultural science, crop management, and rural development.",
      curriculum: [
        { category: "Core", subjects: ["Crop Production", "Soil Science", "Agribusiness"] },
        { category: "Electives", subjects: ["Organic Farming", "Irrigation Techniques"] },
      ],
      eligibility: "Minimum SLC/SEE with a minimum of 45% marks.",
    },
  },
  {
    id: 4,
    title: "Diploma in Civil",
    description: "Gain practical skills in civil construction and engineering projects.",
    image: "https://i.ibb.co/GvYNCbFr/sindhuli-community-college.jpg",
    color: "from-red-500 to-red-600",
    icon: <BookOpen className="w-6 h-6" />,
    details: {
      overview: "A hands-on program focusing on civil construction techniques and project management.",
      curriculum: [
        { category: "Core", subjects: ["Construction Technology", "Surveying", "Building Materials"] },
        { category: "Electives", subjects: ["Road Construction", "Water Supply Engineering"] },
      ],
      eligibility: "Minimum SLC/SEE with a minimum of 45% marks.",
    },
  },
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePrograms = 3; // Number of programs visible at once

  const handleCardClick = (program) => {
    setSelectedProgram(program);
    setActiveTab("overview");
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    if (selectedProgram) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [selectedProgram]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "eligibility", label: "Eligibility" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Explore Programs at Sindhuli Community Technical Institute
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"></span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4"></div>
        </motion.div>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visiblePrograms)}%)` }}
            >
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  className="w-1/3 flex-shrink-0 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer hover:bg-purple-50 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    onClick={() => handleCardClick(program)}
                  >
                    <div className="relative h-48 w-full mb-4">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <AnimatePresence>
          {selectedProgram && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
            >
              <motion.div
                className="bg-white rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={selectedProgram.image}
                    alt={selectedProgram.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <motion.button
                      onClick={handleCloseModal}
                      className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Close modal"
                    >
                      <X size={16} />
                      Close
                    </motion.button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{selectedProgram.title}</h3>
                  </div>
                </div>
                <div className="border-b border-gray-200">
                  <div className="flex px-6">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        className={`py-3 px-6 font-medium text-sm transition-colors duration-300 ${
                          activeTab === tab.id ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeTab === "overview" && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-900">Program Overview</h4>
                          <p className="text-gray-700">{selectedProgram.details.overview}</p>
                        </div>
                      )}
                      {activeTab === "curriculum" && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-900">Curriculum</h4>
                          {selectedProgram.details.curriculum.map((section, index) => (
                            <div key={index} className="mb-4">
                              <h5 className="text-md font-semibold text-gray-700">{section.category} Subjects</h5>
                              <ul className="list-disc pl-5">
                                {section.subjects.map((subject, sIndex) => (
                                  <li key={sIndex} className="text-gray-600">{subject}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      {activeTab === "eligibility" && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-900">Eligibility</h4>
                          <p className="text-gray-700">{selectedProgram.details.eligibility}</p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="bg-gray-50 p-6 flex justify-end gap-4">
                  <motion.button
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <Link href="/registerform">
                    <motion.button
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Programs;
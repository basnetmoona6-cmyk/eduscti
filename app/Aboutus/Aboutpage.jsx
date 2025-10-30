"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");
  // Handle tab change and update URL hash
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${tab}`);
    }
  };
  // Handle hash changes on mount and hash change events
  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.replace("#", "");
        if (["vision", "mission", "objectives"].includes(hash)) {
          setActiveTab(hash);
        }
      }
    };
    // Set initial tab from hash
    handleHashChange();
    // Listen for hash changes
    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative max-sm:h-[40vh] mt-20 w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/v67jfssv/ssbb.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white p-6 md:p-12 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SCTI College</h1>
          <p className="text-lg md:text-xl">Empowering Skills for a Technical Future</p>
        </div>
      </div>
      {/* Introduction Section (About Us) */}
      <section id="about-us" className="py-12 px-4 md:px-16 lg:px-32 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sindhuli Community Technical Institute (SCTI), established in 2014 AD, is a nonprofit institution in Nepal, formed through a joint venture with the Council for Technical Education and Vocational Training (CTEVT), District Coordination Committee (DCC) Sindhuli, and Kamalamai Municipality. Located in Nunthala, ward no. 6 of Kamalamai Municipality, SCTI spans 3.399 hectares and aims to deliver qualitative technical and vocational training in engineering, agriculture, and health fields.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With a commitment to creating skilled manpower, SCTI operates on land owned by CTEVT and focuses on practical education to meet the technical challenges of modern society. The institute’s strategic location, marked by a giant Bo and Banyan tree, and its proximity to seasonal streams, provides an inspiring environment for learning and innovation.
          </p>
        </div>
      </section>
      {/* Our Story Section */}
      <section id="our-story" className="py-12 px-4 md:px-16 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            SCTI’s journey began with a vision to address the need for skilled technical professionals in Nepal. Founded in 2014 through a trilateral agreement, the institute started with a mission to provide accessible and high-quality vocational education, initially operating on CTEVT land in Nunthala.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Over the years, SCTI has grown into one of the largest polytechnic institutions in the region, offering diploma programs in Civil Engineering and Agriculture (Animal Science). With significant efforts and resources invested in infrastructure and education, SCTI continues to produce proficient graduates ready to contribute to society and industry.
          </p>
        </div>
      </section>
      {/* Vision, Mission, Objectives Card Section */}
      <section id="vision-mission" className="py-12 px-4 md:px-16 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <div className="flex justify-center space-x-2 max-sm:space-x-1 mb-6">
              <button
                onClick={() => handleTabChange("vision")}
                className={`px-4 py-1 max-sm:px-2 max-sm:py-1 max-sm:text-sm rounded-lg font-semibold transition-colors ${
                  activeTab === "vision"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-800 hover:bg-purple-100 border border-gray-300"
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => handleTabChange("mission")}
                className={`px-4 py-1 max-sm:px-2 max-sm:py-1 max-sm:text-sm rounded-lg font-semibold transition-colors ${
                  activeTab === "mission"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-800 hover:bg-purple-100 border border-gray-300"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => handleTabChange("objectives")}
                className={`px-4 py-1 max-sm:px-2 max-sm:py-1 max-sm:text-sm rounded-lg font-semibold transition-colors ${
                  activeTab === "objectives"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-800 hover:bg-purple-100 border border-gray-300"
                }`}
              >
                Our Objectives
              </button>
            </div>
            {activeTab === "vision" && (
              <div id="vision" className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
                  To be a leading polytechnic institute in Nepal, providing qualitative training and education to create skilled manpower, generate new knowledge, and contribute to the sustainable development of society and industry through innovative technical education.
                </p>
                <Image
                  src="https://i.ibb.co/67bGms5N/images.jpg"
                  alt="Vision Illustration"
                  width={500}
                  height={300}
                  className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-md"
                />
              </div>
            )}
            {activeTab === "mission" && (
              <div id="mission" className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
                  To offer accessible and practical technical and vocational training in engineering, agriculture, and health, equipping students with the skills to meet industry demands and foster community development through hands-on learning and collaboration with local stakeholders.
                </p>
                <Image
                  src="https://i.ibb.co/wNk66vp5/imagess.jpg"
                  alt="Mission Illustration"
                  width={500}
                  height={300}
                  className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-md"
                />
              </div>
            )}
            {activeTab === "objectives" && (
              <div id="objectives" className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Objectives</h2>
                <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
                  To provide high-quality diploma programs in Civil Engineering and Agriculture, develop skilled professionals capable of addressing technical challenges, and contribute to economic growth by aligning education with the needs of society and industry.
                </p>
                <Image
                  src="https://i.ibb.co/wFP6gFyH/Sindhuli-Community-Technical-Institute.jpg"
                  alt="Objectives Illustration"
                  width={500}
                  height={300}
                  className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Campus Life Section */}
      <section id="campus-life" className="py-12 px-4 md:px-16 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                At SCTI, campus life is designed to enhance technical skills through practical training and community engagement. Students participate in hands-on projects, workshops, and field visits, gaining real-world experience in engineering and agriculture. The institute fosters a collaborative environment with access to modern training facilities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The campus features well-defined training areas, a landmark giant Bo and Banyan tree, and proximity to natural streams, creating an inspiring setting. Events and training sessions with industry experts further enrich the student experience at SCTI.
              </p>
            </div>
            <div>
              <Image
                src="https://i.ibb.co/QFnqs7DR/Whats-App-Image-2025-10-29-at-10-35-24-ef4f824d.jpg"
                alt="Student Activities"
                width={640}
                height={256}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section id="why-us" className="py-12 px-4 md:px-16 lg:px-32 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose SCTI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="https://i.ibb.co/nsB2gCgp/Whats-App-Image-2025-10-29-at-10-35-27-f3a14e8b.jpg"
                alt="Experienced Faculty"
                width={104}
                height={104}
                className="w-26 h-26 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Experienced Faculty</h4>
              <p className="text-gray-600">
                Our faculty comprises skilled professionals with extensive experience in technical and vocational education, ensuring high-quality instruction.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="https://i.ibb.co/MxnDSnLj/Whats-App-Image-2025-10-29-at-10-35-24-4878aeb7.jpg"
                alt="Modern Facilities"
                width={104}
                height={104}
                className="w-26 h-26 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Modern Facilities</h4>
              <p className="text-gray-600">
                State-of-the-art training centers and equipment support hands-on learning in engineering and agriculture.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="https://i.ibb.co/chkzFyv9/Whats-App-Image-2025-10-29-at-10-35-28-414eb7a8.jpg"
                alt="Career Guidance"
                width={104}
                height={104}
                className="w-26 h-26 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Career Guidance</h4>
              <p className="text-gray-600">
                Personalized support to prepare students for technical careers and further education.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="https://i.ibb.co/RGwpMMBP/Whats-App-Image-2025-10-29-at-10-35-27-ae15984c.jpg"
                alt="Vibrant Community"
                width={104}
                height={104}
                className="w-26 h-26 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Vibrant Community</h4>
              <p className="text-gray-600">
                A supportive network of students, faculty, and local stakeholders fostering growth and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
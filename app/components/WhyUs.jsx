"use client";
import { motion } from "framer-motion";
import { Trophy, Presentation, Users, Award, BookOpen } from "lucide-react";
import Link from "next/link";

const WhyUs = () => {
  const features = [
    {
      icon: <Trophy size={40} className="text-blue-600" />,
      title: "Innovative Teaching",
      description:
        "We emphasize project-based and practical learning that promotes creativity and innovation in every classroom.",
    },
    {
      icon: <Presentation size={40} className="text-blue-600" />,
      title: "Hands-on Training",
      description:
        "Students gain real-world experience through mandatory practical sessions, seminars, and workshops.",
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: "Expert Faculty",
      description:
        "Our experienced and dedicated instructors are passionate about mentoring the next generation of professionals.",
    },
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: "Excellent Results",
      description:
        "SCTI students consistently achieve outstanding results in CTEVT board exams and KU-affiliated programs.",
    },
    {
      icon: <BookOpen size={40} className="text-blue-600" />,
      title: "Broader Learning Opportunities",
      description:
        "We provide exposure through social engagement, technical fairs, and outreach programs to strengthen learning.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-blue-800 mb-6"
      >
        Why Choose <span className="text-yellow-500">SCTI</span>?
      </motion.h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-14 text-lg">
        At Sindhuli Community Technical Institute, we combine technical
        excellence, academic innovation, and professional growth to prepare our
        students for the future.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-2xl p-8 text-left border border-gray-100"
          >
            <div className="flex items-center justify-center mb-5">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 shadow-inner">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14">
        <Link href="/registerform">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-800 transition"
          >
            Apply Now
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;

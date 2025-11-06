"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Users, Award } from "lucide-react"

const Introduction = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-purple-50 py-20 md:py-28">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl translate-x-20 translate-y-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Location */}
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              <MapPin className="w-4 h-4" />
              <span>Nunthala, Sindhuli</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              <span className="block bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-600 text-transparent bg-clip-text">
                Sindhuli Community Technical Institute
              </span>
              <span className="text-gray-700 text-2xl sm:text-3xl mt-1 block">
                Technical Education in Sindhuli
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Sindhuli Community Technical Institute (SCTI) is a reputed institution in Sindhuli that offers both technical and higher education programs. It runs CTEVT-affiliated diploma and TSLC courses in fields like engineering, agriculture, and health, focusing on skill-based learning. The institute also offers bachelor-level programs in affiliation with Kathmandu University (KU) to provide advanced academic and professional opportunities for students.
            </p>
            

            {/* Features */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-100 px-4 py-2 rounded-lg shadow-sm">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-gray-700 font-medium">Expert Faculty</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-100 px-4 py-2 rounded-lg shadow-sm">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-gray-700 font-medium"> KU Affiliated</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/programs"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/40 to-indigo-500/40 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                <Image
                  src="https://i.ibb.co/GvYNCbFr/sindhuli-community-college.jpg"
                  alt="Sindhuli Community Technical Institute"
                  width={700}
                  height={850}
                  className="rounded-3xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm border border-purple-100 px-4 py-2 rounded-xl shadow-md"
              >
                <p className="text-sm text-gray-700 font-semibold">Established in Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Introduction

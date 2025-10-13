"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Users, Award } from "lucide-react"

const Introduction = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 min-h-screen flex items-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image Section */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://i.ibb.co/GvYNCbFr/sindhuli-community-college.jpg"
                  alt="SCTI College Introduction"
                  width={680}
                  height={840}
                  priority
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-10"></div>
            <div className="relative bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl p-8 sm:p-10 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-1">
              
              {/* Header */}
              <div className="mb-6">
                <motion.div
                  className="flex items-center space-x-2 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-600">Nunthala, Sindhuli</span>
                </motion.div>

                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-purple-900 via-indigo-700 to-purple-700 text-transparent bg-clip-text">
                    Sindhuli Community Technical Institute
                  </span>
                  <br />
                  <span className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl">Nunthala,Sindhuli</span>
                </motion.h2>
              </div>

              {/* Description */}
              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  SCTI +2 College, established in Sindhuli, is a leading institution committed to providing quality higher secondary education.
                  Affiliated with the National Examinations Board (NEB), SCTI focuses on fostering academic excellence, leadership,
                  and holistic development in its students. The college offers well-structured +2 management programs that equip students
                  with essential skills for careers in business, management, and entrepreneurship.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  At SCTI, we emphasize a balance between rigorous academics and extracurricular engagement.
                  Students benefit from expert faculty guidance, modern learning resources, and opportunities for practical learning
                  through projects, competitions, and co-curricular activities. Our goal is to nurture confident, creative, and socially
                  responsible individuals ready to succeed in higher education and professional life.
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-600">Expert Faculty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-600">NEB Affiliated</span>
                </div>
              </motion.div>

              {/* Call-to-Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/programs"
                  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Introduction

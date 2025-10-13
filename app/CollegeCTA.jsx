"use client"
import { motion } from "framer-motion"
import { GraduationCap, BookOpen, ArrowRight, MapPin, Calendar, Users } from "lucide-react"
import Image from "next/image"

const CollegeCTAEnhanced = () => {
  return (
    <section className="relative py-16 bg-purple-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 opacity-90" />

      {/* White Highlight Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3 relative">
            {/* White Highlight Card */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-purple-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Visit SCTI College</h2>
                  <p className="text-purple-700 font-medium">Experience our campus firsthand</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Visiting our college is one of the best ways to see if SCTI College is the right fit for you. It's
                a chance to take a tour, meet our students, and visit with faculty and admissions staff to discover the
                opportunities that await you.
              </p>

              {/* Feature Points */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <MapPin className="w-5 h-5" />, text: "Campus Tours Available" },
                  { icon: <Users className="w-5 h-5" />, text: "Meet Current Students" },
                  { icon: <BookOpen className="w-5 h-5" />, text: "Explore Facilities" },
                  
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-purple-600">{item.icon}</div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-900 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-purple-800 shadow-lg hover:shadow-purple-900/20"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  VIEW OUR PROGRAMS
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/Aboutus#about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-900 font-semibold rounded-xl border-2 border-purple-900 transition-all duration-300 hover:bg-purple-50"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ABOUT COLLEGE
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-xl" />
          </div>

          {/* Right Content - 2 columns */}
          <div className="lg:col-span-2">
            {/* Image Card */}
            
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="https://i.ibb.co/wFP6gFyH/Sindhuli-Community-Technical-Institute.jpg"
                alt="SCTI College"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent" />

              {/* Image Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-700" />
                    </div>
                    <h3 className="font-bold text-gray-900">Join Us</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Shape your future with us at SCTI College
                  </p>
                  <motion.a
                    href="/registerform"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-900 shadow-lg">
                Nunthala, Sindhuli
              </div>
            </motion.div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default CollegeCTAEnhanced

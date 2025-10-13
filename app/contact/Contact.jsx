
"use client"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  GraduationCap,
  Award,
  Target,
} from "lucide-react"
import { FaTiktok } from "react-icons/fa"

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["047520365", "+977-9843546519", "+977-981656877"],
      action: "tel:+977-9843546519",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["scti.sindhuli@gmail.com"],
      action: "mailto:scti.sindhuli@gmail.com",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Nunthala, Sindhuli"],
      action: "https://www.google.com/maps/place/Siddhababa+%2B2+Management,+Nunthala/@27.2222029,85.9091194,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb8d095612d5d7:0x1e904eb254a79ffd!8m2!3d27.2222029!4d85.9091194!16s%2Fg%2F11t73g7_pm?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ]

  const socialMedia = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      url: "https://facebook.com/siddhababa",
      gradient: "from-purple-600 to-purple-700",
    },
    {
      icon: <FaTiktok className="w-6 h-6" />,
      name: "TikTok",
      url: "https://www.tiktok.com/@siddhababaplustwo?_t=ZS-8x1mQXXM8D1&_r=1",
      gradient: "from-pink-500 to-purple-600",
    },
  ]

  const collegeCards = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "KU Affiliated",
      description: "Quality Bachelor Programs",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Experienced & Dedicated Teachers",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Ready",
      description: "Real-world Skills & Knowledge",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 mt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 to-indigo-900 overflow-x-hidden">
        <div className="relative max-w-6xl mx-auto px-4 text-center w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-purple-100">Connect with SCTI College</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 w-full">
        {/* College Cards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About SCTI College</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {collegeCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-br ${card.gradient} p-4 rounded-xl text-white w-fit mx-auto mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <p className="text-gray-700 text-lg">
              Premier educational institution in Nunthala, Sindhuli. KU affiliated college preparing students for
              successful careers in business and management.
            </p>
          </div>
        </motion.div>

        {/* Contact & Social Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 mr-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <div className="grid gap-4 ">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full max-w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className={`bg-gradient-to-br ${info.gradient} p-3 rounded-xl text-white`}>{info.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 break-words">
                          {info.action && info.title === "Email" ? (
                            <a href={info.action} className="hover:text-purple-600 transition-colors duration-200">
                              {detail}
                            </a>
                          ) : info.title === "Phone" ? (
                            <a href={`tel:${detail.replace(/\+977-/, '+977')}`} className="hover:text-purple-600 transition-colors duration-200">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <motion.div
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-4 text-sm">Quick answers to your questions</p>
              <a
                href="https://wa.me/+9779843546519"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Chat Now
                </motion.button>
              </a>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Follow Us</h3>
              <div className="space-y-3">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`bg-gradient-to-br ${social.gradient} p-2 rounded-lg text-white`}>
                      {social.icon}
                    </div>
                    <span className="font-semibold text-gray-900">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-x-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Location</h3>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center overflow-x-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6780541234567!2d85.90693091506247!3d27.222202982985567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb8d095612d5d7%3A0x1e904eb254a79ffd!2sSiddhababa%20%2B2%20Management%2C%20Nunthala!5e0!3m2!1sen!2snp!4v1625741234567!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCTI, Nunthala, Sindhuli Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

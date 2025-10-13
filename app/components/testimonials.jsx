"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const studentTestimonials = [
  {
    name: "Rohan Shrestha",
    role: "Alumnus, Class of 2022",
    message:
      "After graduating from Siddha Baba +2 Management, I pursued a BBA and landed a managerial role at a top multinational company, thanks to the strong foundation in leadership and business skills I gained at college.",
    image: "https://i.ibb.co/8L6fGBtr/ee15ae19-6cb9-428b-8b3a-d0303cd82f45.jpg",
    accent: "bg-emerald-500",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    name: "Sita Karki",
    role: "Alumna, Class of 2021",
    message: "Post-graduation from Siddha Baba +2 Management, I launched my own startup, winning a national entrepreneurship award in 2023, all built on the practical projects and mentorship I received during my time there.",
    image: "https://i.ibb.co/8L6fGBtr/ee15ae19-6cb9-428b-8b3a-d0303cd82f45.jpg",
    accent: "bg-violet-500",
    bgColor: "from-violet-50 to-purple-50",
  },
  {
    name: "Aarav Limbu",
    role: "Alumnus, Class of 2020",
    message: "Thanks to Siddha Baba +2 Management’s rigorous academics and career guidance, I topped my entrance exams and secured a full scholarship for engineering at a prestigious university after passing out.",
    image: "https://i.ibb.co/8L6fGBtr/ee15ae19-6cb9-428b-8b3a-d0303cd82f45.jpg",
    accent: "bg-rose-500",
    bgColor: "from-rose-50 to-pink-50",
  },
];

const StudentTestimonials = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-20"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Student Testimonials
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-gray-900 md:mb-6 md:w-24"></div>
          <p className="mx-auto max-w-2xl px-4 text-lg text-gray-600 md:text-xl">
            Discover how our alumni achieved remarkable milestones
          </p>
          <p className="mt-2 hidden text-sm text-gray-500 lg:block">
            Join these success stories and start your journey with Siddha Baba +2 Management
          </p>
        </motion.div>

        {/* Testimonials Section */}
        <div className="space-y-16 md:space-y-32">
          {studentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center gap-8 md:gap-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Image Area */}
              <div className="w-full px-4 lg:w-1/2 lg:px-0">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${testimonial.bgColor} transform rotate-3 scale-105`}
                  ></div>
                  <div className="relative rounded-3xl bg-white p-4 shadow-2xl md:p-6">
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-80">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-4 right-4 md:-bottom-4 md:left-8 md:right-8">
                      <div className="rounded-2xl border-t-4 border-gray-900 bg-white p-3 shadow-lg md:p-4">
                        <h3 className="text-lg font-bold text-gray-900 md:text-xl">{testimonial.name}</h3>
                        <p className="text-sm font-medium text-gray-600 md:text-base">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 h-8 w-8 rounded-full shadow-lg ${testimonial.accent} md:-top-4 md:-right-4 md:h-12 md:w-12`}
                  ></div>
                </div>
              </div>

              {/* Text Area */}
              <div className="w-full px-4 lg:w-1/2 lg:px-0">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`h-6 w-6 rounded-full ${testimonial.accent} md:h-8 md:w-8`}></div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider md:text-sm">
                      Testimonial from {testimonial.role}
                    </span>
                  </div>
                  <blockquote className="text-xl font-light leading-relaxed text-gray-800 md:text-2xl lg:text-3xl">
                    "{testimonial.message}"
                  </blockquote>
                  <div className="flex items-center gap-3 pt-2 md:gap-4 md:pt-4">
                    <div className="h-0.5 w-12 bg-gray-900 md:w-16"></div>
                    <span className="text-base font-semibold text-gray-900 md:text-lg">{testimonial.name}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-200 px-4 pt-12 text-center md:mt-24 md:pt-16"
        >
          <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">Ready to Join Our Community?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-600 md:mb-8">
            Experience world-class education and create your own success story
          </p>
          <Link href="/registerform">
            <button className="rounded-2xl bg-gray-900 px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-gray-800 text-sm md:px-8 md:py-4 md:text-base">
              Get Started Today
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
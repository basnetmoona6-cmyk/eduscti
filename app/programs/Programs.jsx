"use client"
import { useState } from "react"
import { ChevronDown, ChevronRight, GraduationCap, BookOpen, Users, Award, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const programDetails = {
  // Diploma in Civil Engineering
  "diploma-civil": {
    title: "Diploma in Civil Engineering",
    description: "Comprehensive training in civil engineering principles and practices",
    details: [
      "Structural engineering and design",
      "Surveying and geotechnical engineering",
      "Construction materials and methods",
      "Project management and cost estimation",
      "Computer-aided design (CAD) applications",
    ],
    duration: "3 years",
    assessment: "Internal (40%) + External (60%)",
  },
  // Diploma in Animal Science
  "diploma-animal": {
    title: "Diploma in Animal Science",
    description: "Study of animal husbandry, health, and management",
    details: [
      "Animal nutrition and feeding",
      "Veterinary science basics",
      "Livestock management and breeding",
      "Animal health and disease prevention",
      "Farm management and economics",
    ],
    duration: "3 years",
    assessment: "Internal (50%) + External (50%)",
  },
  // B.Tech. Ed. in Information Technology
  "btech-ed-it": {
    title: "B.Tech. Ed. in Information Technology",
    description: "Advanced study in IT with a focus on educational applications",
    details: [
      "Programming and software development",
      "Database management and cloud computing",
      "Network security and cybersecurity",
      "Educational technology integration",
      "IT project management",
    ],
    duration: "4 years",
    assessment: "Internal (30%) + External (70%)",
  },
  // B.Tech. Ed. in Civil Engineering
  "btech-ed-civil": {
    title: "B.Tech. Ed. in Civil Engineering",
    description: "Advanced civil engineering with educational methodologies",
    details: [
      "Advanced structural analysis and design",
      "Transportation and highway engineering",
      "Environmental engineering and sustainability",
      "Construction technology and management",
      "Pedagogical approaches in engineering education",
    ],
    duration: "4 years",
    assessment: "Internal (30%) + External (70%)",
  },
}

const ProgramItem = ({ programKey, title }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const program = programDetails[programKey]
  return (
    <div className="border-b border-gray-100 last:border-b-0 transition-all duration-300 hover:bg-purple-50">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 text-left group transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div
            className={`transition-all duration-300 ${isExpanded ? "rotate-90 text-purple-600" : "text-gray-400 group-hover:text-purple-600"}`}
          >
            {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </div>
          <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
            {title}
          </span>
        </div>
      </button>
      {isExpanded && program && (
        <div className="px-4 pb-5 ml-8 animate-in slide-in-from-top-2 duration-300">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-purple-600 h-1"></div>
            <div className="p-5">
              <p className="text-gray-600 mb-4 italic bg-purple-50 p-3 rounded-lg border-l-4 border-purple-600">
                {program.description}
              </p>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-purple-600 p-2 rounded-lg">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800">Course Content</h4>
                  </div>
                  <div className="space-y-2">
                    {program.details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                      >
                        <div className="bg-purple-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-purple-600 p-1.5 rounded">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800">Duration</h4>
                    </div>
                    <p className="text-gray-600 font-medium">{program.duration}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-purple-600 p-1.5 rounded">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800">Assessment</h4>
                    </div>
                    <p className="text-gray-600 font-medium">{program.assessment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Programs() {
  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Program Title */}
        <div className="mb-10 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-purple-600 p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-purple-600">SCTI Programs</h1>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Technical and Vocational Education</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diploma and bachelor’s programs designed to equip students with practical skills and knowledge for careers in engineering, technology, and animal science.
            </p>
          </div>
        </div>
        {/* Diploma Programs */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-purple-600 p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Diploma Programs</h3>
                  <p className="text-purple-100">Practical Training for Technical Careers</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-1">
                <ProgramItem programKey="diploma-civil" title="Diploma in Civil Engineering" />
                <ProgramItem programKey="diploma-animal" title="Diploma in Animal Science" />
              </div>
            </div>
          </div>
        </div>
        {/* Bachelor’s Programs */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-purple-600 p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Bachelor’s Programs</h3>
                  <p className="text-purple-100">Advanced Education for Specialized Careers</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-1">
                <ProgramItem programKey="btech-ed-it" title="B.Tech. Ed. in Information Technology" />
                <ProgramItem programKey="btech-ed-civil" title="B.Tech. Ed. in Civil Engineering" />
              </div>
            </div>
          </div>
        </div>
        {/* Eligibility and Application */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-purple-600 p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Eligibility & Admission</h3>
                  <p className="text-purple-100">Join our community of technical professionals</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-purple-600 p-1.5 rounded">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    Eligibility Requirements
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Minimum SEE GPA of 2.0 or equivalent for Diploma programs",
                      "Minimum +2 or equivalent for B.Tech. Ed. programs",
                      "Strong foundation in Mathematics and Science",
                      "Interest in technical and vocational fields",
                      "Commitment to practical learning",
                    ].map((req, index) => (
                      <div key={index} className="flex items-start gap-3 p-2 bg-white rounded-lg">
                        <div className="bg-purple-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-purple-600 p-1.5 rounded">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    Why Choose SCTI?
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Industry-aligned curriculum",
                      "Hands-on training with modern equipment",
                      "Experienced faculty and industry experts",
                      "Career guidance and job placement support",
                      "Focus on practical and technical skills",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-2 bg-white rounded-lg">
                        <div className="bg-purple-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-purple-600 hover:bg-black text-white px-8 py-3 font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Link href="/registerform">
                    Apply Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
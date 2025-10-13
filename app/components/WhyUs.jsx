"use client";
import { motion } from 'framer-motion';
import { Trophy, Presentation, Users, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';

const WhyUs = () => {
  const features = [
    {
      icon: <Trophy size={48} className="text-yellow-500" />,
      title: 'Innovative Teaching',
      description: 'Focus on innovation teaching methodologies and research.',
      subtext: 'We are pleased to announce these successful ideas.',
    },
    {
      icon: <Presentation size={48} className="text-yellow-500" />,
      title: 'Practical Training',
      description: 'Mandatory presentations, seminars, and practical training.',
      subtext: '95% of students agree they are developing skills.',
    },
    {
      icon: <Users size={48} className="text-yellow-500" />,
      title: 'Experienced Faculty',
      description: 'Highly renowned and experienced full-time faculties.',
      subtext: "We'll prepare you for the 21st century.",
    },
    {
      icon: <Award size={48} className="text-yellow-500" />,
      title: 'Outstanding Results',
      description: 'Outstanding results in the Board examinations.',
      subtext: '94% student satisfaction with 99% happy students.',
    },
    {
      icon: <BookOpen size={48} className="text-yellow-500" />,
      title: 'Learning Opportunities',
      description: 'Learning opportunities through social and outreach programs.',
      subtext: "Nepal's No.1 College for Management Studies.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">We are the best college in town</h2>
        <div className="flex flex-wrap justify-around max-w-6xl mx-auto px-4 gap-8">
          <div className="flex-1 min-w-[200px] p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <Trophy size={64} color="#FFD700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Focus on innovation teaching methodologies and research</h3>
            <p className="text-gray-600">We are pleased to announce these successful ideas</p>
          </div>
          <div className="flex-1 min-w-[200px] p-6">
            <img
              src="https://img.freepik.com/free-vector/graduation-concept-illustration_114360-1216.jpg"
              alt="Graduation Image"
              className="mx-auto mb-4"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="flex-1 min-w-[200px] p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <Presentation size={64} color="#FFD700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mandatory presentations, seminars and practical training</h3>
            <p className="text-gray-600">95% of students agree they are developing skills</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-around max-w-6xl mx-auto px-4 mt-8 gap-8">
          <div className="flex-1 min-w-[200px] p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <Users size={64} color="#FFD700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Highly renowned and experienced full-time faculties</h3>
            <p className="text-gray-600">We'll prepare you to move on to the world of 21st century</p>
          </div>
          <div className="flex-1 min-w-[200px] p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <Award size={64} color="#FFD700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Outstanding results in the Board examinations</h3>
            <p className="text-gray-600">Students Satisfaction rating 94% with 99% happy students</p>
          </div>
          <div className="flex-1 min-w-[200px] p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <BookOpen size={64} color="#FFD700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learning opportunities through social and outreach programs</h3>
            <p className="text-gray-600">Nepal's No.1 College for Management Studies</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <a href="/registerform">
            <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300">
              APPLY NOW
            </button>
          </a>
        </div>
      </section>

  );
};

export default WhyUs;
"use client";
import Image from 'next/image';
import { useState } from 'react';

const lecturers = [
    { id: 2, name: 'Tej Bikram Thapa', specialization: "Physics", image: 'https://i.ibb.co/LXHd8MHB/tej.jpg' },

  { id: 1, name: 'Badal Pokharel', specialization: "Programming", image: 'https://i.ibb.co/Q3WDKkth/0016b3de-0543-4df9-81b2-ca6e0c053da3.jpg' },
  { id: 2, name: 'Nabin Karki', specialization: "IT Expert", image: 'https://i.ibb.co/tM4BJ50H/23386d8a-2020-4ba2-88c2-4adfb86895be.jpg' },
    { id: 7, name: 'Suraj Majhi', specialization: "E-Governance", image: 'https://i.ibb.co/V0YPVB9q/DD.jpg' },

  { id: 4, name: 'Kamal Poudel', specialization: "Civil", image: 'https://i.ibb.co/SXG11v6P/kamal.jpg' },
  { id: 5, name: 'Hari Prasad Pokharel', specialization: "VPED", image: 'https://i.ibb.co/9kWpDYH1/hh.jpg' },
 
];

export default function Lecturer() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Our Lecturers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {lecturers.map((lecturer) => (
            <div
              key={lecturer.id}
              className="relative group bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-64">
                <Image
                  src={lecturer.image}
                  alt={lecturer.name}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => handleImageClick(lecturer.image)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{lecturer.name}</h3>
                <p className="text-sm text-gray-600">{lecturer.specialization}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
            onClick={handleCloseModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Full preview"
                width={800}
                height={800}
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
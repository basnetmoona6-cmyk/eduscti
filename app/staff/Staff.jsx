"use client";
import Image from 'next/image';
import { useState } from 'react';

const staffs = [
       { id: 3, name: 'Badri Devkota', specialization: "Guard Dai", image: 'https://i.ibb.co/8g6nsJ9M/f31d31f1-18a1-4973-86d3-6342c1885b66.jpg' },
     { id: 1, name: 'Apshara Sewa', specialization: "Reception", image: 'https://i.ibb.co/DPyLb64q/893f1025-f710-40b1-85b1-200c3482d279-1.jpg' },
   { id: 2, name: 'Bhadra Kumari Shrestha', specialization: "Helper", image: 'https://i.ibb.co/Zzg9H1qc/5ee07407-4228-407f-a42a-6a2748124bf0.jpg' },
];

export default function staff() {
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
          Our Staff
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {staffs.map((staff) => (
            <div
              key={staff.id}
              className="relative group bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-64">
                <Image
                  src={staff.image}
                  alt={staff.name}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => handleImageClick(staff.image)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{staff.name}</h3>
                <p className="text-sm text-gray-600">{staff.specialization}</p>
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
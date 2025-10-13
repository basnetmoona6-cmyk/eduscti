import React from 'react';

const AcademicCoordinatorSpeech = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section - 50vh with background image and purple overlay */}
      <div
        className="w-full text-indigo-800 text-center mt-20 sm:mt-28 shadow-2xl min-h-[300px] sm:min-h-[400px] flex items-center justify-center px-4 sm:px-6 relative"
        style={{
          backgroundImage: `url('https://i.ibb.co/ns8p21Zh/ee15ae19-6cb9-428b-8b3a-d0303cd82f45.jpg')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* purple Overlay */}
        <div className="absolute inset-0 bg-purple-600 bg-opacity-30"></div>

        {/* Centered Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
              Academic Coordinator's Message
            </h1>
            <p className="text-lg font-medium text-white drop-shadow">SCTI</p>
          </div>
        </div>
      </div>

      {/* Content Section - Below the hero */}
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-8 items-center">
        {/* Right Side - Academic Coordinator Image (Moves to top on mobile) */}
        <div className="order-1 md:order-2 flex flex-col items-center">
          <img
            src="https://i.ibb.co/0RTfddNW/a822ca27-2347-406e-b390-f222e0c7eed2.jpg"
            alt="Academic Coordinator Rahul Kumar Singh"
            width="280"
            height="400"
            className="max-w-full h-auto"
          />
          <div className="text-center mt-2">
            <p className="font-bold text-lg">Rahul Kumar Singh</p>
            <p>Academic Coordinator</p>
          </div>
        </div>

        {/* Left Side - Text Content (Shortened, moves below image on mobile) */}
        <div className="flex-1 order-2 md:order-1 flex flex-col items-center">
          <div className="prose max-w-none text-center">
            <p className="mb-4">Dear Students, Parents, Faculty, and Well-wishers,</p>
            <p className="mb-4">
              Welcome to <span className="font-semibold">SCTI</span>! We’re proud to be a hub of
              academic excellence, innovation, and growth, shaping confident, responsible individuals.
            </p>

            <h2 className="text-2xl font-bold text-purple-700 mt-6 mb-4">Our Legacy</h2>
            <p className="mb-4">
              SCTI is renowned for quality education, innovative teaching, and holistic
              development, earning recognition locally and nationally.
            </p>

            <h2 className="text-2xl font-bold text-purple-700 mt-6 mb-4">Academic Success</h2>
            <p className="mb-4">
              Our students excel in board exams, surpassing national averages, thanks to dedicated faculty and modern
              teaching methods.
            </p>

        

            <h2 className="text-2xl font-bold text-purple-700 mt-6 mb-4">Beyond Academics</h2>
            <p className="mb-4">
              Our students shine in debates, sports, and cultural events, with active NSS and NCC units earning praise.
            </p>

            <h2 className="text-2xl font-bold text-purple-700 mt-6 mb-4">Career Support</h2>
            <p className="mb-4">
              Our Placement Cell offers internships and training, with alumni excelling in IT, civil services, and more.
            </p>

            <h2 className="text-2xl font-bold text-purple-700 mt-6 mb-4">Community & Sustainability</h2>
            <p className="mb-4">
              We drive health camps, literacy, and eco-friendly initiatives like solar energy, earning the "Green Campus Award."
            </p>

            <h2 className="text-2xl font-bold text-purple-700 mt-6 mb-4">Future Vision</h2>
            <p className="mb-4">
              We aim to be a deemed university, offering AI, data science, and global partnerships for a bright future.
            </p>

            <p className="mb-4">
              Join SCTI to shape your future and impact the world!
            </p>

            <div className="mt-6 flex flex-col items-center">
              <p className="font-semibold">Warm regards,</p>
              <p className="font-bold text-lg">Rahul Kumar Singh</p>
              <p>Academic Coordinator, SCTI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCoordinatorSpeech;
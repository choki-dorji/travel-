'use client'
import React, {useState} from 'react';

const HeroSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="relative">
       <nav className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-xl font-bold text-gray-800">Just Trip</a>
            <div className="hidden md:flex space-x-4">
              <a href="/home" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="/packages" className="text-gray-600 hover:text-gray-800">Packages</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-800">Blog</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">Book Now</button>
        </div>
      </nav>
      {/* Background image */}
      <div className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1669904737/221130-oconnor-bhutan-hero_p5ua9c')" }}>
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold mb-4">EXPLORE THE WORLD</h1>
          {/* Search form */}
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between">
              {/* <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="w-full p-2 border-2 border-gray-200 rounded-l-md"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="w-full p-2 border-t-2 border-b-2 border-r-2 border-gray-200 rounded-r-md"
              /> */}
            </div>
            <div className="mt-4 flex justify-between">
              <input type="text" placeholder="1 Adult, Economy" className="p-2 border-2 border-gray-200 rounded-md w-2/3"/>
              <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md w-1/3 ml-2">Search</button>
            </div>
          </div>
        </div>
      </div>
      {/* Upcoming events */}
      <div className="p-4 text-center text-xl mt-4 bg-white">
        Upcoming Events
        {/* Events content here */}
      </div>
    </div>
  );
};

export default HeroSection;

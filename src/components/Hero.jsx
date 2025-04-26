import React from 'react';

const Hero = () => {
  return (
    <section className=" bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Sell Your Machinery with Ease</h1>
          <p className="text-gray-600 mb-6">
            Reach Thousands of Buyers Looking for Quality Pre-Owned Equipment
          </p>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-blue-800">
            Start Listing
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/images/banner.jpg" alt="Machinery" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

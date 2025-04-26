import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-10 px-6">
      <h3 className="text-xl font-bold mb-4">Testimonial Listings</h3>
      <div className="flex flex-col md:flex-row gap-5 overflow-x-auto py-10">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className=" w-full h-full p-5 border rounded-lg bg-white shadow-lg"
          >
            <p className="text-sm text-gray-700 h-[60%] overflow-y-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tortor ut ligula tempor placerat.            
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tortor ut ligula tempor placerat.

            </p>
            
            <div className="flex text-yellow-400 mt-2 mb-4">
              <span>★★★★★</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
                <span className="text-xl">A</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Lorem Ipsum</p>
                <p className="text-sm text-gray-500">- Dolor Sit Amet</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

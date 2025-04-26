import React from 'react';

const items = [
  { title: "CNC Milling Machine", price: "£30,000", image: "images/products/cnc-milling.jpg" },
  { title: "Excavator", price: "£50,000", image: "images/products/excavator.jpg" },
  { title: "Bulldozer", price: "£75,000", image: "images/products/bulldozer.jpg" },
  { title: "Excavator", price: "£50,000", image: "images/products/excavator.jpg" },
  { title: "Bulldozer", price: "£75,000", image: "images/products/bulldozer.jpg" },
];

export default function RecentlySold() {
  return (
    <section className="py-10 px-6">
      <div className="mb-6 pb-2">
        <h3 className="text-2xl font-bold mb-2">Recently Sold Products</h3>
        <div className="border-b-2 border-gray-300 w-[100px]"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="border rounded-xl shadow overflow-hidden">
            <div className="relative">
              <div className="absolute text-center rounded-full w-full left-[3px] top-[65px] transform rotate-[-33deg] bg-orange-600 text-white text-xs font-bold px-12 py-1">
                SOLD
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <p className="font-semibold">{item.title}</p>
              <p className="text-orange-600 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';

const items = [
  { title: "CNC Milling Machine", id: "Seller ID: 123456",  price: "£30,000", image: "images/products/cnc-milling.jpg" },
  { title: "Excavator", id: "Seller ID: 123456", price: "£50,000", image: "images/products/excavator.jpg" },
  { title: "Bulldozer", id: "Seller ID: 123456", price: "£75,000", image: "images/products/bulldozer.jpg" },
];

export default function PromotedListings() {
  return (
    <section className="py-10 px-6">
       <div className="mb-6 pb-2">
        <h3 className="text-2xl font-bold mb-2">Promoted Listings</h3>
        <div className="border-b-3 border-gray-800 w-[100px]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-full">
            <div className="rounded-full border-b border-gray-300 mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded-2xl border-1"
              />
            </div>
            <p className="text-gray-800 font-medium">{item.id}</p>
            <p className="text-gray-800 font-medium">{item.title}</p>
            <p className="text-orange-600 font-bold">{item.price}</p>
            <button className="mt-4 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

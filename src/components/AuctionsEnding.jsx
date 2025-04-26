import React from "react";

const items = [
  {
    title: "CNC Milling Machine",
    id: "Seller ID: 123456",
    price: "£30,000",
    image: "images/products/cnc-milling.jpg",
    time: "1h 20m",
  },
  {
    title: "Excavator",
    id: "Seller ID: 123456",
    price: "£50,000",
    image: "images/products/excavator.jpg",
    time: "2h 10m",
  },
  {
    title: "Bulldozer",
    id: "Seller ID: 123456",
    price: "£75,000",
    image: "images/products/bulldozer.jpg",
    time: "3h 5m",
  },
];

export default function AuctionsEnding() {
  return (
    <section className="py-10 px-6">
      <div className="mb-6 pb-2">
        <h3 className="text-2xl font-bold mb-2">Auctions Ending Soon</h3>
        <div className="border-b-2 border-gray-300 w-[100px]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-2xl">
            <div className="relative rounded-2xl overflow-hidden mb-3">
              <div
                className="absolute top-3 bg-orange-600 text-white text-xs font-bold px-3 py-2 text-center"
                style={{
                  clipPath:
                    "polygon(0px 0px, 100% 0px, 87% 50%, 100% 100%, 0px 100%)",
                }}
              >
                <div>Ends In</div>
                <div>{item.time}</div>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded-2xl border"
              />
            </div>
            <p className="text-gray-800 font-medium">{item.id}</p>
            <p className="text-gray-800 font-medium">{item.title}</p>
            <p className="text-orange-600 font-bold">{item.price}</p>
            <button className="mt-4 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-700">
              Place Bid
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

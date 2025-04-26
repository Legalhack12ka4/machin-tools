import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const items = [
  {
    title: "CNC Milling Machine",
    id: "Seller ID: 123456",
    price: "£30,000",
    image: "images/products/cnc-milling.jpg",
    btn: "Forklifts",
  },
  {
    title: "Excavator",
    id: "Seller ID: 123456",
    price: "£50,000",
    image: "images/products/printing-press.jpg",
    btn: "Constructions",
  },
  {
    title: "Bulldozer",
    id: "Seller ID: 123456",
    price: "£75,000",
    image: "images/products/bulldozer.jpg",
    btn: "Printing",
  },
];

export default function Categories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-6">
        <div className="mb-6 pb-2">
        <h3 className="text-2xl font-bold mb-2">Catgories</h3>
        <div className="border-b-3 border-gray-800 w-[100px]"></div>
      </div>

      <div className="relative">
        <div className="hidden md:block">
          <div
            ref={prevRef}
            className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 bg-white cursor-pointer shadow-md rounded-full p-3 z-10"
          >
            <FaChevronLeft className="w-5 h-5 text-gray-700" />
          </div>
          <div
            ref={nextRef}
            className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 bg-white cursor-pointer shadow-md rounded-full p-3 z-10"
          >
            <FaChevronRight className="w-5 h-5 text-gray-700" />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
                <button
                  onClick={() => console.log(`Button clicked: ${item.btn}`)}
                  className="absolute relative rounded-lg bottom-[20px] left-1/2 transform -translate-x-1/2 py-2.5 px-7 bg-gray-800 text-white text-center hover:bg-gray-700 shadow-md"
                >
                  {item.btn}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center gap-10 mt-6 md:hidden">
          <div
            ref={prevRef}
            className="bg-white cursor-pointer shadow-md rounded-full p-3"
          >
            <FaChevronLeft className="w-5 h-5 text-gray-700" />
          </div>
          <div
            ref={nextRef}
            className="bg-white cursor-pointer shadow-md rounded-full p-3"
          >
            <FaChevronRight className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

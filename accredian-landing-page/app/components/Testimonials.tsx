"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      img: "adp.svg",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      img: "bayer.svg",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
    {
      img: "rel.png",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    },
  ];

  const baseURL =
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/";

  return (
    <section
      id="testimonials"
      className="w-full mt-16 sm:mt-20 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-10 mx-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Testimonials from{" "}
          <span className="text-universal">Our Partners</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          What <span className="text-universal">Our Clients</span> Are Saying
        </p>
      </div>

      {/* Slider */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <Swiper
  modules={[Pagination]}
  spaceBetween={10}
  slidesPerView={1}
  slidesPerGroup={1}
  pagination={{ clickable: true }}
  className="pb-12"   // 👈 IMPORTANT (push dots down)
  breakpoints={{
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  }}
>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="flex h-auto">
              <div className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full min-h-[250px] flex-grow">
                
                <div className="w-full flex flex-col justify-start items-start pl-6 h-full">
                  
                  {/* Logo */}
                  <div className="h-16 mb-4 flex items-center gap-4">
                    <img
                      src={baseURL + item.img}
                      alt="client"
                      className="h-14 w-14 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <p className="text-neutral-600 text-base font-light">
                    "{item.text}"
                  </p>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Thumbnails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <section className="container mx-auto flex items-center justify-center py-12">
      <div className="w-full max-w-[700px] px-4">
        {/* Custom navigation buttons */}
        <div className="flex justify-between mb-4">
          <button
            ref={prevRef}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Prev
          </button>
          <button
            ref={nextRef}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>

        <Swiper
          onSwiper={() => setSwiperReady(true)}
          loop={true}
          spaceBetween={10}
          onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full rounded-lg overflow-hidden"
          onBeforeInit={(swiper) => {
            // bind custom nav
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  width={1000}
                  height={1000}
                  priority
                  quality={100}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-5 w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="relative flex items-center justify-center w-full h-full rounded-lg overflow-hidden">
                <Image
                  width={300}
                  height={300}
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-black/70 transition-opacity duration-200 ${
                    selectedIndex === index ? "opacity-0 " : "opacity-100"
                  }`}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Thumbnails;

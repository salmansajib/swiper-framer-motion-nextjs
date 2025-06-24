"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SlidesHome() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <Swiper
          navigation
          loop
          pagination={{ type: "bullets", clickable: true }}
          modules={[Navigation, Pagination]}
          className="h-96 w-full rounded-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full">
                <Image
                  width={1000}
                  height={1000}
                  src={image.src}
                  alt={image.alt}
                  priority
                  quality={100}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

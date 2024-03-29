"use client";
import * as React from "react";
import Image from "next/image";
import software from "../../Images/sr.png";
import srsoftware from "../../Images/soft.png";
import websoftware from "../../Images/web.png";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface OwlItem {
  id: number;
  imageUrl: StaticImageData; // URL of the owl image
  name: string; // Title for the owl card
}

const owlItems: OwlItem[] = [
  { id: 1, imageUrl: software, name: "Software Engineer" },
  { id: 2, imageUrl: srsoftware, name: "Sr.Software Engineer" },
  { id: 3, imageUrl: websoftware, name: "Web Developer" },
  { id: 4, imageUrl: software, name: "App Developer" },
  { id: 5, imageUrl: websoftware, name: "UI&UX Designer" },
  { id: 6, imageUrl: websoftware, name: "Full Stack Developer" },
  // Add more owl items as needed
];

const CarouselMain = () => {
  const visibleItems = 3; // Number of items visible at a time
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const nextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + visibleItems) % owlItems.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? owlItems.length - visibleItems
        : prevSlide - visibleItems
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const visibleOwlItems = owlItems.slice(
    currentSlide,
    currentSlide + visibleItems
  );

  return (
    <div className=" md:mt-0 flex flex-col items-center ">
      <div className="relative md:w-[1050px]  overflow-hidden">
        <div className="flex justify-center gap-6 transition-transform duration-500 ease-in-out">
          {visibleOwlItems.map((item) => (
            <motion.div
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{
                scale: 1.2,
                rotate: 0,
                borderRadius: "100%",
              }}
              key={item.id}
              className={`  ${
                currentSlide === item.id ? "owl-card-active" : ""
              }`}
            >
              <div>
                <div className="cursor-pointer">
                  <div className="w-[125px] relative top-[80px] left-[80px] h-[125px] rounded-full bg-purple-600 flex justify-center items-center transition duration-300">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={75}
                      height={75}
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-[300px] mb-12 h-[300px] shadow-[#6D4BD0] shadow-sm  hover:border-purple-600  flex flex-col justify-center items-center border rounded-[40px]">
                    <h1 className="text-center font-cabinet-grotesk font-semibold w-44 text-[30px] mt-4">
                      {item.name}
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          className="absolute top-1/2 mt-12 transform -translate-y-1/2  text-[#B9A3FA]  py-1 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute top-1/2 mt-12  right-2 transform -translate-y-1/2  text-[#B9A3FA] py-1 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselMain;

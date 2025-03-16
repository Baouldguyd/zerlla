"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import orderImg from "@/asset/orderOnline.jpg";
import deliverImg from "@/asset/deliver.jpg";
import deliveredImg from "@/asset/order.png";

const images = [orderImg, deliverImg, deliveredImg];

const Animation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Change every 2.5s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden w-[30rem] h-[20rem] relative ">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute w-full h-full flex justify-center items-center"
        >
          <Image
            src={images[index]}
            className="object-contain w-full h-full"
            alt="animation"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Animation;

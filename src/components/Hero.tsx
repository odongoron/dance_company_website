"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FloatingDancer = () => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ y: [0, -10, 0], rotateZ: [0, 10, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-16 h-16 bg-hotpink rounded-full" />
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating Dancers */}
      <FloatingDancer />

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 text-center p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-wider"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          DANCE WITH US
        </motion.h1>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <Image
            src="/dancer.jpg"
            alt="Dancer in motion"
            width={1300}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;


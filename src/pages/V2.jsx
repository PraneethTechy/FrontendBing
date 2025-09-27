import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import broken from '../assets/broken.png'

const V2 = () => {
  const text =
    "You Know What we do now but you really know what we do scroll why you need little yellow ";

  return (
    <section className="relative h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold overflow-hidden ">
      {/* Top Marquee */}
      <div className="absolute top-0 left-0 right-8 h-8 overflow-hidden mt-2">
        <div className="animate-marquee text-yellow-400 text-sm ">
          <span className="whitespace-nowrap">{text.repeat(20)}</span>
          <span className="whitespace-nowrap">{text.repeat(20)}</span>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden ml-6">
        <div className="animate-marquee text-yellow-400 text-sm">
          <span className="whitespace-nowrap">{text.repeat(20)}</span>
          <span className="whitespace-nowrap">{text.repeat(20)}</span>
        </div>
      </div>

      {/* Left Marquee */}
      <div className="absolute top-0 left-0 h-full w-8 overflow-hidden flex items-center justify-center mt-6">
        <div className="animate-marquee-vertical animate-marquee-vertical-left-inward text-yellow-400 text-sm">
          <span className="whitespace-nowrap">{text.repeat(10)}</span>
        </div>
      </div>

      {/* Right Marquee */}
      <div className="absolute top-0 right-0 bottom-8 w-8 overflow-hidden flex items-center justify-center">
        <div className="animate-marquee-vertical animate-marquee-vertical-right text-yellow-400 text-sm ">
          <span className="whitespace-nowrap">{text.repeat(10)}</span>
        </div>
      </div>

      <main className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-around h-full gap-8">
        {/* Left Part - NOW ANIMATED ✨ */}
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and its original position
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // Ensures the animation runs only once
          className="flex flex-col text-center lg:text-left pt-2 lg:pt-0 -mt-[200px] ml-[50px]"
        >
          <h1 className="font-serif md:text-[80px] text-6xl font-normal leading-none ml-6 z-2">
            ting
          </h1>
          <p className="text-sm md:text-2xl mt-2 ml-15 ">A  fully </p>
          <p className="text-sm md:text-2xl mt-2 ml-6">integrated</p>
          <div className="text-xl md:text-2xl my-1 flex items-center justify-center lg:justify-start gap-2">
            <span className="bg-yellow-400 text-black px-2 py-0.5">digital</span>
            <span>&</span>
            <br />
          </div>
          <p className="ml-15 bg-white text-black px-2  text-2xl">creative</p>
          <p className="ml-[100px] font-mono text-xl md:text-2xl">agency</p>
        </motion.div>

        {/* Right Part - NOW ANIMATED ✨ */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start invisible and 100px to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and its original position
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // Ensures the animation runs only once
          className="relative w-[250px]  max-w-sm -mt-[230px] mr-[100px]"
        >
          <div className="bg-yellow-400 text-black p-4 relative z-10 h-[330px] ">
            <div className="mb-2">
              <p className="font-bold text-sm text-yellow-300 bg-black mr-[160px]">Started:</p>
              <p className="text-xl font-semibold">2009</p>
            </div>
            <div className="mb-2">
              <p className="font-bold text-sm text-yellow-300 bg-black mr-[110px]">Team Strength:</p>
              <p className="text-xl font-semibold">500+</p>
            </div>
            <div>
              <p className="font-bold text-sm text-yellow-300 bg-black mr-[160px]">Offices:</p>
              <p className="text-xl font-semibold mb-1">Mumbai, Chennai & London</p>
              <p className="text-xs leading-tight">
                Bengaluru | Lucknow | Kochi | Hyderabad | Ahmedabad | Gurugram
              </p>
            </div>
          </div>
        </motion.div>

        <div className="absolute z-0 w-70 h-80 right-7 top-35">
          <img src={broken} alt="" />
        </div>
      </main>
    </section>
  );
};

export default V2;
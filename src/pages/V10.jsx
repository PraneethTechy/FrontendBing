import React from 'react';
import cycle from '../assets/cycle.png';
import { motion } from 'framer-motion';

const V10 = () => {
  return (
    <section className="bg-[#fffb00] p-4 font-mono  overflow-hidden">
      <div className="bg-gray-100 p-6 md:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-widest text-gray-800 mb-6 md:mb-8">
          celebrating 15 years of ting
        </h2>
        <div className="flex justify-center">
          <motion.img
            src={cycle}
            alt="Illustration of the Ting team on a tandem bicycle"
            className="max-w-full h-auto object-contain"
            // The starting state of the animation
            initial={{ x: '-100%', opacity: 0 }} 
            // Replace 'animate' with 'whileInView'
            whileInView={{ x: 0, opacity: 1 }} 
            // Add this to make the animation play only once
            viewport={{ once: true }}
            // The transition properties remain the same
            transition={{ duration: 1.5, ease: "easeOut" }} 
          />
        </div>
      </div>
    </section>
  );
};


export default V10;
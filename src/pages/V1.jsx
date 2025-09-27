import React from "react";
import image from '../assets/image.jpg';

const V1 = () => {
  return (
    <section className="h-screen w-full bg-[#F5F5DC] flex flex-col items-center justify-start px-8 py-12">
      {/* Headline */}

    <h1
  style={{ fontFamily: "'UnifrakturMaguntia', cursive" }}
  className="
    relative 
    text-8xl font-extrabold text-gray-900 tracking-wide text-center 
    
     /* <-- Decreased this value to create a smaller gap */

    /* --- Thick Top Line (created with ::before) --- */
    before:content-['']
    before:absolute
    before:w-full
    before:h-[4px]      
    before:bg-black
    before:left-0
    before:bottom-0     

    /* --- Thin Bottom Line (created with ::after) --- */
    after:content-['']
    after:absolute
    after:w-full
    after:h-[1px]       
    after:bg-black
    after:left-0
    after:bottom-[-5px] 
  "
>
  Random in Websites
</h1>

      {/* Example Image */}
      <div className="w-full max-w-4xl pt-4">
        <img
        src={image}
          alt="Example"
          className="w-full h-[550px] object-cover "
        />
      </div>
    </section>
  );
};

export default V1;

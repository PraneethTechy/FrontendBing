import React from "react";
import house from "../assets/house.jpg";

const V3 = () => {
  return (
// After
<section className="flex flex-col justify-start pt-0 bg-gray-100">      {/* Inner container with white background and margins */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 flex flex-col items-center py-12 w-full">
        {/* Container for the heading and lines */}
        <div className="w-full max-w-4xl flex flex-col items-center mb-12">
          {/* Top broad line */}
          <div className="w-full h-[2px] bg-gray-700 mb-1"></div>
          <div className="w-full h-[2px] bg-gray-700 mb-1"></div>

          {/* Headline */}
          <h1
            className="text-9xl font-bold text-gray-900 text-center"
            style={{ fontFamily: "Gideon Roman, serif" }}
          >
            The Bing Story
          </h1>

          {/* Bottom broad line */}
          <div className="w-full h-[2px] bg-gray-700 mb-1 mt-4"></div>
          <div className="w-full h-[2px] bg-gray-700 mb-1"></div>
        </div>

        {/* Content area */}
        <div className="flex items-center space-x-8 font-mono ">
          {/* Text on the left */}
          <div className="w-1/2 text-gray-800 leading-relaxed text-lg space-y-6">
            <p className="text-xl">
              {" "}
              No resources ? No experience ? No clients ? No portfolio ? No
              problem
            </p>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <p className="mb-5 text-sm">
                  Chennai: A hot summer day, a flat tyre and a long chat was the
                  lethal concoction that killed our jobs and mothered TING! Two
                  offices: one in Chennai and the other one in Mumbai, our
                  laptops, and the friendship and faith we had built in MICA is
                  the foundation of our passion, our work, our agency; TING.
                </p>

                <p className="text-sm">
                  Ten years later, we can say that the journey has agency soon,
                  became a space where we worked on anything that involved
                  design (including ads, of course). Hence, websites, e-commerce
                  portals, apps, displays, and augmented reality, all seem to
                  have found a space in TING!
                </p>
              </div>

              <div className="w-1/2 ml-10">
                <p className="text-sm">
                  We soon evolved within the digital space and ventured into
                  social media marketing and our taste of the digital world has
                  been quite rewarding so far!
                </p>

                <p className="my-10">house of tingdom</p>

                <p className="text-sm">
                  On February 18th, we fell in love with our new home, right in
                  the heart of Fort, Mumbai. Come say hello and while you’re at
                  it, put us up on your Instagram, ‘cos why not?
                </p>

                <p className="text-sm ">
                  Since then 2 new houses have come up and 1 more is on the way.
                  Click here, check us out!
                </p>
              </div>
            </div>
          </div>

          {/* Image on the right */}
          <div className="w-80 ml-10 mb-20">
            <img
              src={house}
              alt="Placeholder Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mt-10 w-full h-[2px] bg-gray-700 mb-1"></div>
      </div>
    </section>


      


  );
};

export default V3;

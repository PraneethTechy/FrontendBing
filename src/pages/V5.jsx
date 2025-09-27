import React from "react";

const V5 = () => {
  const text =
    "You Know What we do now but you really know what we do scroll why you need little yellow ";

  return (
    <>
      <section className="relative h-screen w-full bg-gray-100 text-white overflow-hidden">
        {/* Top Marquee */}
        <div className="absolute top-0 left-0 right-8 h-8 overflow-hidden bg-black ml-5">
          <div className="animate-marquee text-yellow-400 text-sm">
            <span className="whitespace-nowrap">{text.repeat(20)}</span>
            <span className="whitespace-nowrap">{text.repeat(20)}</span>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="absolute bottom-0 left-6 right-3 h-8 overflow-hidden bg-black">
          <div className="animate-marquee text-yellow-400 text-sm">
            <span className="whitespace-nowrap">{text.repeat(20)}</span>
            <span className="whitespace-nowrap">{text.repeat(20)}</span>
          </div>
        </div>

        {/* Left Marquee */}
        <div className="absolute top-0 left-0 h-full w-8 overflow-hidden flex items-center justify-center mt-6 bg-black ml-5">
          <div className="animate-marquee-vertical animate-marquee-vertical-left-inward text-yellow-400 text-sm">
            <span className="whitespace-nowrap">{text.repeat(10)}</span>
          </div>
        </div>

        {/* Right Marquee */}
        <div className="absolute top-0 right-0 bottom-8 w-8 overflow-hidden flex items-center justify-center bg-black mr-3">
          <div className="animate-marquee-vertical animate-marquee-vertical-right text-yellow-400 text-sm">
            <span className="whitespace-nowrap">{text.repeat(10)}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 mt-20 px-16 text-black space-y-6">
          {/* Header */}
          <div className="flex items-start space-x-6">
            <p className="text-5xl font-bold font-mono">What we do</p>

            <div className="pl-5 space-y-1">
              <p className="text-base font-extralight">#EatLaughFaff</p>
              <p className="text-base">Besides that, we indulge in</p>
            </div>

            <div className="pl-3 w-[280px] h-[70px] border text-sm space-y-1">
              <p>LOSE UPTO 20 KILOS</p>
              <p>IN A MONTH</p>
              <p>only 80% of your salary!</p>
            </div>
          </div>

          {/* Highlight + Button */}
          <div className="flex items-center space-x-6">
            <p className="bg-[#fffb00] font-mono font-thin text-xl w-[500px] h-9 flex items-center justify-center">
              360° Integrated Solutions
            </p>

            <button className="bg-black text-white px-6 py-2 text-xl">
              View our works
            </button>
          </div>

          {/* Columns */}
          <div className="flex flex-wrap gap-6">
            {/* Column 1 */}
            <div className="w-1/3 font-normal text-black space-y-2">
              <h1 className="mt-5 font-bold font-mono text-2xl">dodos</h1>
              <p className="text-sm">- BRAND IDENTITY</p>
              <p className="text-sm">- BRAND STRATEGY</p>
              <p className="text-sm">- BRAND PLAYBOOK</p>
              <p className="text-sm">- PACKAGING</p>

              <h1 className="mt-5 font-bold font-mono text-2xl">qope</h1>
              <p className="text-sm">- BRAND & CORPORATE WEBSITES</p>
              <p className="text-sm">- SHOPIFY AND WOOCOMMERCE</p>
              <p className="text-sm">- MOBILE APPLICATIONS</p>
              <p className="text-sm">- VOICE USER INTERFACE</p>
              <p className="text-sm">- MARTECH INTEGRATIONS</p>

              <h1 className="mt-5 font-bold font-mono text-2xl">studios</h1>
              <p className="text-sm">- VIDEO PRODUCTION</p>
              <p className="text-sm">- BRAND FILMS</p>
              <p className="text-sm">- CORPORATE FILMS</p>
              <p className="text-sm">- MICRO CONTENT</p>
              <p className="text-sm">- PHOTOGRAPHY</p>
            </div>

            {/* Column 2 */}
            <div className="w-1/3 font-black space-y-2 font-normal">
              <h1 className="mt-5 font-bold font-mono text-2xl">ting</h1>
              <p className="text-sm">- SOCIAL MEDIA MARKETING</p>
              <p className="text-sm">- INFLUENCER MARKETING</p>
              <p className="text-sm">- CONTENT MARKETING</p>
              <p className="text-sm">- RESPONSE MANAGEMENT</p>
              <p className="text-sm">- SOCIAL ANALYTICS</p>


              <h1 className="mt-5 font-bold font-mono text-2xl">cmyk</h1>
              <p className="text-sm">- ATL / BTL
</p>
              <p className="text-sm">- CSR</p>
              <p className="text-sm">-EMPLOYER BRANDING
</p>
              <p className="text-sm">- INTERNAL COMMUNICATION
</p>
              

              <h1 className="mt-5 font-bold font-mono text-2xl">urbine</h1>
              <p className="text-sm">- PAID MEDIA MANAGEMENT
</p>
              <p className="text-sm">- MARTECH & FUNNEL AUTOMATION
</p>
              <p className="text-sm">- SEARCH ENGINE OPTIMIZATION
</p>
              <p className="text-sm">- PROGRAMMATIC ADVERTISING
</p>
              <p className="text-sm">- AMAZON MARKETING ++
</p>
            </div>

            {/* Column 3 - empty or future content */}
            <div className="w-1/3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default V5;

import React, { useState, useEffect } from "react";
import V1 from "./pages/V1";
import V2 from "./pages/V2";
import V3 from "./pages/V3";
import Navbar from "./components/Navbar";
import road from "./assets/road.jpg";
import V4 from "./pages/V4";
import V5 from "./pages/V5";
import V6 from "./pages/V6";
import V7 from "./pages/V7";
import V8 from "./pages/V8";
import V9 from "./pages/V9";
import V10 from "./pages/V10";

function App() {
  const [showV1, setShowV1] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const v5 = document.getElementById("v5-section");
      if (v5) {
        const rect = v5.getBoundingClientRect();
        // When V5 is fully visible, hide V1
        if (rect.bottom <= window.innerHeight) {
          setShowV1(false);
        } else {
          setShowV1(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-gray-500 bg-cover bg-center"
      style={{ backgroundImage: "##7D7D7D" }}
    >
      {/* V1 fixed in the background only while showV1 is true */}
      {showV1 && (
        <div className="fixed inset-0 z-0">
          <div className="max-w-6xl mx-auto px-[100px] h-full mt-6">
            <V1 />
          </div>
        </div>
      )}

      {/* Scrollable content */}
      <div className="relative z-10">
        <div className="h-screen"></div>

        <div className="max-w-6xl mx-auto px-[100px]">
          <V2 />
        </div>

        <div className="relative w-full">
          <div className="max-w-6xl mx-auto px-[100px]">
            <div className="sticky top-0 z-20">
              <Navbar />
            </div>

            <V3 />
            <V4 />
            <div id="v5-section">
              <V5 />
            </div>
            </div>
            <V6 />
            <div className="max-w-6xl mx-auto px-[100px]">
            <V7 />
            <V8 />
            <V9 />
            <V10 />

            </div>
          </div>
        </div>
      <div className="w-full h-40 flex items-center justify-center text-white font-sanserif text-xl">
  <p>Privacy Policy &nbsp; &nbsp; Disclimar</p>
</div>
      </div>
    
  );
}

export default App;

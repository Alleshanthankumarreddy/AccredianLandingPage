import { Headphones, ArrowRight } from "lucide-react";

export default function SupportCTA() {
  return (
    <section
      id="supportSection"
      className="w-full flex justify-center mt-16 sm:mt-24 px-4"
    >
      {/* Container */}
      <div className="w-full max-w-6xl">

        <div className="bg-blue-600 border border-blue-600 rounded-xl py-8 md:py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Content */}
          <div className="flex gap-8 md:flex-row flex-col items-center md:items-start">
            
            <div className="w-20 h-20 flex-shrink-0 bg-white/20 rounded-xl p-1">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-3xl font-semibold text-white">
                Want to Learn More About Our Training Solutions?
              </h1>

              <h4 className="hidden sm:block text-base md:text-lg mt-2 text-gray-200 max-w-xl">
                Get Expert Guidance for Your Team’s Success!
              </h4>
            </div>
          </div>

          {/* Button */}
          <button className="w-full max-w-[200px] py-2 sm:py-3 px-4 bg-white text-blue-600 text-lg font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition">
            Contact Us
            <ArrowRight />
          </button>

        </div>
      </div>
    </section>
  );
}
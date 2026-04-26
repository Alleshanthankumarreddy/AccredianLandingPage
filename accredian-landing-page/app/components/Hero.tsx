export default function Hero() {
  const features = [
    "Tailored Solutions",
    "Industry Insights",
    "Expert Guidance",
    "Measurable Impact",
  ];

  return (
    <section className="flex justify-center items-start mt-24">
      <div className="max-w-[85rem] w-full px-4 xl:px-12">

        <div
          id="home"
          className="flex justify-center items-center my-4 sm:mt-20"
        >
          <div className="rounded-2xl md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 md:gap-10 shadow-lg overflow-visible p-6">

            {/* LEFT CONTENT */}
            <div className="sm:w-1/2 w-full flex flex-col gap-6 lg:gap-10">

              {/* Heading */}
              <h1 className="text-center sm:text-left text-2xl sm:text-4xl lg:text-6xl font-bold capitalize">
                Next-Gen{" "}
                <span className="text-blue-600">Expertise</span> for Your{" "}
                <span className="text-blue-600">Enterprise</span>
              </h1>

              {/* Subtext */}
              <p className="text-center sm:text-left text-gray-600 text-sm sm:text-lg lg:text-xl">
                Cultivate high-performance teams through expert learning.
              </p>

              {/* Features */}
              <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    
                    {/* Icon */}
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>

                    {item}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="flex justify-center sm:justify-start">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex w-full sm:w-1/2 justify-center sm:justify-end">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
                alt="hero"
                className="w-[80%] sm:w-full"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
import {
  BarChart3,
  Presentation,
  MonitorPlay,
} from "lucide-react";

export default function CAT() {
  

  return (
    <>
      {/* 🔹 CAT Framework */}
      <section
        id="cat"
        className="w-full mt-12 sm:mt-16 py-6 flex flex-col items-center"
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            Our Proven Approach to{" "}
            <span className="text-blue-600">
              Learning Excellence
            </span>
          </p>
        </div>

        <div className="w-full flex justify-center mt-12">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
            alt="CAT Framework"
            className="w-[90%] sm:w-[70%] rounded-lg"
          />
        </div>
      </section>

    </>
  );
}
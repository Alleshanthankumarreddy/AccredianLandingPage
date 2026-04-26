import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  Banknote,
} from "lucide-react";

export default function AccredianEdge() {
  const domains = [
    { name: "Product & Innovation Hub", icon: Lightbulb },
    { name: "Gen-AI Mastery", icon: Brain },
    { name: "Leadership Elevation", icon: Users },
    { name: "Tech & Data Insights", icon: BarChart3 },
    { name: "Operations Excellence", icon: Settings },
    { name: "Digital Enterprise", icon: Globe },
    { name: "Fintech Innovation Lab", icon: Banknote },
  ];

  const courses = [
    {
      title: "Program Specific",
      img: "project-management-v2.webp",
    },
    {
      title: "Industry Specific",
      img: "digital-transformation-v2.webp",
    },
    {
      title: "Topic Specific",
      img: "data-science-v2.webp",
    },
    {
      title: "Level Specific",
      img: "senior-management-v2.webp",
    },
  ];

  const baseURL =
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/";

  return (
    <section id="accredianEdge" className="mt-12 px-4 md:px-8 xl:px-12">

      {/* 🔹 Accredian Edge */}
      <div className="text-center pb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Key Aspects of{" "}
          <span className="text-blue-600">
            Our Strategic Training
          </span>
        </p>
      </div>

      <div className="hidden sm:flex justify-center mb-8">
        <img
          src={baseURL + "accredian-edge-usp-v3.svg"}
          alt="Accredian Edge"
          className="w-full rounded-lg"
        />
      </div>

      <div className="flex sm:hidden justify-center mb-12">
        <img
          src={baseURL + "accredian-edge-usp-mobile.svg"}
          alt="Accredian Edge"
          className="w-full rounded-lg"
        />
      </div>

      {/* 🔹 Domain Expertise */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            <span className="text-blue-600">Specialized Programs</span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {domains.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="w-[45%] sm:w-[30%] flex sm:flex-col items-center justify-center gap-2 bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition"
              >
                <Icon className="text-blue-600 w-6 h-6 sm:w-14 sm:h-14" />
                <h3 className="text-xs sm:text-lg font-semibold text-center">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔹 Course Segmentation (NEW) */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Tailored{" "}
            <span className="text-blue-600">
              Course Segmentation
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            Explore{" "}
            <span className="text-blue-600">
              Custom-fit Courses
            </span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={baseURL + course.img}
                alt={course.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />

              <h4 className="text-xl font-semibold text-blue-600 p-6">
                {course.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
          {/* 🔹 Who Should Join Section */}
<div className="mt-16 bg-blue-600 rounded-xl flex flex-col md:flex-row text-white">

  {/* LEFT SIDE */}
  <div className="md:w-1/2 pt-12 md:pl-6 flex flex-col justify-between">
    <div>
      <h4 className="text-lg sm:text-xl font-medium">
        Who Should Join?
      </h4>

      <h1 className="text-2xl md:text-[40px] leading-[39px] capitalize mt-2 font-semibold">
        Strategic Skill Enhancement
      </h1>
    </div>

    {/* Image */}
    <div className="w-[300px] hidden md:block">
      <img
        src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png"
        alt="Human Illustration"
      />
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">

    {/* Item 1 */}
    <div>
      <h2 className="text-lg font-semibold">
        Tech Professionals
      </h2>
      <p className="text-sm text-gray-200">
        Enhance expertise, embrace tech, drive innovation.
      </p>
    </div>

    {/* Item 2 */}
    <div>
      <h2 className="text-lg font-semibold">
        Non-Tech Professionals
      </h2>
      <p className="text-sm text-gray-200">
        Adapt digitally, collaborate in tech environments.
      </p>
    </div>

    {/* Item 3 */}
    <div>
      <h2 className="text-lg font-semibold">
        Emerging Professionals
      </h2>
      <p className="text-sm text-gray-200">
        Develop powerful skills for rapid career growth.
      </p>
    </div>

    {/* Item 4 */}
    <div>
      <h2 className="text-lg font-semibold">
        Senior Professionals
      </h2>
      <p className="text-sm text-gray-200">
        Strengthen leadership, enhance strategic decisions.
      </p>
    </div>

  </div>
</div>
    </section>
  );
}
import { BarChart3, Presentation, MonitorPlay } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: BarChart3,
    },
    {
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: Presentation,
    },
    {
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry needs.",
      icon: MonitorPlay,
    },
  ];

  return (
    <section id="howItWorks" className="mt-12 sm:mt-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            How We{" "}
            <span className="text-blue-600">
              Deliver Results
            </span>{" "}
            That Matter?
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-600">
              Skill Development
            </span>
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-6 flex flex-col items-center text-center max-w-[18rem] w-full hover:shadow-xl transition"
              >
                {/* Side bars */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-blue-600 rounded" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-blue-600 rounded" />

                {/* Step Number */}
                <div className="absolute top-4 left-4 w-6 h-6 border-2 border-blue-300 bg-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md mb-4">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 hidden sm:block">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
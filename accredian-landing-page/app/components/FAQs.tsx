"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian provides industry-specific, customizable training programs tailored to meet your organization's needs.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "We offer expertise in Leadership, Tech & Data, Fintech, Digital Business, Product Innovation, and more.",
    },
  ];

  return (
    <section id="faqs" className="w-full flex justify-center mt-16 px-4">
      <div className="max-w-[85rem] w-full">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Frequently Asked{" "}
          <span className="text-blue-600">Questions</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mt-10">

          {/* LEFT SIDE (Categories - static for now) */}
          <div className="md:w-[30%] flex md:flex-col gap-4 overflow-x-auto">
            {["About the Course", "About the Delivery", "Miscellaneous"].map(
              (item, index) => (
                <div
                  key={index}
                  className={`min-w-[200px] text-center px-4 py-3 border rounded-md cursor-pointer ${
                    index === 0
                      ? "bg-white shadow-md text-blue-600 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>

          {/* RIGHT SIDE (Accordion) */}
          <div className="md:w-[70%] flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setActiveIndex(
                      activeIndex === index ? null : index
                    )
                  }
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {activeIndex === index && (
                  <div className="p-4 text-gray-600 border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}
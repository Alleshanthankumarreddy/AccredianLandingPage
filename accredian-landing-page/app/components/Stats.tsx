export default function Stats() {
  const stats = [
    {
      value: "10K+",
      text: "Professionals trained for exceptional career success",
    },
    {
      value: "200+",
      text: "Sessions delivered with unmatched learning excellence",
    },
    {
      value: "5K+",
      text: "Active learners engaged in dynamic courses",
    },
  ];

  return (
    <section className="flex justify-center px-4 sm:px-16 mt-16">
      <div className="max-w-[85rem] w-full">

        {/* Heading */}
        <div id="stats" className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Track Record</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            The Numbers Behind{" "}
            <span className="text-blue-600">Our Success</span>
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex justify-center gap-10 p-6 rounded-xl">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-4 ${
                index !== stats.length - 1 ? "border-r-2 pr-6" : ""
              }`}
            >
              <div className="text-blue-600 font-semibold text-2xl bg-blue-100 px-4 py-2 rounded-full">
                {item.value}
              </div>

              <p className="max-w-[250px] text-gray-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden flex flex-col gap-6 mt-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 pb-4 ${
                index !== stats.length - 1 ? "border-b-2" : ""
              }`}
            >
              <div className="bg-blue-100 text-blue-600 font-semibold px-3 py-2 rounded-full">
                {item.value}
              </div>

              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
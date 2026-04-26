export default function Clients() {
  const clients = [
    "rel.png",
    "hcl.png",
    "ibm.png",
    "crif.png",
    "adp.svg",
    "bayer.svg",
  ];

  const baseURL =
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/";

  return (
    <section
      id="clients"
      className="mt-12 sm:mt-28 xl:px-12 px-4 text-center"
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Our Proven{" "}
          <span className="text-blue-600">Partnerships</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Successful Collaborations With the{" "}
          <span className="text-blue-600">Industry’s Best</span>
        </p>
      </div>

      {/* Desktop Grid */}
      <ul className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 xl:gap-12">
        {clients.map((client, index) => (
          <li key={index} className="flex justify-center items-center p-4">
            <img
              src={baseURL + client}
              alt="client"
              className="object-contain w-14 h-14 sm:w-24 sm:h-24"
            />
          </li>
        ))}
      </ul>

      {/* Mobile Marquee */}
      <div className="sm:hidden overflow-hidden relative w-full mt-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="px-6">
              <img
                src={baseURL + client}
                alt="client"
                className="w-14 h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
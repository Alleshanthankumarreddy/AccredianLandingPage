import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 sm:mt-24 py-10 bg-[#1d1d1d] text-white">
      <div className="w-full max-w-[85rem] mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-6">

          {/* Logo + Social */}
          <div>
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="logo"
              className="w-36"
            />

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-gray-300">
              <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />
              <FaLinkedin className="cursor-pointer hover:text-blue-500 transition" />
              <FaTwitter className="cursor-pointer hover:text-blue-500 transition" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
              <FaYoutube className="cursor-pointer hover:text-red-500 transition" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-0 text-center md:text-right">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm sm:text-lg hover:bg-blue-700 transition">
              Enquire Now
            </button>
            <p className="text-gray-400 text-sm mt-2">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 pb-6 border-b border-gray-700">

          {/* Accredian Links */}
          <div>
            <h3 className="text-lg font-semibold !text-white tracking-wide">
            Accredian
            </h3>

            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Why Accredian</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <p className="mt-2 text-gray-400">
              Email:{" "}
              <a href="mailto:enterprise@accredian.com" className="text-blue-400">
                enterprise@accredian.com
              </a>
            </p>

            <p className="mt-2 text-gray-400 max-w-lg">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
              Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-4">
          <p className="text-gray-500 text-sm">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
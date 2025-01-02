import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const NewsletterSection = () => {
  return (
    <div className="flex flex-wrap justify-between  items-center lg:gap-8 gap-4 md:gap-y-16  md:px-16 lg:px-5   bg-white  rounded-lg border-b lg:flex-nowrap">
      {/* Left Section */}
      <div className=" flex  lg:flex-row flex-col md:flex-row md:py-10 items-center gap-6    md:px-16 lg:px-0 lg:border-r  lg:border-b-0 md:border-r-0 border-b  py-3 sm:py-0 border-gray-300 border-separate lg:w-1/2 md:w-full">
        <div className="w-1/4 md:w-1/3 lg:w-1/3  h-full">
          <Image
            height={400}
            width={400}
            src="/webLogo.png" // Replace with your image URL
            alt="User"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="lg:space-y-5 md:space-y-4 space-y-4   text-center  lg:text-start md:text-start">
          <h3 className="lg:text-xl text-[16px] text-center md:text-start lg:text-start w-full  font-bold text-red-700">
            Mr.onsequat <span className="text-gray-800">- designer</span>
          </h3>
          <p className="text-gray-600  w-full lg:pr-4 sm:px-0 px-5 mt-2">
            Consectetur adipiscing elit donec vitae nunc vel enim tempus
            fermentum nec ac enim sed egestas faucibus turpis id egestas.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mb-16 space-y-7 md:px-20 w-full lg:p-6  lg:px-14 md:w-full">
        <h3 className="lg:text-3xl text-[16px] md:text-[20px] text-center  font-semibold text-gray-800 mb-4">
          Sign up for Newsletter
        </h3>
        <div className="flex  flex-col px-2 sm:px-0 lg:flex-row md:flex-row items-center gap-2">
          <input
            type="email"
            placeholder="Enter your mail.."
            className="flex-1 lg:px-4 md:px-4 text-center sm:text-left w-full py-2 border border-gray-300   focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-red-700 text-white px-4 md:px-5 lg:px-5   py-2  hover:bg-red-600">
            SUBSCRIBE
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center  gap-5 text-center">
          <p className="text-[16px] items-center text-gray-600 ">
            <span className="text-red-700 font-semibold">Follow us:</span>
          </p>
          <div className="flex items-center gap-3 ">
            {/* Social Media Icons */}
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:scale-110 duration-300 rounded-full text-blue-600 hover:text-blue-500  transition"
            >
              <FaFacebook />{" "}
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:scale-110 duration-300 rounded-full text-gray-600 hover:text-red-500  transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:scale-110 duration-300 rounded-full text-red-600 hover:text-red-700  transition"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:scale-110 duration-300 rounded-full text-red-600 hover:text-red-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;

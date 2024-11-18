import Image from "next/image";

const NewsletterSection = () => {
    return (
      <div className="flex flex-wrap justify-between  items-center lg:gap-8 gap-4 md:gap-y-16 lg:px-[8%] md:px-16 px-5 bg-white lg:p-10 p-3 rounded-lg shadow-md lg:flex-nowrap">
        {/* Left Section */}
        <div className="flex lg:flex-row flex-col md:flex-row md:py-10 items-center gap-6 p-5  md:px-20 lg:px-14 lg:border-r  lg:border-b-0 md:border-r-0 border-b border-gray-300 border-separate lg:w-1/2 md:w-full">
          <div className="w-1/2 h-full">
            <Image height={500} width={500}
              src="/webLogo.png" // Replace with your image URL
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="lg:space-y-5 md:space-y-4 space-y-4   text-center  lg:text-start md:text-start">
            <h3 className="lg:text-xl text-[16px] text-center md:text-start lg:text-start w-full  font-bold text-red-500">
              Mr.onsequat <span className="text-gray-800">- designer</span>
            </h3>
            <p className="text-gray-600  w-full mt-2">
              Consectetur adipiscing elit donec vitae nunc vel enim tempus
              fermentum nec ac enim sed egestas faucibus turpis id egestas.
            </p>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="lg:w-1/2 mb-16 space-y-7 md:px-20 w-full lg:p-6  lg:px-14 md:w-full">
          <h3 className="lg:text-3xl text-[16px] md:text-[20px] text-center  font-semibold text-gray-800 mb-4">
            Sign up for newsletter
          </h3>
          <div className="flex flex-col lg:flex-row md:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your mail.."
              className="flex-1 lg:px-4 md:px-4 px-6 w-full py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 text-white px-4 md:px-6 lg:px-6   py-2 rounded-md hover:bg-red-600">
              SUBSCRIBE
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-5 text-center">
            <p className="text-[16px]  items-center text-gray-600 mb-2">
              <span className="text-red-500 font-semibold">Follow us:</span>
            </p>
            <div className="flex items-center gap-3">
              {/* Social Media Icons */}
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-red-500 hover:text-white transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-red-500 hover:text-white transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-red-500 hover:text-white transition"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-red-500 hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsletterSection;
  
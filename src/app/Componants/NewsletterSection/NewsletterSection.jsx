const NewsletterSection = () => {
    return (
      <div className="flex flex-wrap justify-between items-center gap-8 bg-white p-10 rounded-lg shadow-md lg:flex-nowrap">
        {/* Left Section */}
        <div className="flex items-center gap-6 lg:w-1/2 md:w-full">
          <div className="w-20 h-20">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-500">
              Mr.onsequat <span className="text-gray-800">- designer</span>
            </h3>
            <p className="text-gray-600 mt-2">
              Consectetur adipiscing elit donec vitae nunc vel enim tempus
              fermentum nec ac enim sed egestas faucibus turpis id egestas.
            </p>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="lg:w-1/2 md:w-full">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Sign up for newsletter
          </h3>
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your mail.."
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
              SUBSCRIBE
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
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
  
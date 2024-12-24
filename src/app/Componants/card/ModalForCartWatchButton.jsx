"use client";

// import Slide from "@mui/material/Slide";
import { my_context } from "@/app/GlobalDataShere/ContextProvider";
import { useContext, useEffect } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";

import { TbTruckDelivery } from "react-icons/tb";
import "@smastrom/react-rating/style.css"; // CSS ফাইল ইম্পোর্ট

export default function ModalForCartWatchButton() {
  const { modalData, setOpenModal, addItemToCart, openModal, setCart } =
    useContext(my_context);

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  const handleCardData = () => {
    // Add data to the cart when clicking on Add Cart button
    addItemToCart({
      id: modalData.id,
      name: modalData.name,
      image: modalData.image,
      brand: modalData.brand,
      price: modalData.price,
    });
  };

  const handleClose = (text) => {
    // Close modal and add data to the cart when clicking on Add Cart button
    setOpenModal(false);
    if (text === "add") {
      setCart(true);
      handleCardData();
    }
  };

  // Ensure the modal is controlled by `openModal`
  useEffect(() => {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      if (openModal) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [openModal]);

  return (
    <>
      <dialog
        id="my_modal_5"
        className="modal w-full lg:w-3/4 x1:w-[60%] h-fit"
      >
        <form method="dialog" className="absolute right-5 top-3">
          {/* Button to close the modal */}
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setOpenModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>
        <div className="w-full h-full p-6 bg-white">
          {/* Modal Content */}
          <div className="flex flex-col w-full md:flex-row lg:flex-row gap-6 mt-6">
            {/* Product Image */}
            <div className="w-full border-2 border-gray-200 lg:w-1/2 flex items-center justify-center">
              <img
                src={modalData.image || "/images/placeholder.png"}
                alt={modalData.name}
                className="w-full h-full object-contain rounded-none"
              />
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2">
              {/* Modal Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-2xl text-gray-800">
                  {modalData.name}
                </h3>
              </div>
              <div className="mt-5 lg:mt-8">
                {/* Product description */}
                <p className="text-gray-700 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, laboriosam, nihil expedita omnis nemo accusantium iure
                  eveniet veritatis officia aliquid laudantium possimus magni
                  tenetur vel nesciunt dicta molestiae odio. Quibusdam!
                </p>

                {/* Product Price and Stock */}
                <div className="mt-4">
                  <p className="text-xl font-semibold text-gray-900">
                    Price:{" "}
                    <span className="text-red-600">${modalData.price}</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Availability:{" "}
                    <span className="text-green-600 font-medium">
                      {modalData.stock > 0
                        ? `${modalData.stock} in stock`
                        : "Out of stock"}
                    </span>
                    <span className="w-full flex mt-3 items-center gap-1 text-gray-800">
                      <Rating
                        itemStyles={myStyles}
                        readOnly
                        style={{ maxWidth: 100 }}
                        value={modalData?.rating || 5}
                      />
                    </span>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                  <form method="dialog" className="w-full">
                    <button
                      type="button"
                      className="w-full py-3 bg-red-700 text-white font-medium hover:bg-gray-800 transition-all"
                      onClick={() => handleClose("add")}
                    >
                      Add to Cart
                    </button>
                  </form>
                  <button
                    type="button"
                    className="w-full py-3 bg-red-700 text-white font-medium hover:bg-gray-800 transition-all"
                  >
                    Buy Now
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-10">
                  <span>
                    <TbTruckDelivery size={20} className="text-red-700" />
                  </span>
                  <span className="hover:text-red-700 duration-300">
                    Item will be delivered on or before
                  </span>
                </div>

                <div className="x2:block mt-5 hidden">
                  <div className="flex space-x-4 mt-4 lg:mt-0">
                    {/* Payment Icons */}
                    <div className="w-16 justify-center object-cover flex p-1 bg-white h-14">
                      <img src="/bkash.png" alt="Visa" className="" />
                    </div>
                    <div className="w-18 justify-center flex p-1 bg-white h-14">
                      <img src="/nogad.svg" alt="Paypal" className="" />
                    </div>
                    <div className="w-14 h-14">
                      <img
                        src="/Rocket.png"
                        alt="Mastercard"
                        className="w-full"
                      />
                    </div>
                    <div className="w-14 justify-center flex p-1 bg-white h-12 mt-1">
                      <img
                        src="/duchBangla.png"
                        alt="American Express"
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

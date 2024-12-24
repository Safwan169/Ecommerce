"use client";

// import Slide from "@mui/material/Slide";
import { my_context } from "@/app/GlobalDataShere/ContextProvider";
import Link from "next/link";
import { useContext, useEffect } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { Rating, ThinStar } from "@smastrom/react-rating";

import { TbTruckDelivery } from "react-icons/tb";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
// };
export default function ModalForCartWatchButton() {
  // const [open, setOpen] = React.useState(false);

  const { modalData, setOpenModal, addItemToCart,openModal, setCart } =
    useContext(my_context);
  // console.log(modalData);
  // const handleClickOpen = () => {
  //   setOpenModal(true);

  // };

  // const { openCart, , cart } = useContext(my_context);

 const handleCardData=()=>{

  addItemToCart({
    id: modalData.id,
    name: modalData.name,
    image: modalData.image,
    brand: modalData.brand,
    price: modalData.price,
  });
 }

  const handleClose = (text) => {
    setOpenModal(false);
  if (text=='add') {

    setCart(true)
    handleCardData()
    
  }

  };

  // const myStyles = {
  //   itemShapes: ThinStar,
  //   activeFillColor: "#ffb700",
  //   inactiveFillColor: "#fbf1a9",
  // };

  useEffect(() => {
    const modal = document.getElementById("my_modal_5");


    if (openModal && modal) {
      modal.showModal();
    }
  }, [openModal]);

  return (
    <>
      <dialog
        id="my_modal_5"
        className="modal w-full lg:w-3/4 x1:w-[60%] h-fit"
      >
        <form method="dialog" className="absolute right-5  top-3">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={handleClose}
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
        <div className=" w-full h-full  p-6  bg-white  ">
          {/* Modal Content */}
          <div className="flex flex-col  w-full md:flex-row lg:flex-row gap-6 mt-6">
            {/* Product Image */}
            <div className="w-full border-2 border-gray-200  lg:w-1/2 flex items-center justify-center">
              <img
                src={modalData.image || "/images/placeholder.png"}
                alt={modalData.name}
                className="w-full h-full object-contain rounded-none"
              />
            </div>

            {/* Product Details */}
            <div className="w-full  lg:w-1/2">
              {/* Modal Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-2xl text-gray-800">
                  {modalData.name}
                </h3>
              </div>
              <div className="mt-5 lg:mt-8 ">
                {/* after name all card data  */}
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
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                  {/* <Link href={''} className="w-full"> */}
                  <form method="dialog" className=" w-full">
                    <button
                      className="w-full py-3 bg-red-700 text-white font-medium  hover:bg-gray-800 transition-all"
                      onClick={()=> handleClose('add')}
                      // onClick={() => alert("Added to Cart")}
                    >
                      Add to Cart
                    </button>
                  </form>

                  {/* </Link> */}
                  <button
                    className="w-full py-3 bg-red-700 text-white font-medium  hover:bg-gray-800 transition-all"
                    // onClick={() => alert("Buy It Now")}
                  >
                    Buy Now
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-10">
                  <span>
                    <TbTruckDelivery size={20} className="text-red-700" />
                  </span>
                  <span className=" hover:text-red-700 duration-300">
                    {" "}
                    Item will be delivered on or before{" "}
                  </span>
                </div>

                <div className="x2:block mt-5 hidden">
                  <div className="flex space-x-4 mt-4 lg:mt-0">
                    {/* Payment Icons */}
                    <div className="w-16 justify-center  object-cover flex p-1 bg-white h-14">
                      <img src="/bkash.png" alt="Visa" className=" " />
                    </div>
                    <div className="w-18 justify-center flex p-1 bg-white h-14">
                      <img src="/nogad.svg" alt="Paypal" className="" />
                    </div>
                    <div className=" w-14 h-14   ">
                      <img
                        src="/Rocket.png"
                        alt="Mastercard"
                        className="  w-full "
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

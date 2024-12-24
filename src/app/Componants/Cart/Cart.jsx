"use client";

import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  // TransitionChild,
} from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import { my_context } from "@/app/GlobalDataShere/ContextProvider";
import CartSliderContainer from "./CartSliderContant";
import { RxCross1 } from "react-icons/rx";

import FreeShippingBar from './Shared/AddCartfPage/Shared/FreeShippingBar'
import Subtotal from "./Subtotal"
import ModalForCartWatchButton from "../card/ModalForCartWatchButton";
import Link from "next/link";

export default function Cart() {
  //   const [open, setOpen] = useState(true)

  const { openCart, setCart, cart } = useContext(my_context);

  const amount =cart?.cartItems?.reduce((acc,current)=>acc+(current?.price)*current?.quantity ,0).toFixed(0) || 0;

  return (
    <Dialog open={openCart} onClose={setCart} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              {/* <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setCart(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild> */}
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 ">
                <div className="px-4 sm:px-6 border-b-gray-300 pb-5 border-b">
                  <DialogTitle className="text-base flex justify-between items-center font-semibold text-gray-900">
                    My shopping cart{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() => setCart(false)}
                    >
                      {" "}
                      <RxCross1 />
                    </span>
                  </DialogTitle>
                </div>

                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/*slider cart container  */}
                 {cart?.cartItems?.length>0&& <FreeShippingBar amount={amount / 10} />} 


                  {cart?.cartItems?.length>0?cart?.cartItems?.map((data, index) => (
                    <CartSliderContainer key={index} data={data} />
                  )):<div className="flex flex-col items-center justify-center h-[600px] space-y-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-12 h-12 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.3 2M7 13h10l4-8H6.3M7 13l-1.4 4.4a2 2 0 001.9 2.6h9.1a2 2 0 001.9-2.6L17 13M7 13h10m-5 8a1 1 0 100-2 1 1 0 000 2m6 0a1 1 0 100-2 1 1 0 000 2"
                    />
                  </svg>
                
                  <p class="text-lg font-semibold text-gray-800">Your cart is empty</p>
                
                  <Link
                    href="/shop/all"
                    class="px-6 py-2 text-white bg-red-700  hover:bg-red-800 transition duration-300"
                  >
                    CONTINUE SHOPPING
                  </Link>
                </div>
                }
                </div>

                {
                  cart?.cartItems?.length>0?<Subtotal setCart data={amount}/>:''
                }
              </div>
              
            </DialogPanel>
          </div>
        </div>
      </div>

      <ModalForCartWatchButton />
    </Dialog>
  );
}

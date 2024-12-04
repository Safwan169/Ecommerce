'use client'
import React, { createContext, useState,useEffect } from 'react'




 export const my_context=createContext()
const ContextProvider = ({children}) => {

  const [trendingProduct,setTrendingProduct]=useState(0)
  // for togole top category
   const [topCategory, setTopCategory] = useState(false)
   const [openCart,setCart]=useState(false)

  //  const [buyNowBtn,setBuyNowBtn] = useState('false')

  // const [buyNow,setBuyNow] = useState()
  
  const [cart, setCarts] = useState({ cartItems: [] }); 
 //  for a cart 


 
  useEffect(() => {
    setCartToState();
  },[]);

  const setCartToState = () => {
    setCarts(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : { cartItems: [] } // Initialize with empty cartItems array if cart is empty
    );
  };

 

  const addItemToCart = async ({
    product,
    name,
    image,
    brand,
    price,
    quantity = 1,
  }) => {
    const item = {
      product,
      name,
      image,
      brand,
      price,
      quantity ,
    };

    console.log(item);

    // Check if item exists in the cart
    const isItemExist = cart?.cartItems?.find(
      (i) => i.product === item.product
    );

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.product === isItemExist.product ? item : i
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));


    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

const data={
  trendingProduct,
  setTrendingProduct,
  topCategory,
  setTopCategory,
  openCart,
  setCart,
  setCarts ,
  cart,
  addItemToCart   
}
// console.log(trendingProduct)
  return (
    <my_context.Provider value={data} >
      {children}
    </my_context.Provider>
  )
}

export default ContextProvider

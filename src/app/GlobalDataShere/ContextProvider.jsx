"use client";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const my_context = createContext();
const ContextProvider = ({ children }) => {
  const [trendingProduct, setTrendingProduct] = useState(0);
  // for togole top category
  const [topCategory, setTopCategory] = useState(false);
  const [openCart, setCart] = useState(false);

  //  const [buyNowBtn,setBuyNowBtn] = useState('false')

  // const [buyNow,setBuyNow] = useState()

  const [cart, setCarts] = useState({ cartItems: [] });
  //  for a cart

  const [openModal, setOpenModal] = useState(false);
  // for control modal for cart watch button

  const [modalData, setModalData] = useState([]);

// for set wishlist to local storage
  const [wishListData, setWishListData] = useState([]);

//for control mobile devices navbar left slider 
const [leftSliderData, setLeftSliderData] = useState(false);


// for manage search input and search results
const [searchText,setSearchText]=useState();



// for manage collection and categories data 
const [categories,setCategory]=useState([])

// this is for maxPrice 
const [maxPrice, setMaxPrice] = useState(100);


// this is for set brands for shop and search results
const [Brands, setBrand] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get('https://electron-server-eta.vercel.app/categories')
      setCategory(res?.data)

      console.log(res?.data);
    } catch (error) {
      console.log(error, "this is from category section");

    }
  };
  fetchData();
},[]);
 

  useEffect(() => {
    setCartToState();
    getWishListData();
  }, []);

  const setCartToState = () => {
    setCarts(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : { cartItems: [] } // Initialize with empty cartItems array if cart is empty
    );
  };


  const getWishListData = () => {
    const data = localStorage.getItem("wishListData")
      ? JSON.parse(localStorage.getItem("wishListData"))
      : []
    setWishListData(data);
  };

  const addItemToWishlist = ({ id, name, image, brand, price,previousPrice,discount }) => {

    const item = {
      id,
      name,
      image,
      brand,
      price,
      previousPrice,
      discount      
    }


    const isItemExist = wishListData?.find((i) => i?.id === item?.id);
// console.log(isItemExist,'isItem exists')

let wishlist

    if(isItemExist) {


    wishlist = (wishListData?.filter((i) => item?.id!==i?.id))

  // console.log(wishlist)
    }

    else {

        wishlist = ([...(wishListData)||[],item])

  }

  localStorage.setItem("wishListData",JSON.stringify(wishlist))

  getWishListData()
  };

  const addItemToCart = async ({
    id,
    name,
    image,
    brand,
    price,
    quantity = 1,
    previousPice,
    discount
  }) => {
    const item = {
      id,
      name,
      image,
      brand,
      price,
      quantity,
      previousPice,
      discount
    };

    // console.log(item);

    // Check if item exists in the cart
    const isItemExist = cart?.cartItems?.find(
      (i) => i.id === item.id
    );

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.id === isItemExist.id ? item : i
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));

    setCartToState();
  };

  // for cart delete from local storage
  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.id !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const data = {
    trendingProduct,
    setTrendingProduct,
    topCategory,
    setTopCategory,
    openCart,
    setCart,
    setCarts,
    cart,
    addItemToCart,
    deleteItemFromCart,
    openModal,
    setOpenModal,
    modalData,
    setModalData,
    addItemToWishlist,
    wishListData,
    leftSliderData,
    setLeftSliderData,
    searchText,
    setSearchText,
    categories,
    setCategory,
    maxPrice,
    setMaxPrice,
    Brands,
    setBrand

  };
  // console.log(trendingProduct)
  return <my_context.Provider value={data}>{children}</my_context.Provider>;
};

export default ContextProvider;

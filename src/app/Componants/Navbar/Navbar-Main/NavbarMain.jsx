import React from "react";
import NavbarBigDevices from "../NavbarBigDevices";
import MobileNavbarLeftSlider from "../Mobile-Navbar/MobileNavbarLeftSlider";

import BottomNavbar from "../Mobile-Navbar/Bottom-Navbar/BottomNavabr"
const NavbarMain = () => {
  return (
    <div className=" ">
      <span className=""><NavbarBigDevices/></span>

      <MobileNavbarLeftSlider/>


      <span className="block md:hidden lg:hidden"><BottomNavbar/></span>
    </div>
  );
};

export default NavbarMain;

import React from "react";
import NavbarBigDevices from "../NavbarBigDevices";
import MobileNavbar from "../Mobile-Navbar/MobileNavbarLeftSlider";
import MobileNavbarLeftSlider from "../Mobile-Navbar/MobileNavbarLeftSlider";
const NavbarMain = () => {
  return (
    <div>
      <span className=""><NavbarBigDevices/></span>

      <MobileNavbarLeftSlider/>
      {/* <span className="block md:hidden lg:hidden"><MobileNavbar/></span> */}
    </div>
  );
};

export default NavbarMain;

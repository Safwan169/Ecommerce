"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { my_context } from "@/app/GlobalDataShere/ContextProvider";
import { RxCross1 } from "react-icons/rx";
import TopCategories from "../Top-Categories/TopCategories";
import Categories from "../Top-Categories/Categories";
import { IoHomeOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { GrBlog } from "react-icons/gr";
import Link from "next/link";

export default function MobileNavbarLeftSlider() {
  // const [open, setOpen] = React.useState(false);
  const { leftSliderData, setLeftSliderData } = React.useContext(my_context);

  const toggleDrawer = (newOpen) => () => {
    setLeftSliderData(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <p
        onClick={toggleDrawer(false)}
        className=" border-b mb-2 border-gray-300 flex justify-end px-3 pt-3 pb-1 w-full "
      >
        <RxCross1 className="text-gray-400" size={20} />
      </p>
      <p className="">
        <TopCategories />

        <p>
          <Categories />
        </p>
      </p>
      <List>
        {[
          { link: "/", text: "Home", icon: <IoHomeOutline size={20} /> },
          { link: "/shop/products", text: "Shop", icon: <BsShop size={20} /> },
          {
            link: "/collection",
            text: "Collection",
            icon: <AiOutlineProduct size={20} />,
          },
          { link: "/", text: "Blog", icon: <GrBlog size={20} /> },
          { link: "/", text: "Pages", icon: <RiPagesLine size={20} /> },
        ].map((text, index) => (
          <ListItem key={text.text} disablePadding>
            <Link onClick={toggleDrawer(false)} href={text?.link}>
              <ListItemButton className="">
                <ListItemIcon className="flex justify-center">
                  {text?.icon}
                </ListItemIcon>
                <ListItemText className="" primary={text?.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={leftSliderData} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

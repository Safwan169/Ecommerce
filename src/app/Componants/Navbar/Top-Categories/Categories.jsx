"use client"

import { useContext } from "react";
import { my_context } from "@/app/GlobalDataShere/ContextProvider";

const Categories = () => {

    const categories = [
        { name: "Computer", image: "path/to/computer.jpg" },
        { name: "Smartphone", image: "path/to/smartphone.jpg" },
        { name: "Camera", image: "path/to/camera.jpg" },
        { name: "Headphone", image: "path/to/headphone.jpg" },
        { name: "Laptop", image: "path/to/laptop.jpg" },
        { name: "Speakers", image: "path/to/speakers.jpg" },
        { name: "Home appliance", image: "path/to/home_appliance.jpg" },
        { name: "Macbook", image: "path/to/macbook.jpg" },
        { name: "Smart TV", image: "path/to/smart_tv.jpg" },
        { name: "Pen drives", image: "path/to/pen_drives.jpg" },
        { name: "Mobile", image: "path/to/mobile.jpg" },
      ];

    //   const [togle,setTogle]=useState(true)
      const {topCategory}=useContext(my_context)
  return (
    <div className={`${topCategory?'block':'hidden  '}  text-gray-500 font-normal  bg-white  text-base block lg:absolute  z-50  w-full border border-solid border-gray-300 `}>
                
                {categories.map((category, index) => (
                     <button key={index}  className="  group xl:py-[7.2px] lg:py-[12.6px] px-4 border-b-2 z-50 w-full border-gray-200 font-semibold flex items-center ">
                     {/* this is for img or icon  */}
                     <span className="text-xl"></span> 
                     <span className='group-hover:text-red-600 duration-1000 transform'>{category.name}</span>
         
                 </button>
                  
                ))}
        </div>
  )
}

export default Categories

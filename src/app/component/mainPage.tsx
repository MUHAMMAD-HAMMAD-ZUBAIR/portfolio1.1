"use client"
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

// my components

import {Detail} from "./detail";
import { Sidebar } from "./sidebar";

// for animate on scroll library
const MainPage = () => {
//    use effect for AOS
    useEffect(() => {
        AOS.init({
          once: false,
        });
      }, []);
      
  return (
    <div className="flex overflow-hidden h-screen">
    {/*slider bar  */}
    <div className="w-1/5">
        <Sidebar/>
    </div>
    {/* main content */}
    <div className="w-full">
        <Detail/>
    </div>
   </div>
  )
}

export default MainPage
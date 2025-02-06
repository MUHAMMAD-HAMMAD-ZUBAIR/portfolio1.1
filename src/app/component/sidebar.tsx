import { FaDownload } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
export function Sidebar() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center p-3 " >
     {/* image */}
    <img data-aos="fade-down" src="/profile.jpg"alt="profile-picture" width={1000} height={1000}
    className="rounded-md"/>
    
     {/* name here */}
     <div className="mt-3">
      <h2 data-aos="fade-left" className="text-2xl text-center font-bold tracking-tight uppercase"> Muhammad Hammad Zubair</h2>
      <h2 data-aos="fade-right" className="text-md text-center font-semibold tracking-tight text-gray-700">Web Developer </h2>
      </div>
      {/* social media account */}
        <div className="grid grid-cols-3 gap-2">
        {/* linkedin */}
        <div className="mt-4">
            <Link href="https://www.linkedin.com/in/muhammad-hammad-zubair-4046082ba/" target="_blank" className="text-gray-600 hover:text-[#0762C8] "> 
        <FaLinkedin data-aos="fade-down" className="text-4xl text-gray-600" />
        </Link>
        </div>
        {/* github */}
        <div className="mt-4">
       <Link href="https://github.com/MUHAMMAD-HAMMAD-ZUBAIR/again-hackaton" target="_blank" className="text-gray-600 hover:text-[#6e5494] ">
       <FaGithub data-aos="fade-down" className="text-4xl text-gray-600" />
       </Link>
       </div>
        {/* vercel */}
        <div className="mt-4">
            <Link href="https://vercel.com/muhammad-hammad-zubairs-projects" target="_blank" className="text-gray-600 hover:text-[white] "> 
        <IoLogoVercel data-aos="fade-down" className="text-4xl text-gray-600" />
        </Link> 
        </div>
        </div>
      {/* download cv button*/}
      <Link href={'/cv/cv.not.original.pdf'} className="mt-4" target="_blank" >
      <Button data-aos="fade-up">
      <FaDownload data-aos="fade-up" className="mr-2 h-4 w-4" />Download CV 
    </Button>
    </Link>
      </div>
  )
}
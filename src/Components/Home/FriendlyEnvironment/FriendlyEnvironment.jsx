import pathImg from "../../../assets/FindYourPath.jpg";
import { FaEnvira } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos"; 
import { useEffect } from "react";

const DiscoverYourPath = () => {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className="w-11/12 mx-auto space-y-5 overflow-hidden">
     <div className="text-center mb-8">
     <h2  data-aos="fade-right" className=" font-bold text-4xl mb-4 text-[#DB494F]">
        Friendly Environment
      </h2>
      <p  data-aos="fade-left" className="text-[#7f853e]">Experience a welcoming and supportive atmosphere designed to inspire growth and confidence. Our platform fosters a friendly environment where you can explore opportunities, connect with experts, and receive guidance tailored to your unique journey.</p>
     </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[650px] object-cover max-w-full" src={pathImg} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold ">
            To help you find your own passions and values.
          </h2>
          <p>Our goal is to create a space where you feel comfortable and valued. In a friendly and approachable environment, we encourage open conversations and genuine support to help you make informed decisions and achieve your career aspirations.</p>

       <div className="grid md:grid-cols-2">
       <ul className="space-y-2">
          <div data-aos="fade-down-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Warm and welcoming environment.</span>
          </div>
          <div data-aos="fade-down-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Empathetic and supportive counselors.</span>
          </div>
          <div data-aos="fade-down-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Judgment-free career guidance.</span>
          </div>
          <div data-aos="fade-down-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Open and honest discussions.</span>
          </div>
          <div data-aos="fade-down-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Inclusive for all backgrounds.</span>
          </div>
        </ul>
           <ul className="space-y-2">
           <div data-aos="fade-up-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Tailored advice for personal growth.</span>
          </div>
           <div data-aos="fade-up-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Encouraging and motivating feedback.</span>
          </div>
           <div data-aos="fade-up-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Comfortable and interactive sessions.</span>
          </div>
           <div data-aos="fade-up-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Focused on building confidence.</span>
          </div>
           <div data-aos="fade-up-left" className="flex items-center gap-1">
          <FaEnvira className="text-[#DB494F]"/><span>Empowering you to make decisions.</span>
          </div>
           </ul>
       </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverYourPath;

import pic1 from "../../../assets/Slider1.jpg"
import pic2 from "../../../assets/Slider2.jpg"
import pic3 from "../../../assets/Slider3.jpg"
import pic4 from "../../../assets/Slider4.jpg"
import pic5 from "../../../assets/Slider5.jpg"
import "aos/dist/aos.css";
import AOS from "aos"; 
import { useEffect } from "react"

const Slider = () => {
    
    useEffect(()=>{
        AOS.init()
    },[])

    return (
<div className="w-11/12 mx-auto mt-4">
<div  className="text-center mb-8">
        <h1 data-aos="fade-right" className="text-4xl font-bold text-[#DB494F]">
          Discover Your Career Path
        </h1>
        <p className="text-[#7f853e] mt-2 text-lg">
          Explore personalized career guidance and expert resources to shape your future.
        </p>
      </div>
      {/* Slider Start */}
<div className="carousel rounded-box ">
  <div className="carousel-item border-r-2 border-b-2 relative">
    <img className="w-[350px]"
      src={pic1}
      alt="Burger" />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center p-4">
          <p className="text-[#DB162F] text-lg font-bold text-pretty mb-6">
            Discover Career Opportunities with Our Expert Counseling!
          </p>
        </div>
  </div>
  <div className="carousel-item border-r-2 border-b-2 relative">
    <img className="w-[350px]"
      src={pic2}
      alt="Burger" />
       <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center p-4">
          <p className="text-[#DB162F] text-lg font-bold text-pretty  mb-6">
            Personalized Resume Reviews for a Better Career Path.
          </p>
        </div>
  </div>
  <div className="carousel-item border-r-2 border-b-2 relative">
    <img className="w-[350px]"
      src={pic3}
      alt="Burger" />
       <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center p-4">
          <p className="text-[#DB162F] text-lg font-bold text-pretty mb-6">
            Attend Online Career Guidance Sessions Today!
          </p>
        </div>
  </div>
  <div className="carousel-item border-r-2 border-b-2 relative">
    <img className="w-[350px]"
      src={pic4}
      alt="Burger" />
       <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center p-4">
          <p className="text-[#DB162F] text-lg font-bold text-pretty mb-6">
            Group Workshops to Help You Choose the Right Career.
          </p>
        </div>
  </div>
  <div className="carousel-item border-r-2 border-b-2 relative">
    <img className="w-[350px]"
      src={pic5}
      alt="Burger" />
       <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center p-4">
          <p className="text-[#DB162F] text-lg font-bold text-pretty mb-6">
            Unlock Your Potential with Our Career Planning Experts.
          </p>
        </div>
  </div>
 
</div>
</div>
    );
};

export default Slider;
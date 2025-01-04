import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos"; 
import { useEffect } from "react";

const ServiceCard = ({service}) => {

  useEffect(()=>{
    AOS.init()
  },[])

    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="card bg-base-100 border border-gray-300">
        <figure className="px-10 pt-10">
          <img
            src={service.image}
            alt="Counselors"
            className="rounded-xl h-64 w-full object-cover" />
        </figure>
        <div className="card-body items-center text-center">
        <h4 className="text-xl font-bold text-[#7f853e]">{service.counselor}</h4>
          <h2 className="card-title text-[#7f853eb3]">Service:{service.serviceName}</h2>
          <p className="text-[#464a16e2] text-lg">{service.category} Counseling</p>
       
          <div className="card-actions">
            <Link to={`/service/${service.id}`} className="btn bg-[#DB494F] text-white">Learn More</Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;
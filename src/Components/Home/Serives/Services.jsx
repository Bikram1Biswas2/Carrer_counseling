import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useEffect } from "react";
import AOS from "aos"; 

const Services = () => {
  const services = useLoaderData();

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className="w-11/12 mx-auto overflow-hidden">
      <div className="text-center mb-8">
        <h1 data-aos="fade-right" className="text-4xl font-bold text-[#DB494F]">
          Explore Our Expert Career Services
        </h1>
        <p data-aos="fade-left" className="text-[#7f853e] mt-2 text-lg">
          From personalized counseling sessions to resume reviews, our
          comprehensive services are designed to help you achieve your
          professional goals with confidence and clarity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

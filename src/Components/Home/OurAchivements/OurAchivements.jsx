import { FaUsers } from "react-icons/fa";
import { GiLaurelsTrophy, GiLoveMystery, GiStarGate } from "react-icons/gi";
import AOS from "aos"; 
import { useEffect } from "react";

const OurAchievements = () => {
    useEffect(()=>{
        AOS.init()
      },[])
    
  return (
    <div>
      <div className="text-center space-y-3 mb-3">
        <h2 className=" text-4xl font-bold text-[#DB494F]">Our Achievements</h2>
        <p className="text-[#7f853e] text-lg font-semibold">
          Achievements can not come in one day..It takes time..So do HardWork
        </p>
      </div>
      <div className="bg-[#c4dad2a4] py-10 px-8">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between gap-6">
            <h2 data-aos="zoom-in-right" className="flex-1 text-3xl font-bold text-[#7f853e] text-center my-auto">
              Every Journey Starts With A First Step
            </h2>
            <p data-aos="zoom-in-left" className="flex-1 text-lg font-semibold text-[#474a26]">
              You have to take the initiative and start. By definition, the
              first step precedes all the other steps on the journey. Thus,
              don't make promises around a first step, start walking instead of
              talking. You may be running fast, but making haste is useless
              unless you are going in the right direction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <div data-aos="flip-left" className="flex items-center justify-center gap-2">
              <FaUsers className="w-12 h-20 text-[#EE4E4E]" />
              <div>
                <h2 className="font-bold text-2xl">
                  8500<span className="text-3xl text-[#EE4E4E]">+</span>
                </h2>
                <p>Happy Client</p>
              </div>
            </div>
            <div data-aos="flip-left" className="flex items-center justify-center gap-2">
              <GiStarGate className="w-12 h-20 text-[#EE4E4E]" />
              <div>
                <h2 className="font-bold text-3xl">
                  92<span className="text-2xl text-[#EE4E4E]">%</span>
                </h2>
                <p>Success Client</p>
              </div>
            </div>
            <div data-aos="flip-right" className="flex items-center justify-center gap-2">
              <GiLaurelsTrophy  className="w-12 h-20 text-[#EE4E4E]" />
              <div>
                <h2 className="font-bold text-3xl">
                  140<span className="text-3xl text-[#EE4E4E]">+</span>
                </h2>
                <p>Award Won</p>
              </div>
            </div>
            <div data-aos="flip-right" className="flex items-center justify-center gap-2">
            <GiLoveMystery  className="w-12 h-20 text-[#EE4E4E]" />
              <div>
                <h2 className="font-bold text-3xl">
                  24<span className="text-3xl text-[#EE4E4E]">+</span>
                </h2>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;

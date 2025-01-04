import { Helmet } from "react-helmet-async";


const Offers = () => {
    return (
        <div>
            <Helmet>
                <title>Career Compass | Offers</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-center mt-6 text-[#DB494F]">Offers For You</h2>
            <div className="card bg-[rgba(196,218,210,0.64)] text-primary-content w-1/3 mx-auto mt-16">
  <div className="card-body text-black text-center">
    <h2 className="text-2xl font-bold">Offers Only for first 50 Students</h2>
    <p className="text-lg font-semibold">Enroll Now As soon as Possible</p>
    <p className="text-xl font-semibold">Our Coupon Code</p>
    <h2 className="text-xl font-bold text-[#dc282e] bg-[#7f853e] p-3 w-fit mx-auto rounded-md">First50</h2>
    <p className="text-xl font-semibold">For first 50 students 60% OFF</p>
    <div className=" text-center">

      <button className="btn bg-[#DB494F] text-white font-bold">Enroll Now</button>
    </div>
  </div>
</div>

   <div className="text-center mt-5">
    <h2 className="text-3xl font-bold">For Details Contact Us Now</h2>
   <div className="text-lg font-semibold">
   <p>ph Number: 8785587415</p>
   <p>Email: careercompass123@gmail.com</p>
   </div>
   </div>
        </div>
    );
};

export default Offers;
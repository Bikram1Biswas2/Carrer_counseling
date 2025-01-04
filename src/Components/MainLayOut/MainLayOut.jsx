import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainLayOut = () => {
  return (
    <div className="">
      <section>
        <div className="bg-[#d7d8c6]">
          <header className="w-11/12 mx-auto ">
            <Navbar></Navbar>
          </header>
        </div>
      </section>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;

import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/67_human_logo.jpg"
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Navbar = () => {
  const {user,logout} = useContext(AuthContext)



    
    const Items = <>
         <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
         <li><NavLink to='/myProfile' className={({ isActive }) => (isActive ? "active" : "")}>My profile</NavLink></li>
         <li><NavLink to='/offers' className={({ isActive }) => (isActive ? "active" : "")}>Offers</NavLink></li>
    </>

    return (
        <div className="navbar p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {Items}
            </ul>
          </div>
         <div className="flex items-center justify-center">
            <img className="w-10 rounded-full object-cover" src={navLogo} alt="" />
         <a className="btn btn-ghost text-2xl font-bold">Career Compass</a>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2">
           {Items}
          </ul>
        </div>
        <div className="navbar-end">
        {user ? (
          <>
            {user.photoURL && (
             <div className="avatar">
             <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 mr-2">
               <img src={user.photoURL} />
             </div>
           </div>
            )}
            <button onClick={logout}  className="btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
        </div>
      </div>
    );
};

export default Navbar;
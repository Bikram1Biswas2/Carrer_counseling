import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Login = () => {
  const [email,setEmail]= useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const {setUser,signInUser,googleLogin} = useContext(AuthContext)
  

  const from = location?.state?.from?.pathname || "/"

  const handleLogin = e => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value 
    console.log(email,password);

    if (!email || !password) {
      toast.error("Both email and password are required!");
      return;
    }

    signInUser(email,password)
    .then((result)=>{
      setUser(result.user)
      navigate(from)
      e.target.reset()
      toast.success("Login Successfully")
    })
    .catch((error)=>{
      console.log(error.message);
      toast.error("Login Failed,please check credential")
    })
  }

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result =>{
      setUser(result.user)
      navigate(from)
      toast.success("Login Successfully")
    })
    .catch((error)=>{
      console.log(error.message);
      toast.error("Login Failed,Try again")
    })
  }

    return (
      <div className="w-7/12 mx-auto mt-10">
        <Helmet>
          <title>Career Compass | Login</title>
        </Helmet>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"
             value={email} 
             name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <Link to="/forgotPassword" 
              state={{email}} 
              href="#" 
              className="label-text-alt link link-hover">Forgot password?</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#DB494F] text-white text-lg font-bold">Login Now</button>
          </div>
        </form>
        <p className="text-center p-4">New to this website? <Link to="/register" className="text-red-600">Register</Link> First</p>

        <div onClick={handleGoogleLogin} className="text-center p-6">
          <button  className="btn text-lg font-semibold text-[#DB494F] bg-[#d7d8c6]">Google Login <FaGoogle /></button>
        </div>
      </div>
      </div>
    );
};

export default Login;
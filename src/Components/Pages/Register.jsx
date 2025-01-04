import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate()
  const {setUser,createUser,updateUser,googleLogin} = useContext(AuthContext)
 const [errorMessage,setErrorMessage] = useState('')
 const [showPassword,setShowPassword] = useState(false)

      const from = location?.state?.from?.pathname || "/"
    const handleRegister = e =>{
        e.preventDefault()
       const name = e.target.name.value
       const photo = e.target.photo.value
       const email = e.target.email.value 
       const password = e.target.password.value
           
       setErrorMessage('');

       const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

       if(!passwordRegex.test(password)){
        toast.error("Must have an Uppercase letter in the password Must have a Lowercase letter in the password  Length must be at least 6 character")
       setErrorMessage('Must have an Uppercase letter in the password Must have a Lowercase letter in the password  Length must be at least 6 character')
       return;
       }
      
       createUser(email,password)
       .then((result)=>{
        setUser(result.user)
        updateUser({displayName:name,photoURL:photo})
        .then(()=>{
          navigate("/")
          toast.success("Register Successfully")
        })
        .catch(err=>{
          setErrorMessage(err.message);
          toast.error("Register Failed")
        })
        
       })
       .catch((error)=>{
        setErrorMessage(error.message);
        toast.error("Register failed")
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
            <title>Career Compass | Register</title>
          </Helmet>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={showPassword ? "text" : "password"}
            name="password" 
            placeholder="password" className="input input-bordered" required />
              <button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute bottom-4 right-4">
                 {showPassword ? <FaEyeSlash />: <FaEye />}
                 </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#DB494F] text-white text-lg font-bold">Register Now</button>
          </div>
        </form>
        <div onClick={handleGoogleLogin} className="text-center p-6">
          <button  className="btn text-lg font-semibold text-[#DB494F] bg-[#d7d8c6]">Google Login <FaGoogle /></button>
        </div>
        <p className="text-center p-4">Already Registered? <Link to="/login" className="text-green-600">Login</Link> Now</p>
        {
          errorMessage && <p className="text-red-600">{errorMessage}</p>
        }
      </div>
      </div>
    );
};

export default Register;
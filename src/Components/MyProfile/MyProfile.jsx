import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user,setUser,updateUser } = useContext(AuthContext);
  

  const updatedProfile = e => {
    e.preventDefault()

    const name = e.target.name.value
    const photo = e.target.photo.value

    updateUser({ displayName: name, photoURL: photo })
    .then(() => {
      setUser((prevUser) => ({
        ...prevUser, // Retain all existing properties, including email
        displayName: name,
        photoURL: photo,
      }));
      toast.success("Profile updated successfully!");
    })
    .catch((err) => {
      console.error("Error updating profile:", err.message);
      toast.error("Failed to update profile.");
    });
  }

  return (
    <div>
        <Helmet>
            <title>Career Compass | My Profile</title>
        </Helmet>
      {user && (
        <div className="text-center flex items-center justify-center gap-4 mt-6">
          <div className="border-2 rounded-full p-3">
            <img className="w-12 " src={user.photoURL} alt="" />
          </div>
          <div className="space-y-2 ">
            <h2 className="text-xl font-bold">Name:{user.displayName}</h2>
            <p className="text-lg font-semibold">Email:{user.email}</p>
          </div>
        </div>
      )}


      <div className="w-1/3 mx-auto mt-8">
      <h2 className="text-center mb-3 font-bold text-xl">Update Your Profile here</h2>
        <form onSubmit={updatedProfile} className="border rounded-lg p-5" action="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="text-center mt-3">
          <button className="btn bg-[#DB494F] text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;

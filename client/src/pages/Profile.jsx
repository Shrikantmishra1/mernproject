// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.user.user);

  return (
    <div className="p-3 max-w-lg mx-auto  ">
      <h1 className="text-3xl  font-sans text-center shadow-silver my-7">
        Profile
      </h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser ? currentUser.profilePicture : ""}
          alt="profile"
          className="h-24 w-24 self-center
        cursor-pointer rounded-full object-cover mt-2  "
        />
        <input
          className="bg-one rounded-lg p-3 shadow-inner w-50  mt-2
          focus:outline-none focus:ring focus:border-blue-500
          
          
          "
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
        />
         <input
          className="bg-one rounded-lg p-3 shadow-inner w-50  mt-2
          focus:outline-none focus:ring focus:border-blue-500
          
          
          "
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
        />
         <input
          className="bg-one rounded-lg p-3 shadow-inner w-50  mt-2
          focus:outline-none focus:ring focus:border-blue-500
     
          "
          type="passowrd"
          id="password"
          placeholder="Password"
        />
        <button  className='bg-bubble-gum shadow-3lg text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >Update</button>
       
      
      </form>
      <div className="flex justify-between  mt-5">
      <span className="text-six drop-shadow-lg cursor-pointer">
          Delete Account
        </span>
        <span className="text-six drop-shadow-lg cursor-pointer ">
          Sign out
        </span>
      </div>
      
     
    </div>
  );
};

export default Profile;

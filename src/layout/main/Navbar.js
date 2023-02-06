import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { logout } from "../../pages/features/auth/authSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { email, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">JobBox</h1>
      <ul className="hidden md:flex justify-around items-center">
        <li className="p-4">
          <Link to={"/"}>Home</Link>
        </li>

        {email && role && (
          <li className="p-4">
            <button className=" ">
              <Link to={"/dashboard"}>Dashboard</Link>
            </button>
          </li>
        )}
        {email && !role && (
          <li className="p-4">
            <button className=" ">
              <Link to={"/register"}>Register</Link>
            </button>
          </li>
        )}
        {email ? (
          <button onClick={handleSignOut} className="btn btn-sm">
            Logout
          </button>
        ) : (
          <li className="p-4">
            <Link className="btn btn-sm" to={"/login"}>
              Login
            </Link>
          </li>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r bg-gray-300 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">JobBox</h1>
        <li className="p-4">
          <Link to={"/"}>Home</Link>
        </li>
        {email ? (
          <button onClick={handleSignOut} className="btn btn-sm">
            Logout
          </button>
        ) : (
          <li className="p-4">
            <Link to={"/login"}>Login</Link>
          </li>
        )}
        {email && role && (
          <li className="p-4">
            <button className=" ">
              <Link to={"/dashboard"}>Dashboard</Link>
            </button>
          </li>
        )}
        {email && !role && (
          <li className="p-4">
            <button className=" ">
              <Link to={"/register"}>Register</Link>
            </button>
          </li>
        )}
        <li className="p-4">
          <Link to={"/dashboard"}>Get Started</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

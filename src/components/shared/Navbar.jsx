import React from "react";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 gap-2 p-2 shadow"
            >
              <li>
                <NavLink to={"/"} className={({isActive})=>isActive?'text-green-500 border border-green-500 hover:bg-transparent':""}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/books"} className={({isActive})=>isActive?'text-green-500 border border-green-500 hover:bg-transparent':""}>Listed Books</NavLink>
              </li>
              <li>
                <NavLink to={"/andythin"}className={({isActive})=>isActive?'text-green-500 border border-green-500 hover:bg-transparent':""} >Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <a className="font-bold text-3xl">Book Vide</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-lg font-semibold">
            <li>
              <NavLink to={"/"} className={({isActive})=>isActive?'text-green-500 border border-green-500 hover:bg-transparent':""}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/books"} className={({isActive})=>isActive?'text-green-500 border border-green-500 hover:bg-transparent':""}>Listed Books</NavLink>
            </li>
            <li>
              <NavLink to={"/andythin"} className={({isActive})=>isActive?'text-green-500 border border-green-500 hover:bg-transparent':""}>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <button className="btn bg-[#23BE0A] text-white text-lg font-semibold rounded-sm border-none">Sign in</button>
          <button className="btn bg-[#59C6D2] text-white text-lg font-semibold rounded-sm border-none">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


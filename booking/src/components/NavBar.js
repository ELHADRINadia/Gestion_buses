import React from "react";

function NavBar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-indigo-800 p-6 fixed w-full z-50">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
      <i class="fa fa-bus" aria-hidden="true"></i>
        <span class="font-semibold text-xl tracking-tight">Suprator</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto " id="navbar">
        <div class="text-sm lg:flex-grow  text-center lg:text-right">
          <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-100 mr-8 text-lg">
          Home
          </a>
          <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-100 mr-8 text-lg">
          About Us
          </a>
          <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-100 mr-8 text-lg">
          Service
          </a>
          <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-100 text-lg">
          Contact US
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="/Login" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-100 mr-8 text-lg">
          Login
          </a>
          <a href="/Register" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-100 text-lg">
          Register
          </a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
import React from "react";

function NavBar() {
  return (
<div x-data="{ cartOpen: false , isOpen: false }" class="bg-white">
    <header> 
    <nav
      class="bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto"
    >
      <div>
        <h2 class="text-3xl font-bold">
          <a href="/">My <span class="text-blue-600">B</span>rand</a>
        </h2>
      </div>
      <div class="mt-5 md:mt-0">
        <ul class="flex flex-col md:flex-row md:space-x-5 w-full items-center">
          <li>
            <a 
              class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
              >Products</a
            >
          </li>
          <li>
            <a
              class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
              >Company</a
            >
          </li>
          <li>
            <a
              class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
              >Partners</a
            >
          </li>
          <li>
            <a
              class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
              >News</a
            >
          </li>
          <li>
            <a
              class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </nav>
    </header>
</div>
  );
}
export default NavBar;
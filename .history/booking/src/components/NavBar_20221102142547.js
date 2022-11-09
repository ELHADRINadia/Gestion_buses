import React from "react";

function NavBar() {
  return (
<div x-data="{ cartOpen: false , isOpen: false }" class="bg-white">
    <header> 
        <div class="container mx-auto px-6 py-3">
            
            <nav className="isOpen ? '' : 'hidden'" class="sm:flex sm:justify-center sm:items-center mt-4">
                <div class="flex flex-col sm:flex-row">
                    <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/">Home</a>
                    <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/">Shop</a>
                    <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/">Categories</a>
                    <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0 w-15 h-10" href="/README.md">Contact</a>
                    <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0 w-13 h-10" href="/">About</a>
                </div>
            </nav>
           </div>
    </header>
</div>
  );
}
export default NavBar;
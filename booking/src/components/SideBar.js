import React from "react";

function SideBar() {
  return (
    <div className='h-screen'>
    <div class="flex flex-col w-64 h-screen py-8 bg-[#31087B] border-r dark:bg-gray-900 dark:border-gray-700">
    <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Admin</h2>

    <div class="flex flex-col items-center mt-6 -mx-2">
        <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">ELHADRI Nadia</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">nadia@example.com</p>
    </div>
     <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <a  className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200" >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Dashboard</span>
            </a>

            <a
            href="/displayBuses"
             class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                

                <span class="mx-4 font-medium">Buses</span>
            </a>

           
          <a 
            href="/DisplayUsers"
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
            
                <span class="mx-4 font-medium">Users</span>
            </a>
            <a 
            href="/"
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                <span class="mx-4 font-medium">Reservation</span>
            </a>
        </nav>
    </div>
</div>
</div>
  );
  }

export default SideBar;


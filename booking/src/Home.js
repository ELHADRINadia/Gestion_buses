import React from 'react';
import Footer from './components/Footer'
// import DisplayTravels from '../components/Travel/DisplayTravels';
import NavBar from './components/NavBar';

function Home()  {
  return (
    <div>
     <div className='flex'>
    <NavBar/>
    </div>
   
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 pt-8 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Booking</span><br class="d-none"/>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="/Login" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Login
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a href="/Register" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </main>
    <div class="">
      <div class="text-center">
        <h1 class="text-5xl pt-10 pb-5 text-black">About Us</h1>
      </div>
      <div class="container mx-auto flex flex-wrap mb-8 justify-center">
        <div class="px-6 py-4">
          <p class="text-black text-xl text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-5xl">Service</h1>
    </div>
    <div class="container mx-auto flex flex-wrap my-8 justify-center">
      <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div class="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card bg-indigo-800  hover:bg-indigo-900">
          <div class="px-6 py-4 text-center text-white">
            <i class="fa fa-cog text-center text-3xl "></i>
            <h1 class="font-bold mb-2 text-center text-2xl text-white">Service 1</h1>
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card bg-indigo-800  hover:bg-indigo-900">
          <div class="px-6 py-4 text-center text-white">
            <i class="fa fa-cog text-3xl"></i>
            <h1 class="font-bold mb-2 text-center text-2xl text-white">Service 2</h1>
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card bg-indigo-800  hover:bg-indigo-900">
          <div class="px-6 py-4 text-center text-white">
            <i class="fa fa-cog text-white text-3xl"></i>
            <h1 class="font-bold mb-2 text-center text-2xl text-white">Service 3</h1>
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-5xl pt-10 pb-10">BOOK NOW</h1>
    </div>
    
    <div class="container mx-auto flex flex-wrap my-8 justify-center">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card shadow-xl transition duration-700 ease-in-out">
          <img class="w-full" src="https://tse2.mm.bing.net/th?id=OIP.wANVxwcLGhl1azkJOsLsxwHaE7&pid=Api&P=0" alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">Marrackech</div>
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4 text-center">
            <span class="inline-block bg-indigo-800 rounded-full px-3 py-1 text-sm font-semibold  mr-2 text-white">#Devloper</span>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card">
          <img class="w-full" src="https://tse2.mm.bing.net/th?id=OIP.-Rn17K-Mnqv_-Rqy1QkcFwHaFj&pid=Api&P=0" alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">Ozoud</div>
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4 text-center">
            <span class="inline-block bg-indigo-800 rounded-full px-3 py-1 text-sm font-semibold  mr-2 text-white">#photography</span>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer rounded card">
          <img class="w-full" src="https://tse4.mm.bing.net/th?id=OIP.y-uBbFEsu9J_bYu7-nIfRQHaDH&pid=Api&P=0" alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">Ifrane</div>
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4 text-center">
            <span class="inline-block bg-indigo-800 rounded-full px-3 py-1 text-sm font-semibold  mr-2 text-white">#travel</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-5xl pt-10 pb-10">Contact Us</h1>
    </div>
    <div class=" container mx-auto flex flex-wrap mb-16 justify-center mt-8 overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="p-6 mr-2 bg-indigo-800 sm:rounded-lg">
          <h1 class="text-4xl sm:text-5xl text-white dark:text-white font-extrabold tracking-tight">
            Get in touch
          </h1>
          <p class="text-normal text-lg sm:text-2xl font-medium text-white dark:text-gray-400 mt-2">
            Fill in the form to start a conversation
          </p>
          <div class="flex items-center mt-8 text-white dark:text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <div class="ml-4 text-md tracking-wide font-semibold w-40">
              Acme Inc, Street, State,
              Postal Code
            </div>
          </div>
          <div class="flex items-center mt-4 text-white dark:text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <div class="ml-4 text-md tracking-wide font-semibold w-40">
              +44 1234567890
            </div>
          </div>
          <div class="flex items-center mt-2 text-white dark:text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <div class="ml-4 text-md tracking-wide font-semibold w-40">
              info@acme.org
            </div>
          </div>
          <ul class="social-icons">
            <li><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
            <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
            <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
            <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
            <li><i class="fa fa-pinterest-square" aria-hidden="true"></i></li>
          </ul>
        </div>
        <form class="p-6 flex flex-col justify-center">
          <div class="flex flex-col">
            <label for="name" class="hidden">Full Name</label>
            <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" required />
          </div>
          <div class="flex flex-col mt-2">
            <label for="email" class="hidden">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" required />
          </div>
          <div class="flex flex-col mt-2">
            <label for="tel" class="hidden">Number</label>
            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" required />
          </div>
          <div class="flex flex-col mt-2">
            <label for="tel" class="hidden">Message</label>
            <textarea type="text" name="Mes" id="Mes" placeholder="Message" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" rows="3" required></textarea>
          </div>
          <button type="submit" class="md:w-32 bg-indigo-800 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
          Submit
          </button>
        </form>
      </div>
    </div>
    <div>
    <Footer/>
    </div>
    </div> 
  ); 
}

export default Home

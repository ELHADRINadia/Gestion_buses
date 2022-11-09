import { data } from 'autoprefixer';
import {React, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';



function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(); 
   

   
    async function RegisterUser(event){
        const newData = new FormData();
        newData.append("name", data.name);
        newData.append("email", data.email);
        newData.append("password", data.password)

    const response = await  fetch('http://localhost:6000/api/users/auth/signup', {
        method:'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          "name": data.name,
          "email": data.email,
          "password": data.password
        }),
      })
      
    }
  return (
  <>
    <div><Toaster/></div>
<div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
  <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 class="font-bold text-center text-2xl mb-5">Your Logo</h1>  
    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <form onSubmit={ e => {
        e.preventDefault();
        RegisterUser();
      }}
       class="px-5 py-7">
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <button type="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Register</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
      </form>
        <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <button type='submit' class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span class="inline-block ml-1">Back to your-app.com</span>
            </button>
          </div>
        </div>
      </div>
  </div>
</div>
</>
);
}
export default Register;
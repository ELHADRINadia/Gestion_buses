import React from 'react';
// import AddTravel from '../components/Travel/AddTravel';
// import DisplayTravels from '../components/Travel/DisplayTravels';
import SideBar from './components/SideBar';

function Home()  {
  return (
    <div className='flex'>
     <div className='h-screen'>
    <SideBar/>
    </div>
    <div className='flex justify-between w-4/5'>
    {/* <DisplayTravels/>
    <AddTravel/> */}
    </div>
    </div>
  ); 
}

export default Home

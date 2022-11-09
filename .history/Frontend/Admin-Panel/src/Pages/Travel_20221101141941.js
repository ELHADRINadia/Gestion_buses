import React from 'react';
import AddTravel from '../components/Travel/AddTravel';
import DisplayTravels from '../components/Travel/DisplayTravels';
import SideBar from '../components/SideBar';


const Travel = () => {
  return (
    <div className='flex'>
     <div className='h-screen'>
    <SideBar/>
    </div>
    <div className='flex justify-between items-center w-full'>
    <DisplayTravels/>
    <AddTravel/>
    </div>
    </div>
  )
}

export default Travel

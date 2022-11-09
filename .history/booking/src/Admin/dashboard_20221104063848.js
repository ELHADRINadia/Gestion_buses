import React from 'react';
import AddTravel from '../components/dashboa/AddTravel';
import DisplayTravels from '../components/Travel/DisplayTravels';
import SideBar from '../components/SideBar';


const Travel = () => {
  return (
    <div className='flex'>
     <div className='h-screen'>
    <SideBar/>
    </div>
    <div className='flex justify-between w-4/5'>
    <DisplayTravels/>
    <AddTravel/>
    </div>
    </div>
  )
}

export default Travel

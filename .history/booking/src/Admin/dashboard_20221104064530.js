import React from 'react';
import Add from '../components/dashboard/Add';
import DisplayTravels from '../components/dashboard/DisplayTravels';
import SideBar from '../components/SideBar';


const dashboard = () => {
  return (
    <div className='flex'>
     <div className='h-screen'>
    <SideBar/>
    </div>
    <div className='flex justify-between w-4/5'>
    <DisplayTravels/>
    <Add/>
    </div>
    </div>
  )
}

export default dashboard

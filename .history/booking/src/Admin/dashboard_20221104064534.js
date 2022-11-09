import React from 'react';
import AddBooking from '../components/dashboard/AddBooking';
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
    <AddBooking/>
    </div>
    </div>
  )
}

export default dashboard

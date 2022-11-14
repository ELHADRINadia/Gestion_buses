import React from 'react';
// import AddBooking from '../Admin/booking/AddBooking';
// import Displaybuses from '../Admin/bus/DisplayBuses';
import SideBar from '../components/SideBar';
// import DisplayBooking from '../Admin/booking/DisplayBooking';
// import DisplayUsers from '../Admin/users/DisplayUsers';

const dashboard = () => {
  return (
    <div className='flex'>
     
    
     <SideBar/>
    <div className='flex justify-between w-4/5'>
    {/* <AddBooking /> */}
    {/* <Displaybuses /> */}
    </div>
    </div>
  )
}

export default dashboard

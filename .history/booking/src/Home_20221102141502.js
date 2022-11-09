import React from 'react';
// import AddTravel from '../components/Travel/AddTravel';
// import DisplayTravels from '../components/Travel/DisplayTravels';
import NavBar from './components/NavBar';

function Home()  {
  return (
    <div className='flex'>
     <div className='h-screen'>
    <Side/>
    </div>
    <div className='flex justify-between w-4/5'>
    {/* <DisplayTravels/>
    <AddTravel/> */}
    </div>
    </div>
  ); 
}

export default Home

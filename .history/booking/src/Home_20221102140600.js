import React from 'react';
// import AddTravel from '../components/Travel/AddTravel';
// import DisplayTravels from '../components/Travel/DisplayTravels';
import NavBar from '../components/NavBar';


const Travel = () => {
  return (
    <div className='flex'>
     <div className='h-screen'>
    <NavBar/>
    </div>
    <div className='flex justify-between w-4/5'>
    <DisplayTravels/>
    <AddTravel/>
    </div>
    </div>
  )
}

export default Home

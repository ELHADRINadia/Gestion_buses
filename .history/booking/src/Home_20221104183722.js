import React from 'react';
import Footer from './components/Footer';
// import AddTravel from '../components/Travel/AddTravel';
// import DisplayTravels from '../components/Travel/DisplayTravels';
import NavBar from './components/NavBar';

function Home()  {
  return (
    <div>
     <div className='h-screen'>
    <NavBar/>
    <Footer/>
    </div>
    
    </div>
  ); 
}

export default Home
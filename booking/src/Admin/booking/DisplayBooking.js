import React from 'react'
import SideBar from '../../components/SideBar'
import EnhancedTable from '../../components/Table'

const DisplayBooking = () => {
  return (
    <div className='flex alignItems-center justify-Content-center'>
    <div > 
         <SideBar />
   </div>
    <div >   
    <EnhancedTable />
    </div> 
    </div>

  )
}

export default DisplayBooking

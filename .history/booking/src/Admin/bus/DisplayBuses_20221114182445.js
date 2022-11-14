import React, { useState } from 'react'
import SideBar from '../../components/SideBar'
import AddBus from './AddBus';
import EnhancedTableBus from '../../components/tableBuses'

const DisplayBuses = () => {
  const [isCreate,setIsCreate] = useState(false)


  return (
    <div className='flex alignItems-center justify-Content-center'>
    <div > 
         <SideBar />
   </div>
   <br /> <br /> <br />
    <div >   
    <AddBus setIsCreate={setIsCreate} />
    </div> 
    <div className='absolute top-1/3 left-1/3' >   
    <EnhancedTableBus />
    </div> 
    </div>

  )
}

export default DisplayBuses

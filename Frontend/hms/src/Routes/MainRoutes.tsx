import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Header from '../Components/Header/Header'

const MainRoutes = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='w-full'>
            <Header />
        </div>
        
    </div>
  )
}

export default MainRoutes 
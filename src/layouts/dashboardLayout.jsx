import React from 'react'
import { Outlet } from 'react-router'


const MainLayout = () => {
  return (
    <div>
       <nav className="bg-gray-800 w-full h-full">
       <div class="flex items-center  p-14">

       <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" >Dashboard</a>

     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

   <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

          </div>
      </nav>
    </div>
  )
}

export default MainLayout

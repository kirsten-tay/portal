import React from 'react'
import { Outlet } from 'react-router'
import Add from './../components/add'
import {BellIcon, ChevronDownIcon}from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import Profilebutton from './../components/profilebutton'
import Portal from '../components/Portal';



      

const dashboardLayout = () => {
  return (
    <div>
       <nav className="bg-gray-800 w-full h-full">
       <div class="flex items-center  h-16  justify-between  ">
         <div>

       <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" >Dashboard</a>

     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

   <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
</div>

          <div class="flex space-x-3">
          <div class="hidden md:block">
          <div class=" flex items-center space-x-3 ">
             <Add/>
            <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span  class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6 text-white" />
            </button>
            </div>
            </div>
           

            <div class="relative inline-block text-left">
            <div className="flex items-center">
            <Profilebutton type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true"/>
          <ChevronDownIcon className="h-3 w-3 text-white"/>
               </div>
            <div class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-blue-500" role="menuitem" tabindex="-1" id="menu-item-0">Profile </a>
           <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:text-blue-500" role="menuitem" tabindex="-1" id="menu-item-1">settings</a>
           <form method="POST" action="#" role="none">
        <Link to="/" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-blue-500" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</Link>
      </form>
         </div>
        </div>
           </div>
            
            </div>
          
</div>
      </nav>
      <div >
       <div class="flex  items-center  origin-left justify-between bg-slate-600  ">


 
    <Outlet/>
</div>
    </div>
      </div>


  
  )

}

export default dashboardLayout;

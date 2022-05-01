import React from 'react'
import { Outlet } from 'react-router'
import Add from './../components/add'
import {BellIcon}from '@heroicons/react/outline'
import { ProSidebar, Menu,MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
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

          <div class="flex">
          <div class="hidden md:block">
          <div class=" flex items-center ">
             <Add/>
            <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span  class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" />
            </button>
            </div>
            </div>
           

            <div class=" relative">    
          
            <SubMenu icon={<Profilebutton />}>

              <Menu class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
             
                <MenuItem class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</MenuItem>

                <MenuItem class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</MenuItem>

                <MenuItem class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</MenuItem>
              </Menu>
              </SubMenu>

              </div>
            
            </div>
          
</div>
    <Outlet/>
      </nav>
      <div >
       <div class="flex items-center  justify-between  ">
      <ProSidebar className="flex h-full " >
      <Menu iconShape="square" className="flex space-y-5" >
      <MenuItem icon={<BellIcon/>}>Dashboard</MenuItem>
      <MenuItem icon={<Portal/>}/>
      <MenuItem></MenuItem>
  </Menu>
  </ProSidebar>
  </div>
</div>
      </div>


  
  )

}

export default dashboardLayout;

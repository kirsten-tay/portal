import React from 'react'
import {PlusSmIcon} from '@heroicons/react/outline'

const add = () => {
  return (
    <div>
      <a href="/new" class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium  p-2 shadow-sm">
        New
        <PlusSmIcon className="text-white h-5 w-5"/>
      </a>
    </div>
  )
}

export default add;

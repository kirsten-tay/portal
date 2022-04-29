import React from 'react'
import {PlusSmIcon} from '@heroicons/react/outline'

const add = () => {
  return (
    <div>
      <a href="/new" class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
        <PlusSmIcon/>
        New
      </a>
    </div>
  )
}

export default add;

import React from 'react'
import { PlusSmIcon} from '@heroicons/react/solid'

const Portal = () => {
  return (
    <div>
                      <button type="button" class="max-w-full bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <PlusSmIcon className="text-white h-14 w-14"/>
            </button>
    </div>
  )
}

export default Portal

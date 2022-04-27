import React from 'react'
import { Outlet } from 'react-router'

const AuthenticationLayout = () => {
    return (
        <div className="flex  h-screen justify-center max-w-full bg-slate-600 justify-center py-12 px-4" >
            <div className="border-2 text-center h-auto w-auto px-11 bg-white  w-auto rounded-md">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthenticationLayout

import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'


const Portal = () => {
    return (
        <div className="h-full max-w-full flex items-center bg-slate-600 justify-center py-12 px-4" >
            <div className="flex  max-w-full h-full justify-center   ">
                <div className="border-2 m-20 p-20 bg-white space-y-5 w-auto rounded-md">
                    <h2 className="font-medium text-5xl ">portal</h2>
                    <div>
                        <h2 className="font-medium text-2xl"> Sign into your Account</h2>
                        <p class="mt-2 text-center text-sm text-gray-600"> Or
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Register</a></p>
                    </div>
                    <form >
                        <div className="space-y-5">
                            <div >
                                <label for="Email" class="flex justify-begin block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" placeholder="example@email.com" className="w-full  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  rounded-md" />
                            </div>

                            <div>
                                <label for="Password" class="flex justify-begin block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" name="Password" id="Password" placeholder="***********" className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  rounded-md" />
                            </div>
                        </div>

                        <div class=" flex items-center space-x-20  space-y-5">
                            <div class="flex items-center ">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4  focus:ring-indigo-500 border-gray-300 rounded" />
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                            </div>

                            <div class="text-sm">
                                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                            </div>
                        </div>

                        <div>
                            <button className="flex px-11 py-3 relative w-full justify-center border-o outline-none bg-indigo-600 font-medium p-2 text-white rounded-md my-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 absolute left-2 inset-y-3 flex items-center" />
                                Login

                            </button>
                        </div>


                    </form>
                </div>


            </div>
        </div>
    )
}

export default Portal;
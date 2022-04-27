import { LockClosedIcon } from '@heroicons/react/solid';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Input from '../../components/Input';



const Register = () => {
    const [ Name,setName,] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <h2 className=" font-medium text-5xl ">portal</h2>
            <div>
                <h2 className="font-medium text-2xl"> Sign up for a new Account</h2>
                <p class="mt-2  text-sm text-gray-600"> Or
                    <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-500"> Sign In</Link></p>
            </div>
            <form  class="space-y-5">
                <div className="space-y-5">
                    <Input label="Name" onChange={setName} type="Name" placeholder="Emmanuel" />
                    <Input label="Email" onChange={setEmail} type="email" placeholder="example@email.com" />
                    <Input label="Password" type="password" placeholder="*********"/>
                    <Input label="Confirm Password" type="password" placeholder="*********"/>
                    
                </div>

                <div class=" flex items-center space-x-20  ">
                    
                        <Input label="subscribe to recieve news and updates in your mail "  type="checkbox" class="h-4 w-4  focus:ring-indigo-500 border-gray-300 block text-sm text-gray-900 rounded" />
                    <div class="text-sm w-full">
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
        </>

    )
}

export default Register;
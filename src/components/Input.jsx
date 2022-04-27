import React from 'react'

const Input = ({ label, name, onChange, type = "text", ...rest }) => {
    return (
        <>
            <div >
                <label for="Email" class="flex justify-begin block text-sm font-medium text-gray-700">{label}</label>
                <input type={type} name={name} onChange={e => onChange(e.target.value)} id="email" className="w-full  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  rounded-md"
                    {...rest} />
            </div>
        </>
    )
}

export default Input

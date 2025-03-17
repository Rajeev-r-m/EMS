import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-end bg-gray-200 p-5 border-b-1'>
            <h1 className=' text-2xl'>Hello <br /> <span className='font-semibold text-3xl'>Rajeev</span></h1>
            <button className='border border-amber-500 p-1 bg-amber-300' >Login</button>
        </div>
    )
}

export default Header

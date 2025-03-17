import React from 'react'

const Createtask = () => {
  return (
    <div>
    <form className='flex align-center justify-center flex-col w-1/2 mx-auto bg-white p-6 rounded-lg shadow-md'>
        <h3 className='text-lg font-semibold mb-2'>Task Title</h3>
        <input type="text" placeholder='Enter task' className='mb-4 p-2 border border-gray-300 rounded' />
        <h3 className='text-lg font-semibold mb-2'>Description</h3>
        <textarea name="" id="" className='mb-4 p-2 border border-gray-300 rounded'></textarea>
        <h3 className='text-lg font-semibold mb-2'>Date</h3>
        <input type="date" className='mb-4 p-2 border border-gray-300 rounded' />
        <h3 className='text-lg font-semibold mb-2'>Assign to</h3>
        <input type="text" placeholder='Emp name' className='mb-4 p-2 border border-gray-300 rounded' />
        <h3 className='text-lg font-semibold mb-2'>Category</h3>
        <input type="text" placeholder='Design/Dev/Test' className='mb-4 p-2 border border-gray-300 rounded' />
        <button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Create Task</button>
    </form>
</div>
  )
}

export default Createtask

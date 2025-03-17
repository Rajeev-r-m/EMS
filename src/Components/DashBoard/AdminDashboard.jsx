import React from 'react'
import Header from '../Other/Header'
import Createtask from '../Other/Createtask'
import Alltask from '../Other/Alltask'

const AdminDashboard = () => {
    return (
        <div className='p-10'>
            <Header />
            <Createtask />
            <Alltask />
        </div>
    )
}

export default AdminDashboard

import React from 'react';
import Header from '../Other/Header';
import TaskNum from '../Other/TaskNum';
import TaskList from '../TaskList/TaskList';
const EmployeeDashboard = () => {
    return (
        <div className='p-10'>
            < Header />
            <TaskNum/>
            <TaskList/>
        </div>
    );
};

export default EmployeeDashboard;
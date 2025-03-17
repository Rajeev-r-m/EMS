import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gray-200'>
            <div>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='border border-primary p-5 m-5 flex flex-col items-center bg-blue-100'>
                    <input
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)}
                        type="email" placeholder='enter email' className='border p-2 mb-4' required />
                    <input
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)}
                        type="password" placeholder='enter password' className='border p-2' required minLength="6" />
                    <button type="submit" className='bg-blue-500 text-white p-2 mt-4'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
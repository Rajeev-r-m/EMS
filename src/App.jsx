import React, { useState } from 'react';
import Login from './Components/Auth/Login';
import Authconext from './Context/Authcontext';
import EmployeDashboard from './Components/Dashboard/EmployeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';

const App = () => {

  const [User, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123456') {
      setUser('admin');
    }
    else if (email == 'user@me.com' && password == '123456') {
      setUser('employe');
    }
    else {
      alert('Invalid Email or Password');
    }
  }
  // handleLogin('admin@me.com', '123456');
  return (
    <>
      {!User ? <Login handleLogin={handleLogin} /> : ''}
      {User == 'admin' ? <AdminDashboard /> : <EmployeDashboard />}
    </>
  );
};
export default App;

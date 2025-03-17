import React, { useContext, useState } from 'react';
import Login from './Components/Auth/Login';
import EmployeDashboard from './Components/Dashboard/EmployeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { AuthContext } from './Context/AuthProvider';
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
 const data =useContext(AuthContext);
 console.log(data);
  return (
    <>
      {!User ? <Login handleLogin={handleLogin} /> : ''}
      {User === 'admin' ? <AdminDashboard /> : ''}
      {User === 'employe' ? <EmployeDashboard /> : ''}
    </>
  );
};
export default App;

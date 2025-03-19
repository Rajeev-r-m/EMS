import React, { useContext, useState } from 'react';
import Login from './Components/Auth/Login';
import EmployeDashboard from './Components/Dashboard/EmployeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { AuthContext } from './Context/AuthProvider';
const App = () => {

  const [User, setUser] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(authData?.employees);

  const handleLogin = (email, password) => {
    if (authData?.admin?.find((e) => e.email === email && e.password === password)) {
      setUser('admin');
    }
    else if (authData?.employees?.find((e) => e.email === email && e.password === password)) {
      setUser('employe');
    }
    else {
      alert('Invalid Email or Password');
    }
  }

  return (
    <>
      {!User ? <Login handleLogin={handleLogin} /> : ''}
      {User === 'admin' ? <AdminDashboard /> : ''}
      {User === 'employe' ? <EmployeDashboard /> : ''}
    </>
  );
};
export default App;

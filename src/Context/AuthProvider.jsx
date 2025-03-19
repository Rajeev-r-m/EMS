import React, { createContext } from 'react'
import { getlocalStorage } from '../utill/Localstorage';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [UserData, setUserData] = useState(null)
  useEffect(() => {
    const { employees, admin } = getlocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={ UserData }>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

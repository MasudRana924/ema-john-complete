import React, { createContext } from 'react';
import useFirebase from '../usefirebase/useFirebase';
export const AuthContext = createContext()

const AuthProvider = (props) => {
    const {children}=props
    const allConText=useFirebase()
    return (
        <AuthContext.Provider value={allConText}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
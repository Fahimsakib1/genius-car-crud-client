import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <h2 className='text-5xl my-auto mx-auto text-blue-800 font-bold'>Loading....</h2>
    }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {

   const {user, isLoading} = useContext(AuthContext);
   const location = useLocation()
   if(isLoading){
      return <div>Loading..</div>
   }

   if(user && user.uid){
      return children;
   }
   return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
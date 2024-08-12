import React from 'react'
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

function PrivateRoute({isLoggedIn,children}) {
   
  if(isLoggedIn){
    return children;
  }
  else{
     return <Navigate to="/login"/>
     toast.success("please first logged in!!!")
  }
}

export default PrivateRoute
import React from 'react'
import { Navigate } from 'react-router';
import { useAuth } from './auth';

function RequiredAuth({children}) {
      const auth = useAuth();

      if (!auth.email) return <Navigate to='/login'/>

      return (children);
}

export default RequiredAuth;

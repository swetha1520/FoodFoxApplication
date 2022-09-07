import React, { Component } from 'react'
import { Navigate,Route, Routes, Redirect, useLocation, Outlet} from 'react-router-dom'
 
 const Protected=({component :Component,...rest},) =>(
    <Route 
    {...rest}
    
    render={(props)=>
        localStorage.getItem('userId')? (
            <Component {...props} />
        ):
        <Navigate
        to="/login"
        />
        
    }
    
    />
   
 );
// const Protected=()=>{
//     const location=useLocation();
//     const userLogged=localStorage.getItem("userId");

//     return userLogged? <Outlet/>:
//     (<Navigate to="/login" replace state={{from : location}}/>);
// }

export default Protected;
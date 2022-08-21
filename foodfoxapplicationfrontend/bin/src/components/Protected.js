import React, { Component } from 'react'
import {Navigate,Route} from 'react-router-dom'

 const Protected=({component :Cmp,...rest}) =>(

    <Route 
    {...rest}
    render={(props)=>
        localStorage.getItem('userId')? (
            <Cmp {...props} />
        ):
        <Navigate 
        to="/login"
        />
    }
    
    />

 );

 export default Protected;
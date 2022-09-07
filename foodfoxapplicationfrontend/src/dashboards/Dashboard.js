import React, { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { useAuth } from '../utils/auth';

function Dashboard()
{
    const auth=useAuth();
  return(
      <div>
          <ReactBootStrap.Navbar bg="dark" variant="dark">
             <ReactBootStrap.Container>
                 <ReactBootStrap.Navbar.Brand href="/">FoodFox</ReactBootStrap.Navbar.Brand>
                 <ReactBootStrap.Nav className="me-auto">
                 <ReactBootStrap.Nav.Link href="/home">Home</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/signup">Signup</ReactBootStrap.Nav.Link>
                     {!auth.email && (<ReactBootStrap.Nav.Link href="/login" >Login</ReactBootStrap.Nav.Link>)}

                 </ReactBootStrap.Nav>
             </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
      </div>
  )
}
export default Dashboard;
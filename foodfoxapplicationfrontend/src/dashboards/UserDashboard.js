import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { useAuth } from '../utils/auth';
function UserDashboard()
{

   
  return(
      <div>
          <ReactBootStrap.Navbar bg="dark" variant="dark">
             <ReactBootStrap.Container>
                 <ReactBootStrap.Navbar.Brand href="/">FoodFox</ReactBootStrap.Navbar.Brand>
                 <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link href="/home">Home</ReactBootStrap.Nav.Link> 
                 <ReactBootStrap.Nav.Link href="/cart">Cart</ReactBootStrap.Nav.Link>
                 <ReactBootStrap.Nav.Link href="/myorders">My Orders</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/login">Logout</ReactBootStrap.Nav.Link>

                 </ReactBootStrap.Nav>
             </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
      </div>
  )
}
export default UserDashboard;
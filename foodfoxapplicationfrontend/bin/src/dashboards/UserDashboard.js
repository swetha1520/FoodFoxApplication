import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function UserDashboard()
{
  return(
      <div>
          <ReactBootStrap.Navbar bg="dark" variant="dark">
             <ReactBootStrap.Container>
                 <ReactBootStrap.Navbar.Brand href="/">FoodFox</ReactBootStrap.Navbar.Brand>
                 <ReactBootStrap.Nav className="me-auto">
                     <ReactBootStrap.Nav.Link href="/cart">Cart</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/orders">My Orders</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/login">Logout</ReactBootStrap.Nav.Link>

                 </ReactBootStrap.Nav>
             </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
      </div>
  )
}
export default UserDashboard;
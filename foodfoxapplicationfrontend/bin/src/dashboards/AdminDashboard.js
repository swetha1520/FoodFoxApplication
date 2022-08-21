import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function AdminDashboard()
{
  return(
      <div>
          <ReactBootStrap.Navbar bg="dark" variant="dark">
             <ReactBootStrap.Container>
                 <ReactBootStrap.Navbar.Brand href="/">FoodFox</ReactBootStrap.Navbar.Brand>
                 <ReactBootStrap.Nav className="me-auto">
                     <ReactBootStrap.Nav.Link href="/products">Products</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/orders">Orders</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/login">Logout</ReactBootStrap.Nav.Link>

                 </ReactBootStrap.Nav>
             </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
      </div>
  )
}
export default AdminDashboard;
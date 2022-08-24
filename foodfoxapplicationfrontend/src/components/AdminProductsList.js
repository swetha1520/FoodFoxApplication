import React, { useEffect, useState } from 'react';
import { Button, Tab} from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import './AdminProductsList.css';
import * as ReactBootStrap from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import ProductService from '../services/ProductService';
import { IconButton } from '@material-ui/core';
import {  useNavigate } from 'react-router-dom';

const AdminProductsList=(props)=>
{
    const navigate=useNavigate();
   const[products,setProducts]=useState([])
   useEffect(()=>{
       getAllProducts();
   },[])

   const getAllProducts=()=>{
       fetch("http://localhost:8080/admin/getAllProducts").then(res=>res.json())
       .then((result)=>{
           setProducts(result)
       }).catch(error=>{
           console.log(error);
       })
       console.log(localStorage.getItem('userId'));

   }

   const deleteProductById=(productId)=>{(
      fetch("http://localhost:8080/admin/deleteProductById"+"/"+productId,{method:'DELETE'}).then((response)=>{
      
       getAllProducts();
       }).catch(error=>{
           console.log(error);
       })
   )}

   function Update(productId)
   {
       console.log(productId);
       navigate('/admin/editProductById/'+productId);
   }

   
   return(
       <>
           <div>
          <ReactBootStrap.Navbar bg="dark" variant="dark">
             <ReactBootStrap.Container>
                 <ReactBootStrap.Navbar.Brand href="/">FoodFox</ReactBootStrap.Navbar.Brand>
                 <ReactBootStrap.Nav className="me-auto">
                     <ReactBootStrap.Nav.Link href="/products">Products</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/addProduct">Add Product</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/orders">Orders</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/login">Logout</ReactBootStrap.Nav.Link>

                 </ReactBootStrap.Nav>
             </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
      </div>
           <div>
            <Table className='table'>
                <thead>
                    <tr>
                        <th>productId</th>
                        <th>ProductImage</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>EditItem</th>
                        <th>DeleteItem</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(products=>(
                        
                        <>
                        <tr key={products.productId}>
                            <td>{products.productId}</td>
                            <td><img id="img" src={products.imageUrl}/></td>
                            <td>{products.productName}</td>
                            <td>{products.price}</td>
                            <td>{products.quantity*10}</td>
                            <td>
                                <ReactBootStrap.Button type="submit" variant='success' onClick={()=>Update(products.productId)}>
                                <CreateIcon></CreateIcon>
                                </ReactBootStrap.Button>
                                
                                
                            </td>
                            <td>
                                <ReactBootStrap.Button type="submit" variant="success" size="sl" onClick={()=>deleteProductById(products.productId)}>Delete</ReactBootStrap.Button>
                            </td>
                            {/* <td>
                                <div>
                                <IconButton onClick={()=>deleteProductById(products.productId)} aria-label="remove"> 
                                <DeleteIcon></DeleteIcon>
                                </IconButton>
                                </div>
                            </td> */}
                            
                        </tr>
                        </>
                    ))
                    }
                </tbody>
            </Table>
           </div> 
       </>
   )
}
export default AdminProductsList;
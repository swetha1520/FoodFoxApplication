import React, { useEffect, useState } from 'react'
import UserDashboard from '../dashboards/UserDashboard';
import * as ReactBootStrap from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import './UserCart.css';
import CartService from '../services/CartService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import LoginService from '../services/LoginService';


const UserCartList=()=>{

    const navigate=useNavigate();
    const auth=useAuth();
    const[cartitems,setCartItems]=useState([])


    useEffect(()=>{
        getAllCartItems();
    },[])
 
    const getAllCartItems=()=>{
        fetch("http://localhost:8080/user/getcartItemsByUserId/"+localStorage.getItem('userId')).then(res=>res.json())
        .then((result)=>{
            setCartItems(result)
        }).catch(error=>{
            console.log(error);
        })
    }
    const deleteCartItemByCartId=(cartItemId)=>{(
        fetch("http://localhost:8080/user/deleteItemByCartId"+"/"+cartItemId,{method:'DELETE'}).then((response)=>{
        
         getAllCartItems();
         }).catch(error=>{
             console.log(error);
         })
     )}

     const orderAllItems=()=>{
          CartService.placeOrder(localStorage.getItem("userId")).then(res=>{
            // if(auth.user)
            // {
                navigate("/myorders");
            // }
              
          })
     }
     return(
         <>
         <UserDashboard/>
         <div>
         <div>
            <Table className='table'>
                <thead>
                    <tr>
                        <th>CartId</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>DeleteItem</th>
                    </tr>
                </thead>
                <tbody>
                    {cartitems.map(products=>(
                        
                        <>
                        <tr key={products.cartItemId}>
                            <td>{products.cartItemId}</td>
                            <td>{products.productName}</td>
                            <td>{products.price}</td>
                            <td>{products.quantity}</td>
                            <td>
                                <ReactBootStrap.Button type="submit" variant="success" size="sl" onClick={()=>deleteCartItemByCartId(products.cartItemId)}>Delete</ReactBootStrap.Button>
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
           <ReactBootStrap.Button variant='success' onClick={()=>orderAllItems()}>Place Order</ReactBootStrap.Button>
         </div>
         </>
     )
}
export default UserCartList;
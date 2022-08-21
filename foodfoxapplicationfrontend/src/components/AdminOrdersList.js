import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../dashboards/AdminDashboard';
import ProductService from '../services/ProductService';
import { Table } from 'react-bootstrap';

const AdminOrdersList=()=>{

    const[orders,setOrders]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        getAllOrders();
    },[])

    const getAllOrders=()=>{
        fetch("http://localhost:8080/admin/getAllOrders").then(res=>res.json())
        .then((res)=>{
            setOrders(res);
            
        }).catch(error=>{
            console.log(error);
        })
    }
    const body=()=>{
          return orders.map((order)=>{
              return(
                  <>
                    <tr>
                        <td>{order.orderId}</td>
                        <td>{order.userId}</td>
                        <td>{order.productName}</td>
                        <td>{order.price}</td>
                        <td>{order.quantity}</td>
                        <td>{order.totalPrice}</td>
                    </tr>
                  </>
              )
          })
    }

    return(
        <div>
            <AdminDashboard/>
            <div>
            <Table className='table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>UserId</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>TotalPrice</th>
                    </tr>
                </thead>
                <tbody>
                    {body()}
                </tbody>
            </Table>
            </div>
        </div>
    )
}
export default AdminOrdersList;
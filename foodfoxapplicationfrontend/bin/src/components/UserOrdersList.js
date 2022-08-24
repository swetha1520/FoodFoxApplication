import React, { useEffect, useState }  from "react";
import UserDashboard from "../dashboards/UserDashboard";
import { Table } from "react-bootstrap";
const UserOrdersList=()=>{

    const[orders,setOrders]=useState([]);
    

    useEffect(()=>{
        fetch("http://localhost:8080/getAllOrdersByUserId/"+localStorage.getItem('userId')).then(res=>res.json())
        .then((result)=>{
            setOrders(result);
        }).catch(error=>{
            console.log(error);
        })
    },[])
    const body=()=>{
        return orders.map((order)=>{
            return(
                <>
                  <tr>
                      <td>{order.orderId}</td>
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
        <>
        <UserDashboard/>
        <div>
        <Table className='table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>OrderId</th>
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
        </>
    )

}
export default UserOrdersList;
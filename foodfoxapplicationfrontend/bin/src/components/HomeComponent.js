import React,{Component, useEffect, useState} from 'react';
import UserDashboard from '../dashboards/UserDashboard';
import * as ReactBootStrap from 'react-bootstrap';
import ProductService from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
import CartService from '../services/CartService';
import { useAuth } from '../utils/auth';


const HomeComponent =(props)=>
{
    const[products,setProducts]=useState([])
    const navigate=useNavigate();
    const auth=useAuth();
    useEffect(()=>{
        getHomeProducts();
    },[])

    const getHomeProducts=()=>{
       fetch("http://localhost:8080/user/getHomeProducts").then(res=>res.json())
       .then((result)=>{
        setProducts(result);
    }).catch(error=>{
        console.log(error);
    })         
    console.log(localStorage.getItem('userId'));
    
   }

  const showProduct=(productId)=>{
      
      navigate(`/product/${productId}`);
      this.props.history.push(`/product/${productId}`);
  }
    return(
        <div>
            <ReactBootStrap.Navbar bg="dark" variant="dark">
             <ReactBootStrap.Container>
                 <ReactBootStrap.Navbar.Brand href="/">FoodFox</ReactBootStrap.Navbar.Brand>
                 <ReactBootStrap.Nav className="me-auto">
                     <ReactBootStrap.Nav.Link href="/cart">Cart</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="/myorders">My Orders</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/login">Logout</ReactBootStrap.Nav.Link>

                 </ReactBootStrap.Nav>
             </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
          <p>Welcome {auth.email}</p>
            <ReactBootStrap.Row lg={3}>
                {products.map(product=>(
                    <div className="div">
                <div key={product.productId}>
                    <ReactBootStrap.Col className="d-flex">
                    <ReactBootStrap.Card style={{ width: '18rem' }}>
                        <ReactBootStrap.Card.Img variant="top" src={product.imageUrl} onClick={()=>{showProduct(product.productId)}}></ReactBootStrap.Card.Img>
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>{product.productName}</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text>{product.description}</ReactBootStrap.Card.Text>
                            <ReactBootStrap.Card.Text> Rs.{product.price} </ReactBootStrap.Card.Text>   
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                    </ReactBootStrap.Col>
                </div>
                
                </div>
                
                ))
            }
            </ReactBootStrap.Row>
        </div>
    )
}
export default HomeComponent;
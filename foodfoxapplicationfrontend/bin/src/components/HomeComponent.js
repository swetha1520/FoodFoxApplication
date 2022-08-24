import React,{Component, useEffect, useState} from 'react';
import UserDashboard from '../dashboards/UserDashboard';
import * as ReactBootStrap from 'react-bootstrap';
import ProductService from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
import CartService from '../services/CartService';


const HomeComponent =(props)=>
{
    const[products,setProducts]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        getHomeProducts();
    },[])

    const getHomeProducts=()=>{
       fetch("http://localhost:8080/user/getHomeProducts").then(res=>res.json())
       .then((result)=>{
        setProducts(result);
        // localStorage.setItem('productId',result.data.productId);
        // console.log(localStorage.getItem('productId'));
    }).catch(error=>{
        console.log(error);
    })         
    console.log(localStorage.getItem('userId'));
    
   }

  const showProduct=(productName)=>{
      
      navigate(`/product/${productName}`);
      this.props.history.push(`/product/${productName}`);
  }

  const addToCart=(productName)=>{
      console.log(productName);
      CartService.addItemCart(localStorage.getItem("userId"),productName).then(res=>{
        navigate("/cart");
      })
     
    // this.props.history.push(`/addToCart/${productName}`);

  }

  const placeOrder=(productName)=>{
      console.log(productName);
      CartService.placeSingleOrder(localStorage.getItem("userId"),productName).then(res=>{
          navigate("/myorders");
      })
  }
    return(
        <div>
            <UserDashboard/>
            <ReactBootStrap.Row lg={3}>
                {products.map(product=>(
                    <div className="div">
                <div key={product.productId}>
                    <ReactBootStrap.Col className="d-flex">
                    <ReactBootStrap.Card style={{ width: '18rem' }}>
                        <ReactBootStrap.Card.Img variant="top" src={product.imageUrl} onClick={()=>{showProduct(product.productName)}}></ReactBootStrap.Card.Img>
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>{product.productName}</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text>{product.description}</ReactBootStrap.Card.Text>
                            <ReactBootStrap.Card.Text> Rs.{product.price} </ReactBootStrap.Card.Text>   
                            <ReactBootStrap.Button variant="primary" onClick={()=>{addToCart(product.productName)}}>Add To Cart</ReactBootStrap.Button>
                            <ReactBootStrap.Button variant="primary" onClick={()=>{placeOrder(product.productName)}}>Place Order</ReactBootStrap.Button>
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
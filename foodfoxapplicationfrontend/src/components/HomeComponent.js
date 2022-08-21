import React,{Component, useEffect, useState} from 'react';
import UserDashboard from '../dashboards/UserDashboard';
import * as ReactBootStrap from 'react-bootstrap';
import ProductService from '../services/ProductService';
import { useNavigate } from 'react-router-dom';


const HomeComponent =()=>
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
    }).catch(error=>{
        console.log(error);
    })         
       
   }

  const showProduct=(productId)=>{
      navigate(`/product/${productId}`);
    // this.props.history.push(`/product-info/${productId}`);
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
                        <ReactBootStrap.Card.Img variant="top" src={product.imageUrl} onClick={()=>{showProduct(product.productId)}}></ReactBootStrap.Card.Img>
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>{product.productName}</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text>{product.description}</ReactBootStrap.Card.Text>
                            <ReactBootStrap.Card.Text> Rs.{product.price} </ReactBootStrap.Card.Text>   
                            <ReactBootStrap.Button variant="primary">Add To Cart</ReactBootStrap.Button>
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
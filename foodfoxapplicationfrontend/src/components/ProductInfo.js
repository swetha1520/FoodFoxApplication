import React,{Component, useEffect, useState} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import AdminDashboard from '../dashboards/AdminDashboard';
import UserDashboard from '../dashboards/UserDashboard';
import ProductService from '../services/ProductService';
import './ProductInfo.css';
import CartService from '../services/CartService';
import LoginService from '../services/LoginService';
import { useAuth } from '../utils/auth';


const ProductInfo=(match)=>
{
        const navigate=useNavigate();
        const[productName,setProductName]=useState('')
        const[description,setDescription]=useState('')
        const[price,setPrice]=useState('')
        const[quantity,setQuantity]=useState('')
        const[imageUrl,setImageUrl]=useState('')
        const{productId}=useParams();
       

            useEffect(()=>{
                ProductService.getProductById(productId).then((response)=>{
                   setProductName(response.data.productName);
                   setImageUrl(response.data.imageUrl);
                   setPrice(response.data.price);
                   setDescription(response.data.description);
                   setQuantity(response.data.quantity);
                })
            },[productId])
            
            const addToCart=(productName)=>{
                console.log(productName);
                CartService.addItemCart(localStorage.getItem("userId"),productName).then(res=>{
                  
                  navigate("/cart");
                })          
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
                     <div>
                         <ReactBootStrap.Container>
                             <ReactBootStrap.Row>
                             <ReactBootStrap.Col className="img">
                                 <img className='image' src={imageUrl} />
                             </ReactBootStrap.Col>
                             <ReactBootStrap.Col>
                                 <div className='text'>
                                     <h1>{productName}</h1>
                                     <hr></hr>
                                     <p className='content'>
                                         <h4>Rs. {price}</h4>
                                         {description}
                                     </p>
                                     <div className="text1">
                                     <ReactBootStrap.Button className="add" variant="warning" onClick={()=>{addToCart(productName)}}>Add to Cart</ReactBootStrap.Button>
                                     <ReactBootStrap.Button className="place" variant="primary"onClick={()=>{placeOrder(productName)}}>Place Order</ReactBootStrap.Button>
                                     </div>
                                 </div>
                             </ReactBootStrap.Col>
                             </ReactBootStrap.Row>
                         </ReactBootStrap.Container>
                     </div>
    
                 </div>
              )
          
    
    
}
export default ProductInfo;
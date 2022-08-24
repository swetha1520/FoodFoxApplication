
import React,{Component, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminDashboard from '../dashboards/AdminDashboard';
import UserDashboard from '../dashboards/UserDashboard';
import ProductService from '../services/ProductService';

const ProductInfo=(match)=>
{
        const [items, setItems] = useState([]);
        const[data,setData]=useState({});
        // let params=useParams();
        // const navigate=useNavigate();
        // const[productId,setProductId]=useState('')
        // const[productName,setProductName]=useState('')
        // const[description,setDescription]=useState('')
        // const[price,setPrice]=useState('')
        // const[quantity,setQuantity]=useState('')
        // const[imageUrl,setImageUrl]=useState('')
        const{productName}=useParams();
    
            useEffect(()=>{
                fetch("http://localhost:8080/user/getHomeProducts").then(res=>res.json())
                .then((response)=>{
                   setData(response.data);
                }).catch((error)=>{
                    console.log(error);
                })
            },[])
        
            useEffect(()=>{
                getProductByName(productName);
              },[data])
    
            const getProductByName=()=>{
                fetch("http://localhost:8080/user/getProductByName/"+productName).then((response)=>{
                //    setProductId(response.data.productId);
                //    setProductName(response.productName);
                //    setImageUrl(response.imageUrl);
                //    setPrice(response.price);
                //    setDescription(response.description);
                //    setQuantity(response.quantity);
                 setItems(response.data);  
                console.log(response.data);
                }).catch(error=>{
                    console.log(error);
                })
            
        }
            return(
                 <div>
                     <UserDashboard/>
                     {items?.map((items)=>(
                         <div>
                           Price:  {items.price}
                             </div>
                       
                     ))
                 }
    
                 </div>
              )
          
    
    
}
export default ProductInfo;
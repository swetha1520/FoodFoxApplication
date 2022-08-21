import React,{Component, useEffect, useState} from 'react';
import AdminDashboard from '../dashboards/AdminDashboard';
import ProductService from '../services/ProductService';

const ProductInfo=(props)=>
{
    const[id,setId]=useState(props.productId);
    const[items,setItems]=useState([])
    const[productId,setProductId]=useState('')
    const[productName,setProductName]=useState('')
    const[description,setDescription]=useState('')
    const[price,setPrice]=useState('')
    const[quantity,setQuantity]=useState('')
    const[imageUrl,setImageUrl]=useState('')
    // componentDidMount()
    // {
    //     ProductService.getHomeProducts().then((res)=>{
    //         setItems(res.data);
    //     })
    //      ProductService.getProductById(id).then((res)=>
    //      {
    //          let result=res.data;
    //          setProductId(result.productId),
    //          setProductName(result.productName),
    //          setDescription(result.description)
    //      })
    // }

        return(
             <div>
                 {items.map((item)=>(
                     <div>
                       productName:  {item.productName}
                         </div>
                   
                 ))
             }
             </div>
          )
      
}
export default ProductInfo;
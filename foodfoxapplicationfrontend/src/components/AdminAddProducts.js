import React, { useState } from 'react';
import ProductService from '../services/ProductService';
import * as ReactBootStrap from 'react-bootstrap';
import AdminDashboard from '../dashboards/AdminDashboard';
import { useNavigate } from 'react-router-dom';

const AdminAddProducts=()=>{
    const[productName,setProductName]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
    const[imageUrl,setImageUrl]=useState('')
    const[quantity,setQuantity]=useState('')
    const navigate=useNavigate();


    const addProduct=(e)=>
    {
        e.preventDefault();
        const product={productName,price,description,imageUrl,quantity};
        fetch("http://localhost:8080/admin/addProduct",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        }
        ).then(()=>{
            navigate('/products');
        }).catch(error=>{
            console.log(error);
        })
    }

    return(
        <div>
          <AdminDashboard/>
          <div className='form'>
          <ReactBootStrap.Form>
              <ReactBootStrap.Row className='mb-3'>
                  <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="productName">
                      <ReactBootStrap.Form.Label>ProductName</ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control type="text" value={productName}
                      onChange={(e)=>setProductName(e.target.value)} placeholder="Enter ProductName"/>
                  </ReactBootStrap.Form.Group>
              </ReactBootStrap.Row>
              <ReactBootStrap.Row className='mb-3'>
                  <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="price">
                      <ReactBootStrap.Form.Label>Price</ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control type="number" value={price}
                      onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price"/>
                  </ReactBootStrap.Form.Group>
              </ReactBootStrap.Row>
              <ReactBootStrap.Row className='mb-3'>
                  <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="description">
                      <ReactBootStrap.Form.Label>Description</ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control type="text" value={description}
                      onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Description"/>
                  </ReactBootStrap.Form.Group>
              </ReactBootStrap.Row>
              <ReactBootStrap.Row className='mb-3'>
                  <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="imageUrl">
                      <ReactBootStrap.Form.Label>ImageUrl</ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control type="text" value={imageUrl}
                      onChange={(e)=>setImageUrl(e.target.value)} placeholder="Enter ImageUrl"/>
                  </ReactBootStrap.Form.Group>
              </ReactBootStrap.Row>
              <ReactBootStrap.Row className='mb-3'>
                  <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="quantity">
                      <ReactBootStrap.Form.Label>Quantity</ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control type="number" value={quantity}
                      onChange={(e)=>setQuantity(e.target.value)} placeholder="Enter Quantity"/>
                  </ReactBootStrap.Form.Group>
              </ReactBootStrap.Row>
              <ReactBootStrap.Button type="submit" variant='success' size='sl' onClick={addProduct}>AddProduct</ReactBootStrap.Button>
          </ReactBootStrap.Form>
          </div>
        </div>
    )
}
export default AdminAddProducts;
import React, { Component, useState } from 'react';
import Dashboard from '../dashboards/Dashboard';
import * as ReactBootStrap from 'react-bootstrap';
import LoginService from '../services/LoginService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function LoginComponent()
{
    
                
                const[email,setEmail]=useState('');
                const[password,setPassword]=useState('');
                const navigate=useNavigate();
                const [error,setError]=useState();

                const changeEmail=(event)=>{
                setEmail(event.target.value);
                }
                const changePassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleClick=(e)=>
    {
        e.preventDefault();
        let check={email, password};
        LoginService.checkUser(check).then((res)=>
        {
            let result=res.data;
            if(result===true)
            {
                if(check.email==="swetha@gmail.com"&&check.password==="Cherie")
                {
                    navigate("/admin");

                }
                else{
                    LoginService.getUserId(check.email).then((res)=>
                    {
                        let result=res.data;
                        localStorage.setItem('userId',result);
                        console.log(localStorage.getItem('userId')); 
                        if(result!=null){
                            navigate(`/home`);
                        }
                        else
                        {
                            toast("Invalid User");
                        }    
                        
                    })
                }
            }

        },reason=>{
            console.error(reason);
            toast("Invalid details");
        });
    }
        
    
    // handleClick=(e)=>
    // {
    //     e.preventDefault();
        
    //     let check={email:this.state.email, password:this.state.password};
    
    //     LoginService.checkUser(check).then((res)=>{

    //         let result=res.data;

    //         if(result==true)
    //         {
                
    //             if(check.email=="swetha@gmail.com"&&check.password=="Cherie")
    //             {
    //                 localStorage.setItem('userId','admin');
    //                 localStorage.setItem('admin','1');
    //                 <Navigate to="/admin/getAllProducts" replace={true}/>
    //                 // this.props.history.push('./admin');
    //             }

    //             else
    //             {
    //             LoginService.getUserId(check.email).then((res)=>{
                    
    //                 let data=res.data;

    //               localStorage.setItem('userId',data);
    //               console.log(localStorage.getItem('userId')); 
    //               <Navigate to="/user/getHomeProducts" replace={true}/>
    //               //    this.props.history.push('./home');
    //             });
    //         }

    //         }
            
    //     }); 
    // }
   
        return(
            <div>
            <Dashboard/>
            <h3 className='text-center'>Signin</h3>
            <div className='form'>
                <ReactBootStrap.Form>
                    <ReactBootStrap.Row className="mb-3">
                        <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="email">
                        <ReactBootStrap.Form.Label>Email </ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="text" value={email}
                            onChange={changeEmail} placeholder="Enter Email"/>
                        </ReactBootStrap.Form.Group>
                    </ReactBootStrap.Row>
                    
                    <ReactBootStrap.Row className="mb-3">
                        <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="username">
                        <ReactBootStrap.Form.Label>Password </ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="password" value={password}
                            onChange={changePassword} placeholder="Enter Passowrd"/>
                        </ReactBootStrap.Form.Group>
                    </ReactBootStrap.Row>
                    
                    <div className="text-center">
                        <ReactBootStrap.Button variant="success" size="lg" type="submit"  onClick={handleClick} >Login</ReactBootStrap.Button>
                        <br></br>
                                <div class="text-center" >
                                <a href="/signup" id="signupLink" >New user? click here</a>
                        </div>
                    </div>
                </ReactBootStrap.Form>
            </div>
            </div>
        )
    
}
export default LoginComponent;
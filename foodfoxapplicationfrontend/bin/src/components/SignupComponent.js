import React, { useEffect, useState } from 'react';
import Dashboard from '../dashboards/Dashboard';
import * as ReactBootStrap from 'react-bootstrap';
import './Signup.css';
import LoginService from '../services/LoginService';
import SignupService from '../services/SignupService';
import { useNavigate } from 'react-router-dom';
function SignupComponent()
{
    
       const[email,setEmail]=useState(''); 
       const[username,setUsername]=useState(''); 
       const[mobile,setMobile]=useState(''); 
       const[password,setPassword]=useState(''); 
       const[confirmPassword,setConfirmPassword]=useState(''); 
       const navigate=useNavigate();
    
    
    const handleClick=(e)=>{
        e.preventDefault();
        let details={email,username,mobile,password,confirmPassword};
       if(details.password===details.confirmPassword&&details.password.length>=8)
        {
            SignupService.addUser(details).then(()=>{
                navigate('/login');
            }).Alert("Fill All the required details");
            
                
        }
        // else
        // {
        //     ReactBootStrap.Alert("Password should match Confirm Password");
        // }
       

        
        
        
    }
    const changeEmail=(event)=>{
        setEmail(event.target.value);
    }
    const changeUsername=(event)=>{
        setUsername(event.target.value);
    }
    const changeMobile=(event)=>{
        setMobile(event.target.value);
    }
    const changePassword=(event)=>{
        setPassword(event.target.value);
    }
    const changeConfirmPassword=(event)=>{
        setConfirmPassword(event.target.value);
    }
    
    
        return(
            <div>
            <Dashboard/>
            <h3 className='text-center'>Signup</h3>
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
                        <ReactBootStrap.Form.Label>UserName </ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="text" value={username}
                            onChange={changeUsername} placeholder="Enter Name"/>
                    </ReactBootStrap.Form.Group>
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row className="mb-3">
                        <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="mobile">
                        <ReactBootStrap.Form.Label>Mobile </ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="phoneNumber" value={mobile}
                            onChange={changeMobile} placeholder="Enter PhoneNumber"/>
                        </ReactBootStrap.Form.Group>
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row className="mb-3">
                        <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="password">
                        <ReactBootStrap.Form.Label>Password </ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="password" value={password}
                            onChange={changePassword} placeholder="Enter Passowrd"/>
                        </ReactBootStrap.Form.Group>
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row className="mb-3">
                        <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="confirmPassword">
                        <ReactBootStrap.Form.Label>ConfirmPassword </ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="password" value={confirmPassword}
                            onChange={changeConfirmPassword} placeholder="Re-Enter Passowrd"/>
                        </ReactBootStrap.Form.Group>
                    </ReactBootStrap.Row>
                    <div className="text-center">
                        <ReactBootStrap.Button variant="success" size="lg" type="submit"  onClick={handleClick} href="/login">Submit</ReactBootStrap.Button>
                        <br></br> 
                        <a href="/login" id="signinLink" >Already a member?Click here</a>
                    </div>
                </ReactBootStrap.Form>
            </div>
            </div>
        )
    
    }
export default SignupComponent;
import { BrowserRouter, Switch, Route, NavLink, Routes, Link} from 'react-router-dom';
import SignupComponent from './components/SignupComponent';
import Dashboard from './dashboards/Dashboard';
import LoginComponent from './components/LoginComponent';
import AdminDashboard from './dashboards/AdminDashboard';
import Protected from './components/Protected';
import HomeComponent from './components/HomeComponent';
import ProductInfo from './components/ProductInfo';
import AdminProductsList from './components/AdminProductsList';
import AdminAddProducts from './components/AdminAddProducts';
import AdminOrdersList from './components/AdminOrdersList';
import AdminEditProductById from './components/AdminEditProductById';
import UserCartList from './components/UserCartList';
import UserOrdersList from './components/UserOrdersList';
import { Fragment } from 'react';
import React, { useEffect, useState } from 'react'
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './utils/AuthProvider';
import RequiredAuth from './utils/RequiredAuth';

function App() {
  
  return (
   <AuthProvider>
     <BrowserRouter>
      
       <Routes>
       <Route path="/" element={<Dashboard/>}></Route>
       <Route exact path="/signup" element={<SignupComponent/>}></Route>
       <Route exact path="/login" element={<LoginComponent/>}></Route>
       <Route exact path="/home" element={<RequiredAuth><HomeComponent/></RequiredAuth>}></Route>
       {/* <Route element={<Protected></Protected>}>
         <Route exact path="/home" element={<HomeComponent/>}/>
       </Route> */}
       <Route exact path="/product/:productId" element={<RequiredAuth><ProductInfo /></RequiredAuth>} />
       <Route path="/admin" element={<AdminDashboard />}></Route>
       <Route path="/products" element={<AdminProductsList />}></Route>
       <Route path="/addProduct" element={<AdminAddProducts />}></Route>
       <Route path="/orders" element={<AdminOrdersList />}></Route>
       <Route path="/admin/editProductById/:productId" element={<AdminEditProductById />}></Route>
       <Route path="/cart" element={<UserCartList />}></Route>
       <Route path="/myorders" element={<UserOrdersList />}></Route>

       </Routes>
     </BrowserRouter>
     </AuthProvider>
  );
}

export default App;

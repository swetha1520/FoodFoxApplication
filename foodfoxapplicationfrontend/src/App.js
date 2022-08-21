import { BrowserRouter, Switch, Route, NavLink, Routes, Link} from 'react-router-dom';
import SignupComponent from './components/SignupComponent';
import Dashboard from './dashboards/Dashboard';
import LoginComponent from './components/LoginComponent';
import UserDashboard from './dashboards/UserDashboard';
import AdminDashboard from './dashboards/AdminDashboard';
import Protected from './components/Protected';
import HomeComponent from './components/HomeComponent';
import ProductInfo from './components/ProductInfo';
import AdminProductsList from './components/AdminProductsList';
import AdminAddProducts from './components/AdminAddProducts';
import AdminOrdersList from './components/AdminOrdersList';
import AdminEditProductById from './components/AdminEditProductById';


function App() {
  return (
   
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Dashboard/>}></Route>
       <Route exact path="/signup" element={<SignupComponent/>}></Route>
       <Route exact path="/login" element={<LoginComponent/>}></Route>
       <Route exact path="/home" element={<HomeComponent/>}></Route>
       <Route exact path="/product/:productId" element={<ProductInfo/>}></Route>
       <Route path="/admin" element={<AdminDashboard/>}></Route>
       <Route path="/products" element={<AdminProductsList/>}></Route>
       <Route path="/addProduct" element={<AdminAddProducts/>}></Route>
       <Route path="/orders" element={<AdminOrdersList/>}></Route>
       <Route path="/admin/EditProductById/:productId" element={<AdminEditProductById/>}></Route>

       </Routes>
     </BrowserRouter>
    
  );
}

export default App;

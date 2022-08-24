import axios from 'axios';

const CART_BASE_URL="http://localhost:8080/cart";
const CARTADD_BASE_URL="http://localhost:8080/user/addproducttocartByName";
const CARTDELETE_BASE_URL="http://localhost:8080/delete";
const CARTORDER_BASE_URL="http://localhost:8080/user/placeOrder";


class CartService{

    getCartItems(userId){

        return axios.get(CART_BASE_URL+'/'+userId);
    }

    addItemCart(userId,productName){

        return axios.post(CARTADD_BASE_URL+'/'+userId+'/'+productName);
    }
    placeSingleOrder(userId,productName)
   {
       return axios.post(CARTORDER_BASE_URL+'/'+userId+'/'+productName);
   }
  
   deleteCartItem(userId,product)
   {
       return axios.post(CARTDELETE_BASE_URL+'/'+userId+'/'+product);
   }

   placeOrder(userId)
   {
       return axios.post("http://localhost:8080/addProductfromCartToOrders"+'/'+userId);
   }

   
}

export default new CartService()
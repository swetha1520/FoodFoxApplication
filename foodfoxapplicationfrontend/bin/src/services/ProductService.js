import axios from "axios";

class ProductService
{
    getHomeProducts()
    {
        return axios.get("http://localhost:8080/user/getHomeProducts");
    }
    getProductById(productId)
    {
        return axios.get("http://localhost:8080/user/getProductById"+"/"+productId);
    }
    getAdminProductById(productId)
    {
        return axios.get("http://localhost:8080/admin/getProductById"+"/"+productId);
    }
    deleteProductById(productId)
    {
        return axios.get("http://localhost:8080/admin/deleteProductById"+"/"+productId)
        
    
    }
    
    deleteProductByName(productName)
    {
        return axios.delete("http://localhost:8080/admin/deleteProductByName"+"/"+productName);
        
    }
    addProduct(product)
    {
        return axios.post("http://localhost:8080/admin/addProduct",product);
    }
  updateProductById(productId,product)
  {
     return axios.put("http://localhost:8080/admin/editProductById/"+productId,product);
  }
  
}
export default new ProductService();
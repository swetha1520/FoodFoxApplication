package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.springboot.model.ProductModel;
import com.example.springboot.service.ProductService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private ProductService prodservice;
	
	@PostMapping("/admin/addProduct")
	public void addProduct(@RequestBody ProductModel product)
	{
		prodservice.addProduct(product);
	}
	
	@GetMapping("/admin/getAllProducts")
	public List<ProductModel> getAllProducts()
	{
		return prodservice.getAllProducts();
	}
	
	@GetMapping("/user/getHomeProducts")
	public List<ProductModel> getHomeProducts()
	{
		return prodservice.getAllProducts();
	}
	
	@DeleteMapping("/admin/deleteProductById/{productId}")
	public void deleteProductById(@PathVariable int productId)
	{
		prodservice.deleteProductById(productId);
	}
	
	@PutMapping("/admin/editProductById/{productId}")
	public ProductModel editProductById(@PathVariable int productId,@RequestBody ProductModel product)
	{
		return prodservice.editProductById(productId,product);
	}
	@PutMapping("/admin/editProductByName/{productName}")
	public void editProductByName(@RequestBody ProductModel product,@PathVariable String productName)
	{
		 prodservice.editProductByName(product, productName);
	}
	
	
	@GetMapping("/user/getProductById/{productId}")
	public ProductModel getProductById(@PathVariable int productId)
	{
		return prodservice.getProductById(productId);
	}
	@GetMapping("/user/getProductByName/{productName}")
	public ProductModel getProductByName(@PathVariable String productName)
	{
		return prodservice.getProductByProdName(productName);
	}
	
	@GetMapping("/admin/getProductById/{productId}")
	public ProductModel getProductbyId(@PathVariable int productId)
	{
		return prodservice.getProductById(productId);
	}
	

	// @DeleteMapping("/admin/deleteProductByName/{productName}")
    // public void deleteProductByName(@PathVariable int productId)
	// {
	// 	prodservice.deleteProductByName(productName);
	// }
}

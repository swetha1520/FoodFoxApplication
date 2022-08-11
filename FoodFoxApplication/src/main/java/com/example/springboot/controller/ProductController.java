package com.example.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.ProductModel;
import com.example.springboot.service.ProductService;

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
	public void editProductById(@RequestBody ProductModel product,@PathVariable int productId)
	{
		prodservice.editProductById(product, productId);
	}
	
	@GetMapping("/user/getProductById/{productId}")
	public Optional<ProductModel> getProductById(@PathVariable int productId)
	{
		return prodservice.getProductById(productId);
	}
	
	@GetMapping("/admin/getProductById/{productId}")
	public Optional<ProductModel> getProductbyId(@PathVariable int productId)
	{
		return prodservice.getProductById(productId);
	}
}

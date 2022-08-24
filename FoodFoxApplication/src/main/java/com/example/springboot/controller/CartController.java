package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.CartModel;
import com.example.springboot.model.ProductModel;
import com.example.springboot.service.CartService;
import com.example.springboot.service.ProductService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CartController {

	@Autowired
	private CartService cartservice;
	@Autowired
	private ProductService prodservice;
	
	@GetMapping("/getcartItems")
	public List<CartModel> getAllCartItems()
	{
		return cartservice.getAllItems();
	}
	
	@PostMapping("/user/addproductstocart/{userId}")
	public void addItemTocart(@RequestBody ProductModel product,@PathVariable int userId)
	{
		cartservice.addItemToCart(product, userId);
	}
	@PostMapping("/user/addproducttocartByName/{userId}/{productName}")
    public void addToCart(@PathVariable int userId,@PathVariable String productName)
	{
		cartservice.addItemToCart(prodservice.getProductByProdName(productName),userId);
	}

	@GetMapping("/user/getcartItemsByUserId/{userId}")
	public List<CartModel> getcartItemsByUserId(@PathVariable("userId") int userId)
	{
		return cartservice.viewCartItemsByUserId(userId);
	}
	
	@DeleteMapping("/user/deleteItemByUserId/{userId}")
	public void deleteItemByUserId(@PathVariable int userId)
	{
		cartservice.deleteItemById(userId);
	}
	
	@DeleteMapping("user/deleteItemByName/{productName}")
	public void deleteItemByName(@PathVariable String productName)
	{
		cartservice.deleteItemByName(productName);
	}
	@DeleteMapping("user/deleteItemByCartId/{cartItemId}")
	public void deleteItemByCartId(@PathVariable int cartItemId)
	{
		cartservice.deleteItemByCartId(cartItemId);
	}
}

package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.CartModel;
import com.example.springboot.model.ProductModel;
import com.example.springboot.service.CartService;

@RestController
public class CartController {

	@Autowired
	private CartService cartservice;
	
	
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
	
	
}

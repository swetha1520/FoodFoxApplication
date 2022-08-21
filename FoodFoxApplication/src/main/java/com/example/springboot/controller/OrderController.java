package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.CartModel;
import com.example.springboot.model.OrderModel;
import com.example.springboot.service.CartService;
import com.example.springboot.service.OrderService;
import com.example.springboot.service.ProductService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController {

	@Autowired
	private OrderService orderservice;
	
	@Autowired
	private CartService cartservice;
	
	@Autowired
	private ProductService prodservice;
	
	@GetMapping("/getAllOrdersByUserId/{userId}")
	public List<OrderModel> getAllOrdersByUserId(@PathVariable int userId)
	{
		return orderservice.getUserProducts(userId);
	}
	
	@PostMapping("/addProductfromCartToOrders/{userId}")
	public void addProductfromCartToOrders(@PathVariable int userId)
	{
		List<CartModel> temp=cartservice.viewCartItemsByUserId(userId);
		orderservice.addProductfromCart(temp, userId);
	}
	
	@PostMapping("/user/placeOrder/{userId}/{productName}")
	public void placeOrder(@PathVariable int userId,@PathVariable String productName)
	{
		orderservice.addItemToOrder(prodservice.getProductByProdName(productName), userId);
	}

	@GetMapping("/admin/getAllOrders")
	public List<OrderModel> getAllOrders()
	{
		return orderservice.getAllOrders();
		}
}

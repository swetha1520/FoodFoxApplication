package com.example.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.model.CartModel;
import com.example.springboot.model.OrderModel;
import com.example.springboot.model.ProductModel;
import com.example.springboot.repository.CartRepository;
import com.example.springboot.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderrepo;
	
	@Autowired
	private CartRepository cartrepo;
	
	
	public List<OrderModel> getUserProducts(int userId)
	{
		return orderrepo.findByUserId(userId);
	}
	
	public void addProductfromCart(List<CartModel> cart,int userId)
	{
		
		for(CartModel temp:cart)
		{
			
			OrderModel order=new OrderModel();
			order.setPrice(temp.getPrice());
			order.setProductName(temp.getProductName());
			order.setQuantity(temp.getQuantity());
			order.setTotalPrice(temp.getQuantity()*temp.getPrice());
			order.setUserId(userId);
			orderrepo.save(order);
		}
		cartrepo.deletebyuserid(userId);
	}
	
	public void addItemToOrder(ProductModel product,int userId)
	{
		OrderModel order=new OrderModel();
		order.setPrice(product.getPrice());
		order.setProductName(product.getProductName());
		order.setQuantity(product.getQuantity());
		order.setTotalPrice(product.getPrice());
		order.setUserId(userId);
		orderrepo.save(order);
	}

	public List<OrderModel> getAllOrders()
	{
		return orderrepo.findAll();
		}
}

package com.example.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.model.CartModel;
import com.example.springboot.model.ProductModel;
import com.example.springboot.repository.CartRepository;

@Service
public class CartService {

	@Autowired
	private CartRepository cartrepo;
	
	
	public List<CartModel> getAllItems()
	{
		return cartrepo.findAll();
	}
	
	public void addItemToCart(ProductModel product,int userId)
	{
		CartModel cart=new CartModel();
		cart.setProductName(product.getProductName());
		cart.setPrice(product.getPrice());
		cart.setQuantity(product.getQuantity());
		cart.setUserId(userId);
		cartrepo.save(cart);
	}
	
	public List<CartModel> viewCartItemsByUserId(int userId)
	{
		return cartrepo.findById(userId);
	}
	
	public void deleteItemById(int userId)
	{
		cartrepo.deletebyuserid(userId);
	}
	
	
}

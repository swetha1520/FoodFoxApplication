package com.example.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.springboot.model.ProductModel;
import com.example.springboot.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository prodrepo;
	
	public void addProduct(ProductModel product)
	{
		prodrepo.save(product);
	}
	
	public List<ProductModel> getAllProducts()
	{
		return prodrepo.findAll();
	}
	
	public void deleteProductById(int productId)
	{
		 prodrepo.deleteById(productId);
	}
	// public void deleteProductByName(String productName)
	// {
	// 	prodrepo.deleteByProductName(productName);
	// }
	public boolean editProductById(ProductModel product, int productId)
	{
		if(prodrepo.existsById(productId))
		{
			prodrepo.save(product);
			return true;
		}
		else
			return false;
	}
	
	public Optional<ProductModel> getProductById(int productId)
	{
		return prodrepo.findById(productId);
	
	}
	public ProductModel getProductByProdName(String productName)
	{
		return prodrepo.findByProductName(productName);
	}
}

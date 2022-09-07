package com.example.springboot.service;

import java.util.List;

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
	public ProductModel editProductById(int productId,ProductModel product)
	{
		ProductModel prod=prodrepo.findById(productId).orElse(null);
		prod.setProductName(product.getProductName());
		prod.setDescription(product.getDescription());
		prod.setPrice(product.getPrice());
		prod.setImageUrl(product.getImageUrl());
		prod.setQuantity(product.getQuantity());
		ProductModel update=prodrepo.save(prod);
		return update;
	}
	public void editProductByName(ProductModel product, String productName)
	{
		ProductModel prod=prodrepo.findByProductName(productName);
        product.setDescription(prod.getDescription());
		product.setImageUrl(prod.getImageUrl());
        product.setPrice(prod.getPrice());
		product.setQuantity(prod.getQuantity());
		prodrepo.save(prod);
	}
	
	public ProductModel getProductById(int productId)
	{
		return prodrepo.findById(productId).orElse(null);
	
	}
	public ProductModel getProductByProdName(String productName)
	{
		return prodrepo.findByProductName(productName);
	}
}

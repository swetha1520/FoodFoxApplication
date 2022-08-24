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
		// ProductModel products=getProductById(productId);
		// product.setProductName(products.getProductName());
		// product.setImageUrl((products.getImageUrl()));
	    // product.setPrice(products.getPrice());
		// product.setDescription(products.getDescription());
		// product.setQuantity(products.getQuantity());
		return prodrepo.save(product);	
	}
	public void editProductByName(ProductModel product, String productName)
	{
		prodrepo.save(product);
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

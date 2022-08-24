package com.example.springboot.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.ProductModel;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<ProductModel,Integer>{

	@Query(value="select * from products where product_name=?1",nativeQuery=true)
	ProductModel findByProductName(String productName);
    @Query(value="delete from products where productId=?1",nativeQuery=true)
    void deleteByProductName(int productId);
 
	
}

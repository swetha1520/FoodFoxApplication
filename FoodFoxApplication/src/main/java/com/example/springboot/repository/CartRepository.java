package com.example.springboot.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.CartModel;

@Repository
@Transactional
public interface CartRepository extends JpaRepository<CartModel,Integer>{

	@Query(value="select * from cart where user_id=?1",nativeQuery=true)
	List<CartModel> findById(int userId);
	@Modifying
	@Query(value="delete from cart where user_id=?1",nativeQuery=true)
	void deletebyuserid(int userId);
}

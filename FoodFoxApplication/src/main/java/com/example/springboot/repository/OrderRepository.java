package com.example.springboot.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.OrderModel;

@Repository
@Transactional
public interface OrderRepository extends JpaRepository<OrderModel,Integer>{

	@Query(value="select * from orders where user_id=?1",nativeQuery=true)
	List<OrderModel> findByUserId(int userId);
}

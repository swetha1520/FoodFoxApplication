package com.example.springboot.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel,Integer> {

	UserModel findByEmailAndPassword(String email,String password);

    UserModel findUserIdByEmail(String email);

    
	
}

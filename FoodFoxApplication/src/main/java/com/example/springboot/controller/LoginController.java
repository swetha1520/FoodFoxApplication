package com.example.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.LoginModel;
import com.example.springboot.service.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

	@Autowired
	private UserService userservice;
	
	@PostMapping("/login")
	public boolean checkUser(@RequestBody LoginModel user)
	{
	   if(userservice.isloginsuccess(user.getEmail(), user.getPassword())) {
		   return true;
	   }
	   return false;
	}
}

package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.UserModel;
import com.example.springboot.service.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SignupController {

	@Autowired
	private UserService userservice;
	
	@GetMapping("/getUsers")
	public List<UserModel> getUsers()
	{
		return userservice.getUsers();
	}
	
	@PostMapping("/signup")
	public boolean saveUser(@RequestBody UserModel user)
	{
		if(userservice.isUserExists(user.getEmail(), user.getPassword()))
		{
			
			return false;
		}
		else
		{
			userservice.addUser(user);
			return true;
		}
		
	}

	@GetMapping("/user")
	public UserModel getUserByEmailAndPassword(@PathVariable String email,@PathVariable String password)
	{
		return userservice.getUserByEmailAndPassword(email, password);
	}

	@GetMapping("/userId/{email}")
	public int method(@PathVariable String email) {
		return userservice.getUserIdByEmail(email);
	}
}

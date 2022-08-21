package com.example.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.model.UserModel;
import com.example.springboot.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userrepo;
	
	public boolean addUser(UserModel user)
	{
		UserModel u=userrepo.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if(u!=null)
			return false;
		else
		{
			userrepo.save(user);
			return true;
		}
		
	}
	
	public boolean isUserExists(String email,String password)
	{
		UserModel user=userrepo.findByEmailAndPassword(email, password);
		if(user!=null)
			return true;
		else
			return false;
	}
	
	public List<UserModel> getUsers()
	{
		return userrepo.findAll();
	}
	
	public boolean isloginsuccess(String email,String password)
	{
		UserModel user=userrepo.findByEmailAndPassword(email, password);
		if(user==null)
			return false;
		else 
			return true;
	}
	public UserModel getUserByEmailAndPassword(String email,String password)
	{
		return userrepo.findByEmailAndPassword(email, password);
		
	}
	public int getUserIdByEmail(String email)
	{
		UserModel user=userrepo.findUserIdByEmail(email);
		return user.getUserId();
	}
}

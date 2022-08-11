package com.example.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name="cart")
public class CartModel {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int cartItemId;
	@Column
	@NotNull
	private int userId;
	@Column
	private String productName;
	@Column
	private int quantity;
	@Column
	private int price;
	
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "user_id", referencedColumnName = "userId")
//	private UserModel user_id;
	
	public int getCartItemId() {
		return cartItemId;
	}
	public void setCartItemId(int cartItemId) {
		this.cartItemId = cartItemId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
//	public UserModel getUser_id() {
//		return user_id;
//	}
//	public void setUser_id(UserModel userId) {
//		this.user_id = userId;
//	}
	
	
	
}
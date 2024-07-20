package com.onlinebookstore.onlinebookstore.Entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.antlr.v4.runtime.misc.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity   //for creating table
@Table(name="UserLogin", uniqueConstraints={@UniqueConstraint(columnNames = {"email" , "username" , "phone"} )})  //specify the name of table in database

public class UserLogin {
	
	@GeneratedValue(strategy=GenerationType.IDENTITY)  //auto increment
	@Id //primary key
	private Long uid;
	@NotNull
	private String name;
	@NotNull
	private Long phone;
	@NotNull
	private String email;
	@NotNull
	private String username;
	@NotNull
	private String password;
	

	 @OneToMany(mappedBy = "userlogin")
	 Set<Dashboard> dashboard;
	
	/* @OneToMany(mappedBy = "user_login", cascade = CascadeType.ALL, orphanRemoval = true)
	 @JsonIgnoreProperties("user_login")
	 private Set<Dashboard> dashboard = new HashSet<>();
	*/
	public Long getUid() {
		return uid;
	}
	public void setUid(Long uid) {
		this.uid = uid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getPhone() {
		return phone;
	}
	public void setPhone(Long phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}

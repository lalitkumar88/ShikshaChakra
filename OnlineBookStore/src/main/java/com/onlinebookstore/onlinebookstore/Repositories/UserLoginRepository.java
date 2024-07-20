package com.onlinebookstore.onlinebookstore.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.onlinebookstore.onlinebookstore.Entities.UserLogin;

public interface UserLoginRepository extends JpaRepository<UserLogin, Long> {


	@Query(value="select * from user_login ul where ul.email =(:query)", nativeQuery=true)
	UserLogin findbyemailid(@Param("query") String email);
	
	//@Query(value="update * from user_login ul where ul.email =(:query)", nativeQuery=true)
	//UserLogin updateUserDetails(@Param("query") String email);
	
	@Query(value="delete from user_login ul where ul.email =(:query)", nativeQuery=true)
	UserLogin deleteUserDetails(@Param("query") String email);
}
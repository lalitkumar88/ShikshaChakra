package com.onlinebookstore.onlinebookstore.Service;

import java.util.List;

import com.onlinebookstore.onlinebookstore.Entities.Courses;
import com.onlinebookstore.onlinebookstore.Entities.UserLogin;

public interface UserLoginService {
	
String signup(UserLogin userLogin);

String login(String email, String password);

List<UserLogin> getAll();

UserLogin updateUser(Long uid,UserLogin user);

String deleteUser(Long uid);

UserLogin findbyemailid(String email);

//UserLogin updateUserDetails(String email);

//String deleteUserDetails(String email);
}

package com.onlinebookstore.onlinebookstore.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinebookstore.onlinebookstore.Entities.Courses;
import com.onlinebookstore.onlinebookstore.Entities.UserLogin;
import com.onlinebookstore.onlinebookstore.Service.UserLoginService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/userlogin")
public class UserLogincontroller {
@Autowired
UserLoginService userLoginService;

@PostMapping("/signup")
public String signup(@RequestBody UserLogin userLogin)
{
	return userLoginService.signup(userLogin);
}

@GetMapping("/search/{email}/{password}")
public ResponseEntity<String> login(@PathVariable String email, @PathVariable String password)
{
	return ResponseEntity.ok(userLoginService.login(email, password));
}

@GetMapping("/showuser")
public List<UserLogin> getALL()
{
	return userLoginService.getAll();
}

@PutMapping("/updateuser/{uid}")
public UserLogin updateUser(@PathVariable Long uid, @RequestBody UserLogin user)
{
	   return userLoginService.updateUser(uid, user);
}

@DeleteMapping("/deleteuser/{uid}")
public String deleteUser(@PathVariable Long uid)
{		System.out.println("hii--"+uid);
	   return userLoginService.deleteUser(uid);
}

@GetMapping("/findbyemailid/{email}")
public UserLogin findbyemailid(@PathVariable String email) {
	return userLoginService.findbyemailid(email);
}
}

package com.onlinebookstore.onlinebookstore.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.onlinebookstore.onlinebookstore.Entities.UserLogin;
import com.onlinebookstore.onlinebookstore.Entities.UserLogin;
import com.onlinebookstore.onlinebookstore.Repositories.UserLoginRepository;
import com.onlinebookstore.onlinebookstore.Service.UserLoginService;

@Service
public class UserLoginServiceImpl implements UserLoginService {

	@Autowired
	UserLoginRepository userLoginRepository;
	
	@Override
	public String signup(UserLogin userLogin) {
		userLoginRepository.save(userLogin)	;
		return "Account has been created";
		}

	@Override
	public String login(String email, String password) {
		UserLogin userLogin=userLoginRepository.findbyemailid(email);
		
		if(userLogin!=null)
		{
			if(userLogin.getPassword().equals(password))
		return "you are welcome";
				
				return "Invalid password";
		}
		else
			return "kindly create account";
	}
	
	@Override
	public UserLogin updateUser(Long uid, UserLogin userlogin) {
		UserLogin p=userLoginRepository.findById(uid).get();
		p.setName(userlogin.getName());
		p.setPhone(userlogin.getPhone());
		p.setEmail(userlogin.getEmail());
		p.setUsername(userlogin.getUsername());
		p.setPassword(userlogin.getPassword());
		return userLoginRepository.save(p);
	}

	@Override
	public String deleteUser(Long uid) {
		System.out.println("hii implem"+uid);
		UserLogin ul=userLoginRepository.findById(uid).orElseGet(null);
		System.out.println("hii impl-"+uid);
		userLoginRepository.deleteById(uid);
		System.out.println("impl=="+uid);
		return "Your record has been deleted!";
		
	
		}

	@Override
	public List<UserLogin> getAll() {
		return userLoginRepository.findAll();
	}

	@Override
	public UserLogin findbyemailid(String email) {
		return userLoginRepository.findbyemailid(email);
	}

	


}

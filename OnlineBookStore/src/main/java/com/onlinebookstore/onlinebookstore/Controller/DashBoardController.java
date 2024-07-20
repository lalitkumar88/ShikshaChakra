package com.onlinebookstore.onlinebookstore.Controller;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinebookstore.onlinebookstore.Entities.Dashboard;
import com.onlinebookstore.onlinebookstore.Entities.UserLogin;
import com.onlinebookstore.onlinebookstore.Service.DashBoardService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/dashboard")
public class DashBoardController {
	@Autowired
	DashBoardService dashservice;
	
	@PostMapping("/save")
	public Dashboard save(@RequestBody Dashboard dashboard)
	{	System.out.println("Controller");
		return dashservice.create(dashboard);
	}

	
	@GetMapping("/showall")
	public List<Dashboard> getAll()
	{
		System.out.println("Controller1");
		return dashservice.getAll();
	}
	
	@GetMapping("/getbyuserid/{uid}")
	public Set<Dashboard> getByUserId(@PathVariable Long uid)
	{
		   return dashservice.getByUserId(uid);
	}
}
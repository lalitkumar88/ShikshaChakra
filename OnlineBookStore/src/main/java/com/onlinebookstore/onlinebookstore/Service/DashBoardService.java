package com.onlinebookstore.onlinebookstore.Service;

import java.util.List;
import java.util.Set;

import com.onlinebookstore.onlinebookstore.Entities.Dashboard;
import com.onlinebookstore.onlinebookstore.Entities.UserLogin;


public interface DashBoardService {
	
	Dashboard create(Dashboard dashboard);
	
	List<Dashboard> getAll();
	
	Set<Dashboard> getByUserId(Long uid);
	
	

}

package com.onlinebookstore.onlinebookstore.ServiceImpl;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinebookstore.onlinebookstore.Entities.Courses;
import com.onlinebookstore.onlinebookstore.Entities.Dashboard;
import com.onlinebookstore.onlinebookstore.Entities.UserLogin;
import com.onlinebookstore.onlinebookstore.Repositories.DashBoardRepository;
import com.onlinebookstore.onlinebookstore.Service.DashBoardService;

import jakarta.transaction.Transactional;

@Service
public class DashBoardServiceImpl implements DashBoardService{
	

	@Autowired
	DashBoardRepository dashRepository;

	

	@Override
	public Dashboard create(Dashboard dashboard) {
		System.out.println("serviceimpl");
		return dashRepository.save(dashboard);
	}

	@Override
	public List<Dashboard> getAll() {
		System.out.println("serviceimpl");
		return dashRepository.findAll();
		
	}

	@Override
	public Set<Dashboard> getByUserId(Long uid) {
		System.out.println("serviceimpl");
		return dashRepository.getByUserId(uid);
	}

	

}

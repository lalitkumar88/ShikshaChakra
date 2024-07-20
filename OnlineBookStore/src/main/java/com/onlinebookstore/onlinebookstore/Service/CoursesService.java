package com.onlinebookstore.onlinebookstore.Service;

import java.util.List;
import com.onlinebookstore.onlinebookstore.Entities.UserLogin;
import com.onlinebookstore.onlinebookstore.Entities.Courses;

public interface CoursesService {
	
	Courses createCourses(Courses courses);
	
	List<Courses> getAll();
	
	Courses findCoursesById(Long id);
	
	Courses updateCourses(Long id,Courses courses);
	
	String deleteCourses(Long id);
	
	 Courses findCoursesByCname(String cname);

	String findLinkById(long cid);
	 
	 
}

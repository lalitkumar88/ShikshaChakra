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
import com.onlinebookstore.onlinebookstore.Entities.Quizes;
import com.onlinebookstore.onlinebookstore.Service.CoursesService;

@CrossOrigin(origins="http://localhost:4200")
@RestController   //returns data in json format
@RequestMapping("/api/course")         //used to map web request onto specific controller class or controller method
public class CoursesController {

	@Autowired
	CoursesService coursesService;           
	
	@PostMapping("/add")  //adding record in table
	public Courses createCourses(@RequestBody Courses course)
	{
		return coursesService.createCourses(course);
	}
	
	@GetMapping("/show")
	public List<Courses> getALL()
	{
		return coursesService.getAll();
	}
	
   @GetMapping("/find/{id}")
   public Courses findById(@PathVariable Long id)
   {
	   return coursesService.findCoursesById(id);
   }
   
   @PutMapping("/update/{id}")
   public Courses updateCourses(@PathVariable Long id, @RequestBody Courses course)
   {
	   return coursesService.updateCourses(id, course);
   }
   
   @DeleteMapping("/delete/{id}")
   public String deleteCourses(@PathVariable Long id)
   {
	   return coursesService.deleteCourses(id);
   }
 
   @GetMapping("/findcoursebycname/{cname}")
   public Courses getCourseByCname(@PathVariable String cname) {
       return coursesService.findCoursesByCname(cname);
     
   }
   @GetMapping("/getlinkURL/{cid}")
   public String getlinkURL(@PathVariable long cid) {
	   return coursesService.findLinkById(cid);
   }
  
   
}

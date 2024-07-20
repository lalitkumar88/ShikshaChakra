package com.onlinebookstore.onlinebookstore.ServiceImpl;

import java.util.List;

//import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinebookstore.onlinebookstore.Entities.Courses;
import com.onlinebookstore.onlinebookstore.Repositories.CoursesRepository;
import com.onlinebookstore.onlinebookstore.Service.CoursesService;

@Service
public class CoursesServiceImpl implements CoursesService{
	
	@Autowired(required = true)
	CoursesRepository coursesRepository;
	
	@Override
	public Courses createCourses(Courses book) {
		return	coursesRepository.save(book);
	}

	@Override
	public List<Courses> getAll() {
		return coursesRepository.findAll();
	}

	@Override
	public Courses findCoursesById(Long id) {
		return coursesRepository.findById(id).get();
	}

	@Override
	public Courses updateCourses(Long id, Courses book) {
		Courses p=coursesRepository.findById(id).get();
		p.setCname(book.getCname());
		p.setDescription(book.getDescription());
		p.setDuration(book.getDuration());
		p.setImglink(book.getImglink());
		p.setLink(book.getLink());
		p.setPrice(book.getPrice());
		return coursesRepository.save(p);
	}

	@Override
	public String deleteCourses(Long id) {
		
		coursesRepository.findById(id).get();
		coursesRepository.deleteById(id);
		System.out.println("hii implem"+id);
		return "Your record has been deleted!";
		
	
		}

	@Override
	public Courses findCoursesByCname(String cname) {
		return coursesRepository.findCoursesByCname(cname);
	}

	@Override
	public String findLinkById(long cid) {
		return coursesRepository.findLinkByCid(cid);

	}
}

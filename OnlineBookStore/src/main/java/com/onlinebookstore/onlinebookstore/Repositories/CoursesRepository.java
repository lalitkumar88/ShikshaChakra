package com.onlinebookstore.onlinebookstore.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.onlinebookstore.onlinebookstore.Entities.Courses;
import com.onlinebookstore.onlinebookstore.Entities.Quizes;

public interface CoursesRepository extends JpaRepository<Courses,Long> {
	
    Courses findCoursesByCname(String topic);
    
    @Query(value="select c.link from courses c where c.cid=(:query)", nativeQuery=true)
	String findLinkByCid(@Param("query") long cid);
}

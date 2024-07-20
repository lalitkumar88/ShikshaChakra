package com.onlinebookstore.onlinebookstore.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;

import com.onlinebookstore.onlinebookstore.Entities.Quizes;

public interface QuizesRepository extends JpaRepository<Quizes, Long>{
	//@Query("select q.topic from quizes q group by(q.topic)")
    List<Quizes> findByTopic(String topic);
	
}
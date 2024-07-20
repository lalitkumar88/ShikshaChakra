package com.onlinebookstore.onlinebookstore.Service;

import java.util.List;

import com.onlinebookstore.onlinebookstore.Entities.Quizes;

public interface QuizesService {
	
	Quizes createQuizes(Quizes quiz);
	
	List<Quizes> getAll();
	
	Quizes findQuizesById(Long qid);
	
	Quizes updateQuizes(Long qid,Quizes quiz);
	
	String deleteQuizes(Long qid);
	
	List<Quizes> getCoursesByTopic(String topic);
}

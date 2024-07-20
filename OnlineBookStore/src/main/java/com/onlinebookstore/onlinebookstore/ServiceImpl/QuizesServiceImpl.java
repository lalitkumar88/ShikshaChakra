package com.onlinebookstore.onlinebookstore.ServiceImpl;

import java.util.List;

//import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinebookstore.onlinebookstore.Entities.Quizes;
import com.onlinebookstore.onlinebookstore.Repositories.QuizesRepository;
import com.onlinebookstore.onlinebookstore.Service.QuizesService;

@Service
public class QuizesServiceImpl implements QuizesService{
	
	@Autowired  
	QuizesRepository quizRepository;
	
	@Override
	public Quizes createQuizes(Quizes book) {
		return	quizRepository.save(book);
	}

	@Override
	public List<Quizes> getAll() {
		return quizRepository.findAll();
	}

	@Override
	public Quizes findQuizesById(Long qid) {
		return quizRepository.findById(qid).get();
	}

	@Override
	public Quizes updateQuizes(Long qid, Quizes quiz) {
		Quizes p=quizRepository.findById(qid).get();
		p.setQuestion(quiz.getQuestion());
		p.setTopic(quiz.getTopic());
		p.setOption_1(quiz.getOption_1());
		p.setOption_2(quiz.getOption_2());
		p.setOption_3(quiz.getOption_3());
		p.setOption_4(quiz.getOption_4());
		p.setAnswer(quiz.getAnswer());
		return quizRepository.save(p);
	}

	@Override
	public String deleteQuizes(Long qid) {
		quizRepository.findById(qid).get();
		quizRepository.deleteById(qid);
		return "Your record has been deleted!";	
		}

	@Override
	public List<Quizes> getCoursesByTopic(String topic) {
		 return quizRepository.findByTopic(topic);
	}

}
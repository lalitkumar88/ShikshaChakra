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
import com.onlinebookstore.onlinebookstore.Entities.Quizes;
import com.onlinebookstore.onlinebookstore.Service.QuizesService;


@CrossOrigin(origins="http://localhost:4200")
@RestController   //returns data in json format
@RequestMapping("/api/quiz")         //used to map web request onto specific controller class or controller method
public class QuizesController {

	@Autowired
	QuizesService quizService;           
	
	@PostMapping("/add")  //adding record in table
	public Quizes createQuizes(@RequestBody Quizes quiz)
	{
		return quizService.createQuizes(quiz);
	}
	
	@GetMapping("/show")
	public List<Quizes> getALL()
	{
		return quizService.getAll();
	}
	
   @GetMapping("/find/{id}")
   public Quizes findById(@PathVariable Long qid)
   {
	   return quizService.findQuizesById(qid);
   }
   
   @PutMapping("/update/{qid}")
   public Quizes updateQuizes(@PathVariable Long qid, @RequestBody Quizes quiz)
   {
	   return quizService.updateQuizes(qid, quiz);
   }
   
   @DeleteMapping("/delete/{qid}")
   public String deleteQuizes(@PathVariable("qid") Long qid)
   {	System.out.println("hii--"+qid);
	   return quizService.deleteQuizes(qid);
   }
 
   @GetMapping("/topic/{topic}")
   public ResponseEntity<List<Quizes>> getQuizByTopic(@PathVariable String topic) {
       List<Quizes> courses = quizService.getCoursesByTopic(topic);
       return ResponseEntity.ok(courses);
   }
  
}

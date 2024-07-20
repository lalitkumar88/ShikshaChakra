package com.onlinebookstore.onlinebookstore.Entities;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

//import jakarta.persistence.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity   //for creating table
@Table(name="quizes")   //specify the name of table in database
public class Quizes {
		 
		@Id //primary key
	 	@GeneratedValue(strategy=GenerationType.IDENTITY)  //for auto incrementing   
	 	private Long qid;
		private String topic;
		private String question;
		private String option_1;
		private String option_2;
		private String option_3;
		private String option_4;
		private String answer;
		
		
		public Long getQid() {
			return qid;
		}
		public void setQid(Long qid) {
			this.qid = qid;
		}
		public String getTopic() {
			return topic;
		}
		public void setTopic(String topic) {
			this.topic = topic;
		}
		public String getQuestion() {
			return question;
		}
		public void setQuestion(String question) {
			this.question = question;
		}
		public String getOption_1() {
			return option_1;
		}
		public void setOption_1(String option_1) {
			this.option_1 = option_1;
		}
		public String getOption_2() {
			return option_2;
		}
		public void setOption_2(String option_2) {
			this.option_2 = option_2;
		}
		public String getOption_3() {
			return option_3;
		}
		public void setOption_3(String option_3) {
			this.option_3 = option_3;
		}
		public String getOption_4() {
			return option_4;
		}
		public void setOption_4(String option_4) {
			this.option_4 = option_4;
		}
		public String getAnswer() {
			return answer;
		}
		public void setAnswer(String answer) {
			this.answer = answer;
		}
		
		
			
}	
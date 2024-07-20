import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './Course';
import { customer } from './Customer';
import { login } from './Login';
import { signup } from './Signup';
import { Quizes } from './Quizes';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http:HttpClient) { }
  quizTopic:string='';
 
  getAllQuizes() // calling API
  {
    const url="http://localhost:8080/api/quiz/show";
    return this.http.get(url);
  }
  findByTopic(topic:string) // calling API
  {
    const url="http://localhost:8080/api/quiz/topic/"+topic;
    return this.http.get(url);
  }
}

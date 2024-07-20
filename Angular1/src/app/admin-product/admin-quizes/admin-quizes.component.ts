import { Component } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';
import { Quizes } from '../../Quizes';
import { QuizServiceService } from '../../quiz-service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-admin-quizes',
  templateUrl: './admin-quizes.component.html',
  styleUrl: './admin-quizes.component.css'
})
export class AdminQuizesComponent {
  constructor(private httpService: HttpServiceService,private quizService:QuizServiceService,private router:Router){} // this is dependency injection 
  posts:any;
  model:any;
  topic:string='';
  //model2:any;

  ngOnInit(){ // called by default as our web page loaded in browser
    //this.topic=this.quizService.quizTopic;
    this.topic= String(sessionStorage.getItem('topic'));
    console.log("Topic of Quiz"+this.topic)
    this.quizService.findByTopic(this.topic).subscribe(
      (response)=>{this.posts=response; 
      //console.log(this.posts)
    },
      (error)=>{console.log(error)}
    );
  }

  update(qid:number, topic:string, question:string, option_1:string, option_2:string, option_3:string, option_4:string, answer:string){
    
    this.model=new Quizes(qid,topic,question,option_1,option_2,option_3,option_4,answer);
    this.httpService.updatequiz(this.model).subscribe(
      (response)=>{this.posts=response;
      console.log(this.posts);
    });
   window.location.reload();
  }

  delete(qid:number){
    console.log("qid==="+qid);
    this.httpService.deletequiz(qid).subscribe(
      (response)=>{this.posts=response;
      }
      );
   window.location.reload();
  }

  model3=new Quizes(1,String(sessionStorage.getItem("topic")),"Question","option-1","option-2","option-3","option-4","answer");
  createquiz(){
    
    this.httpService.createquiz(this.model3).subscribe(
      (response)=>(console.log(response))
      );
     window.location.reload();
    
  }
  Back(){
    
    this.router.navigate(["/quiz-topic"])
  }
}

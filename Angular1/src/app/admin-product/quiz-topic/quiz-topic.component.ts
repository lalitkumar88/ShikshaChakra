import { Component } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';
import { Quizes } from '../../Quizes';
import { Router } from '@angular/router';
import { QuizServiceService } from '../../quiz-service.service';

@Component({
  selector: 'app-quiz-topic',
  templateUrl: './quiz-topic.component.html',
  styleUrl: './quiz-topic.component.css'
})
export class QuizTopicComponent {
  posts:any;
  uniqueTopics:any;
  Qtopic:any;
  i:any;
  //topic:string='';
  uniqueValues: string[] = [];
  topics: string[] = [];

  constructor(private quizService: QuizServiceService,private router: Router){} // this is dependency injection 

  ngOnInit(){ // called by default as our web page loaded in browser
    //this.topic=this.quizService.quizTopic;
    this.quizService.getAllQuizes().subscribe(
      (response)=>{this.posts=response; 
        
        let Obj=this.posts;
        console.log('\nValues:');
        for (const key in  Obj) {
          if (Obj.hasOwnProperty(key)) {
            //console.log(Obj[key])
            this.i=Obj[key]
            this.Qtopic=this.i.topic;
            this.topics.push(this.Qtopic);
            //console.log(this.Qtopic);
           // console.log(this.topics);
          }
          
       }
      
       this.extractUniqueValues();
      //console.log(this.posts);
    },
      (error)=>{console.log(error)}
    );
  }
 

  extractUniqueValues(): void {
    const uniqueValuesSet = new Set<string>(this.topics);
    this.uniqueValues = Array.from(uniqueValuesSet);
    console.log(this.uniqueValues)
  }

 
  GotoAdminQuizes(topic:string){
  console.log(topic);
  this.quizService.quizTopic=topic;
  sessionStorage.setItem("topic",topic);
    this.router.navigate(['/adminquizes']); 
}

Back(){
  this.router.navigate(['/admin-product'])
}
}

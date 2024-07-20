import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';
import { Cart } from '../../Cart';
import { keyframes } from '@angular/animations';
import { Quizes } from '../../Quizes';
import { QuizServiceService } from '../../quiz-service.service';

@Component({
  selector: 'app-user-quizes',
  templateUrl: './user-quizes.component.html',
  styleUrl: './user-quizes.component.css'
})
export class UserQuizesComponent {
  posts:any;
  uniqueTopics:any;
  cart1:Cart[]=new Array();
  Qtopic:any;
  i:any;
  uniqueValues: string[] = [];
  topics: string[] = [];

  constructor(private quizService: QuizServiceService,private router: Router){}

  ngOnInit(){ // called by default as our web page loaded in browser
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

explore_quizes(topic:string){
  console.log(topic);
  this.quizService.quizTopic=topic;
    this.router.navigate(['/quiz']); 
}
}




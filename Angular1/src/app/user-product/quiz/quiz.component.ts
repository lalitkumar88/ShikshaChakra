import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';
import { Cart } from '../../Cart';
import { keyframes } from '@angular/animations';
import { Quizes } from '../../Quizes';
import { QuizServiceService } from '../../quiz-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  generatedArray: number[] = [];
  constructor(private quizService: QuizServiceService,private router: Router){ }
  topic:string='';
  quiz1:any;
  length:any;
  buttonDisabled: boolean = false;
  nextDisabled: boolean = false;
  submitQuizDisabled: boolean = true;
  index:number=0;
  ngOnInit(){ 
    this.topic=this.quizService.quizTopic;
    console.log("Topic of Quiz"+this.topic)
    this.quizService.findByTopic(this.topic).subscribe(
      (response)=>{this.quiz1=response; 
        { 
            this.length=this.quiz1.length
            console.log(this.length);
            console.log(this.quiz1)
            this.generateArray(this.length);
            

          }
          
       },    
    );
  }
  nextQuestion(){
    this.buttonDisabled=false;
    let temp = this.index
    temp+=1
    console.log(this.index, temp, this.length)
   
    if(temp < this.length){
      this.index++;
    }
    if(temp==this.length){this.submitQuizDisabled=false; this.nextDisabled=true; this.buttonDisabled=true;}
  }

  generateArray(length: number): void {
    this.generatedArray = Array.from({length}, (_, i) => i);
  }

  option:string=""
  optionSelected(option : string){
    this.option=option;
    console.log("option:"+this.option)
  }

  question:string="";
  marks :number=0;
  color:string='';
  answerSelected(q : string)
  {
    this.buttonDisabled=true;
    this.question=q;
    console.log("question:"+this.question)
    console.log("Attempted:"+ this.option)

    for(let i of this.generatedArray){
      if(this.quiz1[i].question == this.question ) {
        console.log("OriginalAnswer"+ this.quiz1[i].answer)
        console.log("option::"+this.option)
        
        if(this.quiz1[i].answer == this.quiz1[i][this.option]){
          this.marks += 1
          console.log("Correct Answer"+this.marks)
          this.color="green";

        }else{
          this.color="red";
          console.log("Wrong Answer"+this.marks)
        }
      }

    }
    
  }

  submitQuiz(){
    console.log("Total Marks Scored"+this.marks);
    alert("You Scored " +this.marks+" out of" + this.length)
  }

  BackToQuiz(){
    this.router.navigate(['./user-quizes']);
  }
}
   /* this.topic=this.quizService.quizTopic;
  console.log("hello:"+this.topic);
  this.quizService.findByTopic(this.topic).subscribe(
    (response)=>{ this.quiz1=response;
      console.log(this.quiz1)*/
 
  

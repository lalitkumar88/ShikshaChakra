import { Component } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';
import { Course } from '../../Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrl: './admin-courses.component.css'
})
export class AdminCoursesComponent {

  constructor(private httpService: HttpServiceService,private router:Router){} // this is dependency injection 
      posts:any;
      model:any;
      //model2:any;

      ngOnInit(){ // called by default as our web page loaded in browser
        this.httpService.getAllCourse().subscribe(
          (response)=>{this.posts=response; 
          //console.log(this.posts)
        },
          (error)=>{console.log(error)}
        );
      }

      update(cid:number, cname:string, duration:string, description:string, link:string, imglink:string, price:string){
        this.model=new Course(cid,cname,duration,description,link,imglink, price);
        this.httpService.update(this.model).subscribe(
          (response)=>{this.posts=response;
          console.log(this.posts);
        });
      window.location.reload();
      }

      delete(cid:number){
        console.log("cid==="+cid);
        this.httpService.delete(cid).subscribe(
          (response)=>{this.posts=response;}
          );
        window.location.reload();
      }

      model2=new Course(1,"Course Name","1 hr","Good Course","https://media.istockphoto.com/id/1453081662/photo/bookstore-in-the-city-center-of-lisbon.jpg?s=2048x2048&w=is&k=20&c=y-1oauy6OC5WKHqhr_2CfHTGk67hP0QMxGauv73DXT8=",
                      "https://media.istockphoto.com/id/1453081662/photo/bookstore-in-the-city-center-of-lisbon.jpg?s=2048x2048&w=is&k=20&c=y-1oauy6OC5WKHqhr_2CfHTGk67hP0QMxGauv73DXT8=","free");
      create(){
        
        this.httpService.create(this.model2).subscribe(
          (response)=>(console.log(response))
          );
         window.location.reload();
        
      }
      
      Back(){
        this.router.navigate(['/admin-product'])
      }
     

}  
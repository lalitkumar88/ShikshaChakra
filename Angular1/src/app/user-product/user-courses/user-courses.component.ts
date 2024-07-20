import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';
import { Cart } from '../../Cart';
@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrl: './user-courses.component.css'
})
export class UserCoursesComponent {
  posts:any;
  constructor(private userService: UserServiceService,private router: Router){}
  cart1:Cart[]=new Array();
  count=new Array();
  ngOnInit(){ // called by default as our web page loaded in browser
    this.userService.getAllCourse().subscribe(
      (response)=>{this.posts=response; 
      console.log(this.posts)
    },
      (error)=>{console.log(error)}
    );
  }
explore_course(cid:number){
    this.userService.cid = cid;
    this.router.navigate(['/courses']);
  
}
}

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';
import { Course } from '../Course';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { customer } from '../Customer';
import { UserServiceService } from '../user-service.service';
import { Dashboard } from '../../dashboard';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrl: './user-product.component.css'
})

export class UserProductComponent {
  username:string="USER";
  posts:any;
  dashboardDetail:any;
  constructor(private userService: UserServiceService,private router: Router){}
  result:any;
  course_result:any;
  useremail:string="";
  count=new Array();

  ngOnInit(){ // called by default as our web page loaded in browser
    this.userService.getAllCourse().subscribe(
      (response)=>{this.posts=response; 
      //console.log(this.posts)
      this.username=String(sessionStorage.getItem("uname"));
        console.log("usr name="+this.username);

    },
      (error)=>{console.log(error)}
    );
  }

  explorecourse(cid:number){
      console.log(cid);
      this.userService.cid = cid;

      this.useremail=String(sessionStorage.getItem("currentUser"));
      console.log("Variable Value=="+this.useremail);

      this.userService.findbyemailid(this.useremail).subscribe(
        (response) => {this.result=response

          this.userService.findCourseById(cid).subscribe((response)=>{ 
            
                this.course_result=response;            
                console.log("UID is::"+this.result.uid+"  CID is:::"+this.course_result.cid)
                sessionStorage.setItem("uid",this.result.uid);
                sessionStorage.setItem("cid",this.course_result.cid);
                console.log("Session CID::"+sessionStorage.getItem("cid"));
                console.log("Session UID::"+sessionStorage.getItem("uid"));
           
                  this.userService.CreateDashboard(Number(sessionStorage.getItem('uid')),Number(sessionStorage.getItem('cid'))).subscribe(
                   (response)=> { 
                  this.dashboardDetail=response;
                  console.log("Dashboard==="+this.dashboardDetail)
                  alert("Course Added to Dashboard Successfully-");
                  this.userService.cid = cid;
                  this.router.navigate(['/courses']);
              })              
            })
          }) 
}
      
  
  home(){
   
    this.router.navigate(['/user-product']);
  }
 
  dashboard(){
    this.router.navigate(['/user-dashboard']);
  }

 
  courses(){ this.router.navigate(['/user-courses']);
  }

  quizes(){
    this.router.navigate(['/user-quizes']);
  }
  profile(){
    this.router.navigate(['/user-profile']);
  }
  about(){
    this.router.navigate(['/about']);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }


}

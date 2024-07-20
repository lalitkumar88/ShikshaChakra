import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';
import { Course } from '../Course';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { login } from '../Login';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts:any;
  constructor(private userService: UserServiceService,private router: Router){}
  

model=new login('','');
username:string='USER'
result:any;
userlogin(){
  if(this.model.email!=""  && this.model.password!=""){
  this.userService.userlogin(this.model).subscribe(
    (response:string)=>{this.posts=response;
      console.log(this.posts);
    if(this.posts=="you are welcome"){

      this.userService.findbyemailid(this.model.email).subscribe((response)=>{
        this.result=response;
        console.log("result is::"+this.result.name)
        sessionStorage.setItem('uname',this.result.name)
        sessionStorage.setItem("userId",this.result.uid)

      this.router.navigate(['./user-product']);
      this.userService.user_email=this.model.email; 
        
      })
    }
      else
        alert("Enter Valid Credentials, Please Create an Account if not.");
  }
  );
}else alert("Please Enter Value in the input field.");
}


usersignup(){
  this.router.navigate(['./signup']);
}

adminlogin(){
  console.log(this.model.email)
  if(this.model.email==="admin"  && this.model.password==="admin123")
  this.router.navigate(['./admin-product']);
  
  else
  alert("Please enter VALID Credentials")
  }

}

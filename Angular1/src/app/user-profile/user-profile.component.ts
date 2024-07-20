import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { signup } from '../Signup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  constructor(private userService: UserServiceService,private router: Router){} // this is dependency injection 
      posts:any;
      model:any;
      useremail:string="";
      //model2:any;

      ngOnInit(){ // called by default as our web page loaded in browser
       // this.model=this.userService.usermodel;
       // this.useremail = this.model.email;
        this.useremail=String(sessionStorage.getItem("currentUser"));
        this.userService.findbyemailid(this.useremail).subscribe(
          (response)=>{this.posts=response; 
          console.log(this.posts)
          
        },
          (error)=>{console.log(error)}
        );
      }

      update(uid:number, name:string, phone:number, email:string, username:string, password:string){
        this.model=new signup(uid, name, phone, email,username, password);
        this.userService.updateUser(this.model).subscribe(
          (response)=>{this.posts=response;
          console.log(this.posts);
        });
      //window.location.reload();
      }

      delete(uid:number){
        console.log("uid==="+uid);
        this.userService.deleteUser(uid).subscribe(
          (response)=>{this.posts=response;}
          );
        this.router.navigate(['./home']);
       
      }
      GotoHome(){
        this.router.navigate(['./user-product']);
      }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { login } from '../Login';
import { UserServiceService } from '../user-service.service';
import { signup } from '../Signup';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  posts:any;
  constructor(private userService: UserServiceService,private router: Router){}
  model = new signup(1,'',91,'','','');
  usersignup(){
    if(this.model.name=="" || this.model.username==""||this.model.phone==91 || this.model.email==""||this.model.password==""){
      alert("Input Field must not be empty")
    }
    else{
          if(this.model.phone.toString.length == 12){
            if(this.model.email.includes('@gmail.com')){
              
              if(this.model.password.includes('@') || this.model.password.includes('#')|| this.model.password.includes('%')||this.model.password.includes('&') || this.model.password.includes('$')){
                this.userService.usersignup(this.model).subscribe(
                  (response:string)=>{    
                    this.posts=response;
                    alert(this.posts);
                    this.router.navigate(['/home']);
                  },
                    error=>console.log(error)
                )
              } else alert("Password must contain at least one symbol [@#%&$]");
            }else alert("Please enter a Valid Email");
   
          }else alert("Please enter a Valid Mobile Number");

    
          
    }
      
  }
  userlogin(){
    this.router.navigate(['/home']);
  }

}

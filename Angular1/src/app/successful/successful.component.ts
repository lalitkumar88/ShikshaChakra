import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { customer } from '../Customer';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrl: './successful.component.css'
})
export class SuccessfulComponent {
  posts:any;
  constructor(private userService: UserServiceService,private router: Router){}
 /* phone:number=0;
  ngOnInit(){ // called by default as our web page loaded in browser
    this.userService.displayorder(customer).subscribe(
      (response)=>{this.posts=response; 
      //console.log(this.posts)
    },
      (error)=>{console.log(error)}
    );
  }*/
}

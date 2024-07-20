import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Course } from '../Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.css'
})
export class AdminProductComponent {

  // cerate the constructor of service here to access service
  constructor(private httpService: HttpServiceService,private router: Router){} // this is dependency injection 
    
  admincourses(){
    this.router.navigate(['/admincourses']);
  }
  adminquizes(){
    this.router.navigate(['/quiz-topic']);
  }
   
  Back(){
    this.router.navigate(['./home'])
  }
}  

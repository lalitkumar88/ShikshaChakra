import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';
import { Cart } from '../../Cart';
import { Dashboard } from '../../../dashboard';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  courses:any;
  dashboardCourse=new Array();
  op=new Array();
  uniqueArray: number[]=[];

  constructor(private userService: UserServiceService,private router: Router){}
  

  uni_mail:any;
  useremail:string="";
  userdetail :any;
  uid:number=0;
  cid:number=0;
  count=new Array();
  dashboard:any;
  
  ngOnInit(){ // called by default as our web page loaded in browser
   //  this.useremail=this.userService.usermodel.email;
     console.log("Session Storage::"+sessionStorage.getItem("currentUser"));
     this.useremail=String(sessionStorage.getItem("currentUser"));
     
    //this.useremail=localStorage.getItem('currentmail');
   // console.log("email is::"+this.userService.universalmail)
    console.log("Variable Value=="+this.useremail);
    if(sessionStorage.getItem('currentUser')==null){this.useremail=''}
    console.log("Variable Value=="+this.useremail);

    if(this.useremail!=''){
    this.userService.findbyemailid(this.useremail).subscribe(
      (response)=>{this.userdetail=response; console.log(this.userdetail.uid); this.uid = this.userdetail.uid
    

    this.userService.GetDashByUserId(this.uid).subscribe(
      (response)=>{
        
      this.courses=response; 
      console.log(this.courses)
      for(let i of this.courses){
        this.cid=i.courses.cid;
        console.log(this.cid);
        this.count.push(i.courses.cid);
      }
      
      
      console.log(this.count)
      let uniqueArray: number[] = [];
      const map = new Map<number, boolean>();
  
      this.count.forEach(item => {
        if (!map.has(item)) {
          map.set(item, true); // mark item as seen
          uniqueArray.push(item);
        }
      });
      
     console.log("UniqueArray="+uniqueArray)
  
    

      for(let i of uniqueArray){
        console.log(i)
      this.userService.findCourseById(i).subscribe(
        (response)=>{
          this.op.push(response);
          this.dashboard = this.op.map((el, key) => el.team)
          .filter((item, i, ar) => ar.indexOf(item) === i);
          
        },
      )
    }
    console.log(this.op);  
    console.log("The unique set of teams :" , this.dashboard); 
    },
      (error)=>{console.log(error)}
    );
    
  }
    )}
    else{ 
      alert('session not found');
      this.router.navigate(['/home']);
   }
}


  course_result:any;
  explore_course(cid:number) {
    console.log(cid);
    this.userService.cid = cid;

    //console.log("Session CID::"+sessionStorage.getItem("cid"));
    this.router.navigate(['/courses']);
    this.userService.findCourseById(cid).subscribe((response)=>{ this.course_result=response;
      console.log("Course Detail:"+this.course_result.cname);
    })
  }


  home(){ this.router.navigate(['/user-product']); }

  allcourses(){ this.router.navigate(['/user-courses']); }

  quizes(){ this.router.navigate(['/user-quizes']); }
 
  about(){ this.router.navigate(['/about']); }

}

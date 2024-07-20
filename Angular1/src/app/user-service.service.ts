import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './Course';
import { customer } from './Customer';
import { login } from './Login';
import { signup } from './Signup';
import { Quizes } from './Quizes';
import { Dashboard } from '../dashboard';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  usermodel = new signup(1,"",91,"","","");
  usercourses = new Course(1,"","","","","","");
  user_email:string='';
  coursedetails:any;

  constructor(private http:HttpClient) { }
  
  getAllCourse() // calling API
  {
    const url="http://localhost:8080/api/course/show";
    return this.http.get(url);
  }
  

  cid:any;
  findCourseById(courseid:number){
    const url="http://localhost:8080/api/course/find/"+courseid;
    return this.http.get(url);
  }
  
  findCourseByCname(cname:string) // calling API
  {
    const url="http://localhost:8080/api/course/findcoursebycname/"+cname;
    return this.http.get(url);
  }

  PlaceOrder(cust:customer){
    const url="http://localhost:8080/api/course/orderproduct";
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.post(url,cust,{headers,'responseType':'text'});
  }

  //universalmail:any;
  userlogin(model:login){
    const url="http://localhost:8080/api/userlogin/search/"+model.email+"/"+model.password;
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    //localStorage.setItem("currentmail",model.email);
    sessionStorage.setItem("currentUser",model.email); 
    return this.http.get(url,{headers,'responseType':'text'});
    
  
  }
 usersignup(model:login){
  const url="http://localhost:8080/api/userlogin/signup";
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.post(url,model,{headers,'responseType':'text'});
  
 }

 displayorder(model:customer){
  const url="http://localhost:8080//findbyOrder/"+model.phone;
  return this.http.get(url);

 }
 getUserDetails() // calling API
 {
   const url="http://localhost:8080/api/userlogin/showuser";
   return this.http.get(url);
 }
 
 updateUser(s:signup){
  console.log(s);
  const url="http://localhost:8080/api/userlogin/updateuser/"+s.uid;
  var headers=new HttpHeaders({'Content-Type':'application/json'});
  return this.http.put(url,s,{headers});
}

deleteUser(uid:number){
  console.log("user deleted");
  const url="http://localhost:8080/api/userlogin/deleteuser/"+uid;
  return this.http.delete(url);
}

findbyemailid(email:string) // calling API
{ 
  const url="http://localhost:8080/api/userlogin/findbyemailid/"+email;
  console.log("Url is=="+url);
  return this.http.get(url);
}

// CreateDashboard(model:Dashboard){
//   const url="http://localhost:8080/api/dashboard/save";
//     var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'json'});
//     return this.http.post(url,model,{headers,'responseType':'json'});
// }

CreateDashboard(userloginUid: number, courseCid: number) {
  const data = {
    userlogin: { uid: userloginUid },
    courses: { cid: courseCid }
  };
  const url="http://localhost:8080/api/dashboard/save";
  var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'json'});
  return this.http.post(url,data,{headers,'responseType':'json'});
}

GetDashByUserId(user_id:number){
const url="http://localhost:8080/api/dashboard/getbyuserid/"+ user_id;
console.log(url)
return this.http.get(url);
}

}
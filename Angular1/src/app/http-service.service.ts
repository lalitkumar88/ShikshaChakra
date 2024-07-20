import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './Course';
import { customer } from './Customer';
import{ Quizes } from './Quizes';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  
  getAllCourse() // calling API
  {
    const url="http://localhost:8080/api/course/show";
    return this.http.get(url);
  }

  update(p:Course){
    console.log(p);
    const url="http://localhost:8080/api/course/update/"+p.cid;
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(url,p,{headers});
  }

  delete(cid:number){
    console.log("course deleted");
    const url="http://localhost:8080/api/course/delete/"+cid;
    return this.http.delete(url);
  }

  create(model:Course){
    const url="http://localhost:8080/api/course/add";
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,model,{headers});     //,'responseType':'application/json'});
 
  }

  getProductquiz() // calling API
  {
    const url="http://localhost:8080/api/quiz/show";
    return this.http.get(url);
  }

  updatequiz(q:Quizes){
    console.log(q);
    const url="http://localhost:8080/api/quiz/update/"+q.qid;
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(url,q,{headers});
  }

  deletequiz(qid:number){
    console.log("hiii");
    const url="http://localhost:8080/api/quiz/delete/"+qid;
    return this.http.delete(url);
  }

  createquiz(model:Quizes){
    const url="http://localhost:8080/api/quiz/add";
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,model,{headers});  
}
}
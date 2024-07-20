import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { youtube } from '../../youtube.service'; 
import { ObservableInput, switchMap, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  [x: string]: any;
  videos: any[]=[];
  channels:any;
  playlist:any;
  playlistId:string='';
  Array:string[]=[];
  constructor(private youTubeService: youtube,private sanitizer: DomSanitizer,private router:Router, private userService: UserServiceService) {  }
  
  ngOnInit() {
   
    console.log("Session CID?==>"+sessionStorage.getItem("cid"));
    console.log("Hi Aniket" + this.userService.cid);
    this.youTubeService.getLinkURL(Number(this.userService.cid)).subscribe((response1)=>{
      this.playlistId = response1;
      console.log("LInk is::"+this.playlistId)
    
      this.youTubeService.getVideosForChanel(this.playlistId, 6).subscribe((response)=>{
      console.log("Response Link=="+response)
      this.playlist = response
      for(let i of this.playlist.items){
        console.log("III==="+i.snippet.resourceId.videoId);
        this.Array.push(i.snippet.resourceId.videoId);

        
      }
      console.log("Array>>>"+this.Array);
     
    
      
      
      })
    })

    }
    dangerousVideoUrl:any;
    getVideoUrl(videoId: string): SafeResourceUrl {
      console.log("VideoId::"+videoId)

      this.dangerousVideoUrl = 'https://www.youtube.com/embed/' +videoId+'?rel=0&modestbranding=1';
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

    } 


    home(){ this.router.navigate(['./user-product']); }

    allcourses(){ this.router.navigate(['/user-courses']); }
  
    quizes(){ this.router.navigate(['/user-quizes']); }

    logout(){sessionStorage.clear(); this.router.navigate(['./home']); }
   
}

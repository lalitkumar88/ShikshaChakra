import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class youtube {

  apiKey : string = 'AIzaSyA8yr6XqU8ZsyuGEwzac8_N7biK3sqer0g';

  constructor(public http: HttpClient) { }
    getLinkURL(cid:number){
        const url="http://localhost:8080/api/course/getlinkURL/"+ cid;
        //console.log(url)
        return this.http.get(url,{responseType:'text'});

    }

    getVideosForChanel(playlist:string, maxResults:number) {
    let url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&playlistId="+playlist+"&key="+this.apiKey ;
    return this.http.get(url);
    
  }


  getYtVideos(playListId:string): Promise<any[]> {
      
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playListId}&key=${this.apiKey}`
    )
      .then((data) => data.json())
      .then((list) => list.items);
  }
}


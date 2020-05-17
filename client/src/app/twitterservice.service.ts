import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterserviceService {
  api_url = 'http://localhost:3000';
  constructor(private http: HttpClient ) {}

  getTimeline() {
    return this.http
      .get<any[]>(this.api_url+'/home_timeline')
      .pipe(map(data => data));

  }

  getMentions() {
    return this.http
      .get<any[]>(this.api_url+'/mentions_timeline')
      .pipe(map(data => data));

  }

  getStatusShow(id:any) {
    return this.http
      .get<any[]>(this.api_url+'/statuses/show/' + id)
      .pipe(map(data => data));

  }

  getUser() {
    return this.http
      .get<any[]>(this.api_url+'/users/show')
      .pipe(map(data => data));

  }

  getsearch(param:any) {
    let params = new HttpParams()
    .set("q",param.q)
    .set("since_id",param.since_id);
    return this.http
      .get<any[]>(this.api_url+'/search/tweets', {params:params})
      .pipe(map(data => data));

  }

  tweet(tweetdata: string) {
    return this.http.post<any>(`${this.api_url}/post_tweet/`, { status: tweetdata})
        .pipe(map(tweet => {
         
            alert("tweet posted")

            return tweet;
        }));
}



}

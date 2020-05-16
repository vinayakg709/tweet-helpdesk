import { Component, OnInit } from '@angular/core';
import { TwitterserviceService } from '../twitterservice.service';

@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.css']
})
export class TwitterTimelineComponent implements OnInit {
  myTimeline: any;
  myUser: any;
  fullText :any;
  er = true;
  constructor(private api: TwitterserviceService) { }

  ngOnInit() {
    this.getTwitterTimeline();
  }

  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          console.log(this.myTimeline);
          this.er = false;
        }, err =>{
          if(err.status == 500){
            window.location.href= "/login";

          }
          console.log(err);
        }
      )
   }

  

}

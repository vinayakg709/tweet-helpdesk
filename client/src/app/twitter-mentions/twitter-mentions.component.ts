import { Component, OnInit } from '@angular/core';
import { TwitterserviceService } from '../twitterservice.service';

@Component({
  selector: 'app-twitter-mentions',
  templateUrl: './twitter-mentions.component.html',
  styleUrls: ['./twitter-mentions.component.css']
})
export class TwitterMentionsComponent implements OnInit {
  myMentions : any;
  id:any;
  myStatus : any;
  myInfo: any;
  data:any;
  date: any;
  time : any;
  userdata:any;
  userdate: any;
  usertime : any;
  er = true;
  constructor(private api: TwitterserviceService) { }

  ngOnInit() {
    this.getTwitterMentions();
    // this.getTwitterStatus(this.id);
    // console.log(this.id);
  }

  getTwitterMentions(): void {
    this.api.getMentions()
      .subscribe(
        myMentions => {
          // this.er = false;
          this.myMentions = myMentions;
          console.log(this.myMentions);
          // this.id = this.myMentions.data[0].id;
          // console.log(this.id);
          
        }, err =>{
          if(err.status == 500){
            window.location.href= "/login";

          }
          console.log(err);
        }
      )
   }
  
   getInfo(info:any){
     console.log(info);
     this.myInfo = info;

     this.data = info.created_at.split(' ');
     this.date = this.data[2] + ' ' + this.data[1] + ' ' + this.data[5];
     this.time = this.data[3].substring(0,5);

     this.userdata = info.user.created_at.split(' ');
     this.userdate = this.userdata[2] + ' ' + this.userdata[1] + ' ' + this.userdata[5];
     this.usertime = this.userdata[3].substring(0,5);
    

   }

   

  //  getTwitterStatus(id:any): void {
  //    console.log(id);
  //   this.api.getStatusShow(id)
  //     .subscribe(
  //       myStatus => {
  //         this.myStatus = myStatus;
  //         console.log(this.myStatus);
  //       }
  //     )
  //  }

}

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
  myreplies :any;
  mySearch:any;
  loadingRep = true;
  constructor(private api: TwitterserviceService) { }

  ngOnInit() {
    this.getTwitterMentions();
    // this.getTwitterStatus(this.id);
    // console.log(this.id);
    // this.getSearchReplies();
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


   getSearchReplies(id:any,screen_name:any): void {
     this.loadingRep = true;
    this.myreplies = [];
    var param = {
      q : screen_name,
      since_id : id
    }
    console.log(param);
    this.api.getsearch(param)
      .subscribe(
        mySearch => {
          // this.er = false;
          this.mySearch = mySearch;
          console.log(this.mySearch);
          console.log(this.mySearch.statuses.length);
          
          for(var i=0;i< this.mySearch.statuses.length;i++){
            if(this.mySearch.statuses[i].in_reply_to_status_id_str == id){
              console.log(this.mySearch.statuses[i]);
              if(!this.myreplies.includes(this.mySearch.statuses[i])){
                this.myreplies.push(this.mySearch.statuses[i]);
                this.loadingRep = false;
              }
            }
          }
          if(this.myreplies.length == 0){
            this.loadingRep = false;
          }
          
        }, err =>{
          if(err.status == 500){
            window.location.href= "/login";

          }
          console.log(err);
        }
      )
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

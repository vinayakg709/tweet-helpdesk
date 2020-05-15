import { Component, OnInit } from '@angular/core';
import { TwitterserviceService } from '../twitterservice.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  tweetForm : FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    // er = true;
  constructor(private api:TwitterserviceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tweetForm = this.formBuilder.group({
      tweetdata: ['', Validators.required]
  });
  }

  get f() { return this.tweetForm.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.tweetForm.invalid) {
            return;
        }
 
        this.loading = true;
        this.api.tweet(this.f.tweetdata.value)
            .pipe(first())
            .subscribe(
                data => {
                  // this.er = false;
                    console.log(data);
                    this.loading = false;
                    this.tweetForm = this.formBuilder.group({
                      tweetdata: ['']
                  });
                  
                },
                error => {
                    this.error = error;
                    this.loading = false;
                    
                });
    }

}

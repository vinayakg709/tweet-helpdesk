(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _twitter_timeline_twitter_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twitter-timeline/twitter-timeline.component */ "./src/app/twitter-timeline/twitter-timeline.component.ts");
/* harmony import */ var _twitter_mentions_twitter_mentions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./twitter-mentions/twitter-mentions.component */ "./src/app/twitter-mentions/twitter-mentions.component.ts");
/* harmony import */ var _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tweet/tweet.component */ "./src/app/tweet/tweet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'twitter_timeline',
        component: _twitter_timeline_twitter_timeline_component__WEBPACK_IMPORTED_MODULE_2__["TwitterTimelineComponent"]
    },
    {
        path: 'twitter_mentions',
        component: _twitter_mentions_twitter_mentions_component__WEBPACK_IMPORTED_MODULE_3__["TwitterMentionsComponent"]
    },
    {
        path: 'tweets',
        component: _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_4__["TweetComponent"]
    },
    { path: '',
        redirectTo: '/twitter_mentions',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    \r\n  }\r\n  mat-sidenav {\r\n      background: rgb(241, 241, 241);\r\n      border: none !important;\r\n  }\r\n  mat-sidenav-content{\r\n      background-color: white;\r\n      padding: 3% 10% 0% 10%;\r\n      /* padding-top: 5%; */\r\n  }\r\n  mat-icon{\r\n    color: rgba(0, 0, 0, 0.54);\r\n  }\r\n  .logo{\r\n      height: 24px;\r\n      border-radius: 50%;\r\n  }\r\n\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUzs7R0FFVjtFQUNEO01BQ0ksK0JBQStCO01BQy9CLHdCQUF3QjtHQUMzQjtFQUVEO01BQ0ksd0JBQXdCO01BQ3hCLHVCQUF1QjtNQUN2QixzQkFBc0I7R0FDekI7RUFFRDtJQUNFLDJCQUEyQjtHQUM1QjtFQUVEO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtHQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIFxyXG4gIH1cclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBtYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMyUgMTAlIDAlIDEwJTtcclxuICAgICAgLyogcGFkZGluZy10b3A6IDUlOyAqL1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb257XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n\n  <!-- Side NavBar -->\n\n  <mat-sidenav mode=\"side\" opened>\n    <mat-list>\n      <mat-list-item> <img src=\"../assets/silogo.svg\" alt=\"Logo\" class=\"logo\"> </mat-list-item>\n      <br>\n      <mat-list-item mat-raised-button matTooltip=\"Twitter Timeline\" matTooltipPosition=\"right\">\n        <a routerLink=\"/twitter_timeline\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">dynamic_feed</mat-icon>\n        </a>\n      </mat-list-item>\n      <mat-list-item mat-raised-button matTooltip=\"Twitter Mentions\" matTooltipPosition=\"right\">\n        <a routerLink=\"/twitter_mentions\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">loyalty</mat-icon>\n        </a>\n      </mat-list-item>\n\n      <mat-list-item mat-raised-button matTooltip=\"Tweet from here!\" matTooltipPosition=\"right\">\n        <a routerLink=\"/tweets\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">post_add</mat-icon>\n        </a>\n      </mat-list-item>\n\n    </mat-list>\n\n    <mat-list style=\"bottom: 0;position: absolute;\">\n      <mat-list-item mat-raised-button matTooltip=\"Settings\" matTooltipPosition=\"right\">\n        <a routerLink=\"/settings\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">settings</mat-icon>\n        </a>\n      </mat-list-item>\n      <mat-list-item mat-raised-button matTooltip=\"Profile\" matTooltipPosition=\"right\">\n        <a routerLink=\"/tweets\">\n          <img src=\"../assets/twitterlogo.png\" alt=\"Logo\" class=\"logo\">\n        </a>\n      </mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n\n  <!-- Main Content -->\n\n  <mat-sidenav-content>\n\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<!-- <div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Tweet Helpdesk';
        // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _twitter_timeline_twitter_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./twitter-timeline/twitter-timeline.component */ "./src/app/twitter-timeline/twitter-timeline.component.ts");
/* harmony import */ var _twitter_mentions_twitter_mentions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./twitter-mentions/twitter-mentions.component */ "./src/app/twitter-mentions/twitter-mentions.component.ts");
/* harmony import */ var _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tweet/tweet.component */ "./src/app/tweet/tweet.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _twitter_timeline_twitter_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TwitterTimelineComponent"],
                _twitter_mentions_twitter_mentions_component__WEBPACK_IMPORTED_MODULE_6__["TwitterMentionsComponent"],
                _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_7__["TweetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tweet/tweet.component.css":
/*!*******************************************!*\
  !*** ./src/app/tweet/tweet.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.Twitlogo{\r\n    height: 80px;\r\n    width: auto;\r\n    border-radius: 50%;\r\n    margin-top: -50px;\r\n}\r\n\r\n.topdes{\r\n    height: 100px;\r\n    background-color: #21D4FD;\r\n    background-image: linear-gradient(19deg, #43BEF4 0%, rgb(108, 140, 243) 100%);\r\n    border-radius: 5px;\r\n}\r\n\r\n.btn{\r\n    border-radius: 22px;\r\n    background-color: #21D4FD;\r\n    background-image: linear-gradient(19deg, #43BEF4 0%, rgb(30, 61, 163) 100%);\r\n    color: white;\r\n    width: 40%;\r\n}\r\n\r\n.loader{\r\n    height: 100px;\r\n    margin: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlZXQvdHdlZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLDhFQUE4RTtJQUM5RSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLDRFQUE0RTtJQUM1RSxhQUFhO0lBQ2IsV0FBVztDQUNkOztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7R0FDZCIsImZpbGUiOiJzcmMvYXBwL3R3ZWV0L3R3ZWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLlR3aXRsb2dve1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxufVxyXG5cclxuLnRvcGRlc3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFENEZEO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE5ZGVnLCAjNDNCRUY0IDAlLCByZ2IoMTA4LCAxNDAsIDI0MykgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxRDRGRDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxOWRlZywgIzQzQkVGNCAwJSwgcmdiKDMwLCA2MSwgMTYzKSAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5sb2FkZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tweet/tweet.component.html":
/*!********************************************!*\
  !*** ./src/app/tweet/tweet.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-5 mx-auto text-center mt-5\">\n\n    <mat-card class=\"shadow rounded\">\n\n      <div class=\"topdes\">\n      </div>\n\n      <img src=\"../../assets/twitterlogo.png\" alt=\"Twitter Logo\" class=\"Twitlogo\">\n      <h3 class=\"mt-4\">What's happpening?</h3>\n      <h6 class=\"mb-4\">Tweet directly from here itself!</h6>\n\n      <form [formGroup]=\"tweetForm\" (ngSubmit)=\"onSubmit()\">\n        <textarea rows=\"3\" matInput placeholder=\"Status\" formControlName=\"tweetdata\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.tweetdata.errors }\"></textarea>\n        <br>\n        <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn bold\">TWEET</button>\n          <img *ngIf=\"loading == true\" src=\"../../assets/loader.svg\" class=\"loader mx-auto\" />\n        </div>\n      </form>\n      \n    </mat-card>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tweet/tweet.component.ts":
/*!******************************************!*\
  !*** ./src/app/tweet/tweet.component.ts ***!
  \******************************************/
/*! exports provided: TweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetComponent", function() { return TweetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitterservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../twitterservice.service */ "./src/app/twitterservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TweetComponent = /** @class */ (function () {
    // er = true;
    function TweetComponent(api, formBuilder) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    TweetComponent.prototype.ngOnInit = function () {
        this.tweetForm = this.formBuilder.group({
            tweetdata: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(TweetComponent.prototype, "f", {
        get: function () { return this.tweetForm.controls; },
        enumerable: true,
        configurable: true
    });
    TweetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.tweetForm.invalid) {
            return;
        }
        // Send Form Information
        this.loading = true;
        this.api.tweet(this.f.tweetdata.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            _this.tweetForm = _this.formBuilder.group({
                tweetdata: ['']
            });
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    TweetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tweet',
            template: __webpack_require__(/*! ./tweet.component.html */ "./src/app/tweet/tweet.component.html"),
            styles: [__webpack_require__(/*! ./tweet.component.css */ "./src/app/tweet/tweet.component.css")]
        }),
        __metadata("design:paramtypes", [_twitterservice_service__WEBPACK_IMPORTED_MODULE_1__["TwitterserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TweetComponent);
    return TweetComponent;
}());



/***/ }),

/***/ "./src/app/twitter-mentions/twitter-mentions.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/twitter-mentions/twitter-mentions.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n    /* width:0%; */\r\n    margin-top: 15px;\r\n    border: #eee 1.5px solid;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.greyish{\r\n  color: rgb(197, 196, 196);\r\n}\r\n\r\n.divider{\r\n  border: #eee 1.5px solid;\r\n  /* height:90vh; */\r\n  margin-top: 15px;\r\n  height: 81vh;\r\n}\r\n\r\n.header-info{\r\n  padding: 7px 8px;\r\n  font-size: 12px;\r\n  border-bottom:  #eee 1.5px solid;\r\n  margin:auto 2px ;\r\n}\r\n\r\n.mention-image{\r\n  height: 24px;\r\n  width: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n.dnt{\r\n  margin: 15px 25px;\r\n  font-size: 12px;\r\n}\r\n\r\n.attachment{\r\n  height: 70px;\r\n  width: auto;\r\n  border-radius: 13px;\r\n  padding: 10px 10px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.msgs{\r\n  border-bottom: none !important;\r\n}\r\n\r\n.create-task{\r\n  background-color: rgb(241, 241, 241);\r\n  padding: auto 10px !important;\r\n  border : none;\r\n  border-radius: 12px;\r\n}\r\n\r\n.rply{\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  position: absolute;\r\n}\r\n\r\ninput{\r\n  font-size: 12px !important;\r\n  padding: 20px 15px !important;\r\n}\r\n\r\n.btn{\r\n  padding: 0.3rem 0.75rem !important;\r\n  border-color: #ced4da;\r\n}\r\n\r\n.user-part{\r\n  border-left: none !important;\r\n}\r\n\r\nmat-card-title{\r\n    margin: 0px 0px 0px !important;\r\n}\r\n\r\n.avatar{\r\n    height: 26px;\r\n    width: auto;\r\n    margin-left: 10px;\r\n}\r\n\r\n.truncate-overflow {\r\n    font-size: 13px !important;\r\n    --max-lines: 2;\r\n    max-height: calc(var(--lh) * var(--max-lines));\r\n    overflow: hidden;\r\n  }\r\n\r\n.truncate-overflow::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n\r\n.truncate-overflow::after .truncate-overflow-name::after  {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 0; /* note: not using bottom */\r\n    width: 1rem;\r\n    height: 1rem;\r\n    background: white;\r\n  }\r\n\r\n.truncate-overflow-name {\r\n    --max-lines: 1;\r\n    max-height: calc(var(--lh) * var(--max-lines));\r\n    overflow: hidden;\r\n  }\r\n\r\n.truncate-overflow-name::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n\r\n.title{\r\n    font-weight: 500;\r\n}\r\n\r\nmat-card-content{\r\n    margin-left: 25px;\r\n}\r\n\r\n/* User Panel */\r\n\r\n.profile-image{\r\n  margin-top: 30px;\r\n  height: 70px;\r\n  width: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n.profile-name{\r\n  font-size: 14px;\r\n}\r\n\r\n.profile-username{\r\n  font-size: 12px;\r\n}\r\n\r\n.follower{\r\n  background-color: rgb(241, 241, 241);\r\n  padding: 1px 15px;\r\n  font-size: 12px;\r\n  border-radius: 12px;\r\n  /* margin: 1px 3px; */\r\n}\r\n\r\ntable{\r\n  font-size: 12px;\r\n}\r\n\r\n.table td{\r\n  padding: 0rem !important;\r\n}\r\n\r\n.tasks{\r\n  font-size: 12px;\r\n  bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  position: absolute;\r\n  border-top: #eee 1.5px solid ;\r\n  padding-top: 10px;\r\n}\r\n\r\n.search{\r\n  padding: 0px 10px !important;\r\n  height: 25px;\r\n  border-radius: 25px;\r\n  border: 1px rgb(207, 205, 205) solid;\r\n}\r\n\r\n.filter{\r\n  padding: 0px 20px !important;\r\n  height: 25px;\r\n  border-radius: 25px;\r\n  /* border: 1px rgb(207, 205, 205) solid; */\r\n  border: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.material-icons{\r\n  font-size: 14px;\r\n}\r\n\r\n.online{\r\n  margin-right: 10%;\r\n}\r\n\r\n/* For scrollable Mention section */\r\n\r\n.scrollable{\r\n  overflow-y: scroll;\r\n  height: 81vh;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 2px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background: transparent; \r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgb(219, 218, 218); \r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(163, 163, 163); \r\n}\r\n\r\n.scrollablecenter{\r\n  overflow-y: scroll;\r\n  /* position: absolute; */\r\n  height: 68vh;\r\n}\r\n\r\n.loader{\r\n  height: 100px;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdpdHRlci1tZW50aW9ucy90d2l0dGVyLW1lbnRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7Q0FDL0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0VBQ1gsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtDQUMvQjs7QUFDRDtFQUNFLG1DQUFtQztFQUNuQyxzQkFBc0I7Q0FDdkI7O0FBR0Q7RUFDRSw2QkFBNkI7Q0FDOUI7O0FBR0Q7SUFDSSwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsK0NBQStDO0lBQy9DLGlCQUFpQjtHQUNsQjs7QUFFRDtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7R0FDVjs7QUFFRDtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUyxDQUFDLDRCQUE0QjtJQUN0QyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtHQUNuQjs7QUFJSDtJQUNJLGVBQWU7SUFDZiwrQ0FBK0M7SUFDL0MsaUJBQWlCO0dBQ2xCOztBQUVEO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztHQUNWOztBQUlIO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVELGdCQUFnQjs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7SUFDUixRQUFRO0lBQ1IsU0FBUztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUNBQXFDO0NBQ3RDOztBQUVEO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQsb0NBQW9DOztBQUVwQztFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQsV0FBVzs7QUFDWDtFQUNFLHdCQUF3QjtDQUN6Qjs7QUFFRCxZQUFZOztBQUNaO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVELHFCQUFxQjs7QUFDckI7RUFDRSwrQkFBK0I7Q0FDaEM7O0FBS0Q7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGNBQWM7RUFDZCxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC90d2l0dGVyLW1lbnRpb25zL3R3aXR0ZXItbWVudGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgLyogd2lkdGg6MCU7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAjZWVlIDEuNXB4IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JleWlzaHtcclxuICBjb2xvcjogcmdiKDE5NywgMTk2LCAxOTYpO1xyXG59XHJcbi5kaXZpZGVye1xyXG4gIGJvcmRlcjogI2VlZSAxLjVweCBzb2xpZDtcclxuICAvKiBoZWlnaHQ6OTB2aDsgKi9cclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGhlaWdodDogODF2aDtcclxufVxyXG5cclxuLmhlYWRlci1pbmZve1xyXG4gIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b206ICAjZWVlIDEuNXB4IHNvbGlkO1xyXG4gIG1hcmdpbjphdXRvIDJweCA7XHJcbn1cclxuXHJcbi5tZW50aW9uLWltYWdle1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5kbnR7XHJcbiAgbWFyZ2luOiAxNXB4IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYXR0YWNobWVudHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLm1zZ3N7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3JlYXRlLXRhc2t7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xyXG4gIHBhZGRpbmc6IGF1dG8gMTBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlciA6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLnJwbHl7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAyMHB4IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uYnRue1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhO1xyXG59XHJcblxyXG5cclxuLnVzZXItcGFydHtcclxuICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4udHJ1bmNhdGUtb3ZlcmZsb3cge1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLW1heC1saW5lczogMjtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGModmFyKC0tbGgpICogdmFyKC0tbWF4LWxpbmVzKSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnRydW5jYXRlLW92ZXJmbG93OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnRydW5jYXRlLW92ZXJmbG93OjphZnRlciAudHJ1bmNhdGUtb3ZlcmZsb3ctbmFtZTo6YWZ0ZXIgIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDsgLyogbm90ZTogbm90IHVzaW5nIGJvdHRvbSAqL1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcblxyXG5cclxuICBcclxuLnRydW5jYXRlLW92ZXJmbG93LW5hbWUge1xyXG4gICAgLS1tYXgtbGluZXM6IDE7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLWxoKSAqIHZhcigtLW1heC1saW5lcykpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC50cnVuY2F0ZS1vdmVyZmxvdy1uYW1lOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi8qIFVzZXIgUGFuZWwgKi9cclxuXHJcbi5wcm9maWxlLWltYWdle1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXVzZXJuYW1le1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZvbGxvd2Vye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICBwYWRkaW5nOiAxcHggMTVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAvKiBtYXJnaW46IDFweCAzcHg7ICovXHJcbn1cclxuXHJcbnRhYmxle1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRhYmxlIHRke1xyXG4gIHBhZGRpbmc6IDByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhc2tze1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci10b3A6ICNlZWUgMS41cHggc29saWQgO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAxcHggcmdiKDIwNywgMjA1LCAyMDUpIHNvbGlkO1xyXG59XHJcblxyXG4uZmlsdGVye1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgLyogYm9yZGVyOiAxcHggcmdiKDIwNywgMjA1LCAyMDUpIHNvbGlkOyAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29uc3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5vbmxpbmV7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi8qIEZvciBzY3JvbGxhYmxlIE1lbnRpb24gc2VjdGlvbiAqL1xyXG5cclxuLnNjcm9sbGFibGV7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDogODF2aDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDJweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMTksIDIxOCwgMjE4KTsgXHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTYzLCAxNjMsIDE2Myk7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc2Nyb2xsYWJsZWNlbnRlcntcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gIGhlaWdodDogNjh2aDtcclxufVxyXG5cclxuLmxvYWRlcntcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/twitter-mentions/twitter-mentions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/twitter-mentions/twitter-mentions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row ml-2\">\n  <h2>Tweeter Mentions</h2>\n  <input type=\"text \" class=\"search my-auto mx-4\" placeholder=\"&#xF002;   Quick Search\"\n    style=\"font-family:Arial, FontAwesome\">\n  <button class=\"filter my-auto\"><i class='fa fa-filter mr-2'></i>Filter</button>\n\n  <button class=\"filter my-auto ml-auto online\"><i class='fa fa-circle mr-2' style=\"color: green;\"></i>Online <i\n      class='fa fa-caret-down ml-1'></i></button>\n\n</div>\n\n<div class=\"row\">\n\n  <!-- Left Part (Showing Mentions) -->\n\n  <div class=\"col-3 scrollable\">\n\n    <div *ngIf=\"undefined === myMentions\" class=\"text-center\">\n      <img src=\"../../assets/loader.svg\" alt=\"laoder\" class=\"loader\">\n    </div>\n\n    <ng-container *ngIf=\"undefined !== myMentions\">\n      <ng-container *ngFor=\"let tweets of myMentions.data\">\n        <a (click)=\"getInfo(tweets)\" (click)=\" getSearchReplies(tweets.id_str,tweets.user.screen_name)\">\n          <mat-card matRipple [matRippleColor]=\"greyish\">\n            <div class=\"row\">\n              <div class=\"align-self-start\">\n                <img class=\"avatar\" mat-card-avatar [src]=\"tweets.user.profile_image_url\">\n              </div>\n              <div class=\"align-self-start\" style=\"margin-left: 25px;\">\n                <div class=\"title  truncate-overflow-name\">\n                  {{tweets.user.screen_name}}\n                </div>\n              </div>\n              <div style=\"margin-left: 60px;margin-right: 10px;\" class=\"truncate-overflow\">\n                {{tweets.full_text}}\n              </div>\n            </div>\n          </mat-card>\n        </a>\n      </ng-container>\n    </ng-container>\n\n    <!-- Some Dummy Cards -->\n\n    <mat-card matRipple [matRippleColor]=\"greyish\">\n      <div class=\"row\">\n        <div class=\"align-self-start\">\n          <img class=\"avatar\" mat-card-avatar src=\"../../assets/dummyimg2.jpeg\">\n        </div>\n        <div class=\"align-self-start\" style=\"margin-left: 25px;\">\n          <div class=\"title  truncate-overflow-name\">\n            Tsutsui Ichichia\n          </div>\n        </div>\n        <div style=\"margin-left: 60px;margin-right: 10px;\" class=\"truncate-overflow\">\n          This is Dummy text.\n        </div>\n      </div>\n    </mat-card>\n\n    <mat-card matRipple [matRippleColor]=\"greyish\">\n      <div class=\"row\">\n        <div class=\"align-self-start\">\n          <img class=\"avatar\" mat-card-avatar src=\"../../assets/dummyimg3.jpeg\">\n        </div>\n        <div class=\"align-self-start\" style=\"margin-left: 25px;\">\n          <div class=\"title  truncate-overflow-name\">\n            Vicente De la Cruz\n          </div>\n        </div>\n        <div style=\"margin-left: 60px;margin-right: 10px;\" class=\"truncate-overflow\">\n          This is Dummy Card.\n        </div>\n      </div>\n    </mat-card>\n\n\n    <mat-card matRipple [matRippleColor]=\"greyish\">\n      <div class=\"row\">\n        <div class=\"align-self-start\">\n          <img class=\"avatar\" mat-card-avatar src=\"../../assets/dummyimg.jpg\">\n        </div>\n        <div class=\"align-self-start\" style=\"margin-left: 25px;\">\n          <div class=\"title  truncate-overflow-name\">\n            Vicente De la Cruz\n          </div>\n        </div>\n        <div style=\"margin-left: 60px;margin-right: 10px;\" class=\"truncate-overflow\">\n          Hello Dear, Sorry for Inconviniences.\n        </div>\n      </div>\n    </mat-card>\n\n    <mat-card matRipple [matRippleColor]=\"greyish\">\n      <div class=\"row\">\n        <div class=\"align-self-start\">\n          <img class=\"avatar\" mat-card-avatar src=\"../../assets/dummyimg2.jpeg\">\n        </div>\n        <div class=\"align-self-start\" style=\"margin-left: 25px;\">\n          <div class=\"title  truncate-overflow-name\">\n            LienZeal Bowman\n          </div>\n        </div>\n        <div style=\"margin-left: 60px;margin-right: 10px;\" class=\"truncate-overflow\">\n          Thanks.\n        </div>\n      </div>\n    </mat-card>\n\n  </div>\n\n  <!-- Center part and Right section (When no Mention is Selected) -->\n\n  <ng-container *ngIf=\"undefined === myInfo\">\n\n    <div class=\"col-6\" style=\"padding-right: 0px;\">\n      <div class=\"divider center-part \">\n\n        <div class=\"row header-info\">\n          <div class=\"col-1\" style=\"padding-right: 0;\">\n            <img src=\"../../assets/dummyimg.jpg\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"col-3 font-weight-bold\" style=\"padding-left: 2px;\">\n            Ean Tipene <i class='fa fa-circle ml-1' style=\"color: green;font-size: 8px;\"></i>\n          </div>\n          <div class=\"col-2 greyish\">\n            Room: 102\n          </div>\n          <div class=\"col-3 greyish\">\n            Oct 1 - Oct 2\n          </div>\n          <div class=\"col-3\">\n            <button class=\"create-task\"> Create a Task </button>\n          </div>\n        </div>\n\n        <div class=\"row greyish dnt\">\n          Today\n        </div>\n\n        <div class=\"row header-info msgs\">\n          <div class=\"col-1\" style=\"padding-right: 0;\">\n            <img src=\"../../assets/dummyimg.jpg\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"col-9\" style=\"padding-left: 2px;\">\n            Hi there!\n            <br>\n            I have a problem in by room it needs to be cleaned.\n            <div class=\"row\">\n              <img src=\"../../assets/attach1.jpg\" alt=\"Attchment\" class=\"attachment\">\n              <img src=\"../../assets/attach2.jpg\" alt=\"Attchment\" class=\"attachment\">\n              <img src=\"../../assets/attach3.jpg\" alt=\"Attchment\" class=\"attachment\">\n            </div>\n            This is what I see! Not Good!\n          </div>\n          <div class=\"col-2 greyish\">\n            10:34\n          </div>\n        </div>\n\n        <div class=\"row header-info msgs\">\n          <div class=\"col-1\">\n            <img src=\"../../assets/technology.svg\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"col-11 greyish\" style=\"padding-left: 2px;\">\n            <span style=\"color: red;\">Ann Tilbusk</span> (you)assigned to this conevrsation.\n          </div>\n        </div>\n\n        <div class=\"row header-info msgs\">\n          <div class=\"col-1\">\n            <img src=\"../../assets/dummyimg.jpg\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"col-9\" style=\"padding-left: 2px;\">\n            Hello Dear Ea!\n            <br>\n            Sorry for Inconviniences. I am sending our manager Maria Peterson to your room 102.\n          </div>\n          <div class=\"col-2 greyish\">\n            10:36\n          </div>\n        </div>\n\n        <div class=\"header-info msgs row rply\">\n          <div class=\"col-1\">\n            <img src=\"../../assets/dummyimg.jpg\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"input-group col-11\" style=\"padding-left: 2px;\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Reply...\" aria-label=\"Reply...\"\n              aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary attbtn\" type=\"button\">\n                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">post_add</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n    <div class=\"col-2\" style=\"padding-left: 0px;\">\n      <div class=\"divider user-part\">\n\n        <div class=\"row mx-auto\">\n          <img src=\"../../assets/dummyimg.jpg\" alt=\"Mention-image\" class=\"profile-image mx-auto\">\n        </div>\n\n        <div class=\"row mt-2\">\n          <div class=\"text-center mx-auto profile-name font-weight-bold\">Ean Tipene</div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"text-center mx-auto profile-username\" style=\"color: lightgreen;\">online</div>\n        </div>\n\n        <div class=\"row mt-3 pr-4 pl-4\">\n          <div class=\"call follower mx-auto\">\n            <i class='fa fa-phone mr-1'></i> Call\n          </div>\n          <div class=\"mail follower mx-auto\">\n            <i class='fa fa-envelope mr-1'></i> Email\n          </div>\n        </div>\n\n        <div class=\"row pr-4 pl-4 mt-3\">\n          <table class=\"table table-borderless mx-auto\">\n            <tbody>\n              <tr>\n                <td class=\"greyish\">Room</td>\n                <td class=\"float-right\">102</td>\n              </tr>\n              <tr>\n                <td class=\"greyish\">Category</td>\n                <td class=\"float-right\">Standard</td>\n              </tr>\n              <tr>\n                <td class=\"greyish\">Country</td>\n                <td class=\"float-right\">Canada</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"tasks pr-3 pl-3 mb-2\">\n          Tasks\n          <br>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" disabled>\n            <label class=\"form-check-label\" for=\"inlineCheckbox1\">Change up room.</label>\n          </div>\n          <br>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" disabled>\n            <label class=\"form-check-label\" for=\"inlineCheckbox1\">Change linen and Towel when guest out. </label>\n          </div>\n          <br>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" disabled>\n            <label class=\"form-check-label\" for=\"inlineCheckbox1\">Bring Complementary Bottel of Red Wine.</label>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </ng-container>\n\n\n  <!-- Center Part and Right Section when a mention is selcetd -->\n\n\n  <ng-container *ngIf=\"undefined !== myInfo\">\n    <div class=\"col-6\" style=\"padding-right: 0px;\">\n      <div class=\"divider center-part\">\n        <div class=\"row header-info\">\n          <div class=\"col-1\" style=\"padding-right: 0;\">\n            <img [src]=\"myInfo.user.profile_image_url\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"col-3 font-weight-bold\" style=\"padding-left: 2px;\">\n            {{ myInfo.user.name }}\n          </div>\n          <div class=\"col-2 greyish\">\n            {{ myInfo.user.screen_name }}\n          </div>\n          <div class=\"col-3\">\n          </div>\n          <div class=\"col-3\">\n            <button class=\"create-task\"> Create a Task </button>\n          </div>\n        </div>\n        <div class=\"scrollablecenter\">\n\n        <div class=\"row dnt greyish\">\n          {{ date }}\n        </div>\n\n        <div class=\"row header-info msgs\">\n          <div class=\"col-1\" style=\"padding-right: 0;\">\n            <img [src]=\"myInfo.user.profile_image_url\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"col-9 font-weight-bold\" style=\"padding-left: 2px;\">\n            {{ myInfo.full_text }}\n            <br>\n            <ng-container *ngFor=\"let hashtag of myInfo.entities.hashtags\" style=\"color: lightskyblue;\">\n              #{{ hashtag.text }} <br>\n            </ng-container>\n\n            <ng-container *ngFor=\"let url of myInfo.entities.urls\">\n              <a [href]=\"url.display_url\">{{ url.display_url }} <br></a>\n            </ng-container>\n\n            <div class=\"row\">\n              <ng-container *ngFor=\"let med of myInfo.entities.media\">\n                <img [src]=\"med.media_url\" alt=\"Attchment\" class=\"attachment\">\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"col-2 font-weight-bold\">\n            {{ time}}\n\n          </div>\n        </div>\n\n        <div class=\"row header-info msgs\">\n          <div class=\"col-1\">\n            <img src=\"../../assets/interface.svg\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"col-11 greyish\" style=\"padding-left: 2px;\">\n            Replies to the tweet.\n          </div>\n        </div>\n        \n        <ng-container *ngIf = \"loadingRep\" >\n          <div class=\"row text-center mx-auto\">\n            <img src=\"../../assets/loader.svg\" alt=\"loader\" class=\" loader\">\n          </div>\n        </ng-container>\n\n        <ng-container *ngFor=\"let reply of myreplies\" >\n        <div class=\"row header-info msgs\">\n          <div class=\"col-1\">\n            <img [src]=\"reply.user.profile_image_url\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"col-9\" style=\"padding-left: 2px;\">\n            {{ reply.user.screen_name}}\n            <br>\n            {{ reply.text }}\n          </div>\n          <div class=\"col-2 greyish\">\n            {{ reply.created_at.split(' ')[3].substring(0,5) }}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n\n\n\n        <div class=\"row header-info msgs rply\">\n          <div class=\"col-1\">\n            <img src=\"../../assets/twitterlogo.png\" alt=\"Mention-image\" class=\"mention-image\">\n          </div>\n          <div class=\"input-group col-11\" style=\"padding-left: 2px;\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Reply to the Tweet!\" aria-label=\"Reply to the Tweet!\"\n              aria-describedby=\"Reply to the Tweet!\" [(ngModel)]=\"reply\" id=\"reply\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary attbtn\" (click) = \"replytweet()\" type=\"button\">\n                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">post_add</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n    <div class=\"col-2\" style=\"padding-left: 0px;\">\n      <div class=\"divider user-part\">\n\n        <div class=\"row mx-auto\">\n          <img [src]=\"myInfo.user.profile_image_url\" alt=\"Mention-image\" class=\"profile-image mx-auto\">\n        </div>\n\n        <div class=\"row mt-2\">\n          <div class=\"text-center mx-auto profile-name font-weight-bold\">{{ myInfo.user.name }}</div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"text-center mx-auto profile-username\">{{ myInfo.user.screen_name }}</div>\n        </div>\n\n        <div class=\"row mt-3 pr-4 pl-4\">\n          <div class=\"call follower mx-auto mt-1\">\n            {{ myInfo.user.followers_count }} Followers\n          </div>\n          <div class=\"mail follower mx-auto mt-1\">\n            <span> {{ myInfo.user.friends_count }}</span> Friends\n          </div>\n        </div>\n\n        <div class=\"row pr-4 pl-4 mt-3\">\n          <table class=\"table table-borderless mx-auto\">\n            <tbody>\n              <tr>\n                <td class=\"greyish\">Created on</td>\n                <td class=\"float-right\">{{userdate}}</td>\n              </tr>\n              <tr>\n                <td class=\"greyish\">Following</td>\n                <ng-container *ngIf=\"myInfo.user.following == true\">\n                  <td class=\"float-right\">Yes</td>\n                </ng-container>\n                <ng-container *ngIf=\"myInfo.user.following != true\">\n                  <td class=\"float-right\">No</td>\n                </ng-container>\n              </tr>\n              <tr>\n                <td class=\"greyish\">Country</td>\n                <td class=\"float-right\">India</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"tasks pr-3 pl-3 mb-2\">\n          Tasks\n          <br>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" disabled>\n            <label class=\"form-check-label\" for=\"inlineCheckbox1\">Change up room.</label>\n          </div>\n          <br>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" disabled>\n            <label class=\"form-check-label\" for=\"inlineCheckbox1\">Change linen and Towel when guest out. </label>\n          </div>\n          <br>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" disabled>\n            <label class=\"form-check-label\" for=\"inlineCheckbox1\">Bring Complementary Bottel of Red Wine.</label>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </ng-container>\n\n</div>"

/***/ }),

/***/ "./src/app/twitter-mentions/twitter-mentions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/twitter-mentions/twitter-mentions.component.ts ***!
  \****************************************************************/
/*! exports provided: TwitterMentionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterMentionsComponent", function() { return TwitterMentionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitterservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../twitterservice.service */ "./src/app/twitterservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterMentionsComponent = /** @class */ (function () {
    function TwitterMentionsComponent(api) {
        this.api = api;
        this.er = true;
        this.loadingRep = true;
    }
    TwitterMentionsComponent.prototype.ngOnInit = function () {
        this.getTwitterMentions();
        // this.getTwitterStatus(this.id);
        // console.log(this.id);
        // this.getSearchReplies();
    };
    TwitterMentionsComponent.prototype.getTwitterMentions = function () {
        var _this = this;
        this.api.getMentions()
            .subscribe(function (myMentions) {
            // this.er = false;
            _this.myMentions = myMentions;
            console.log(_this.myMentions);
            // this.id = this.myMentions.data[0].id;
            // console.log(this.id);
        }, function (err) {
            if (err.status == 500) {
                window.location.href = "/login";
            }
            console.log(err);
        });
    };
    TwitterMentionsComponent.prototype.getInfo = function (info) {
        //  console.log(info);
        this.myInfo = info;
        this.data = info.created_at.split(' ');
        this.date = this.data[2] + ' ' + this.data[1] + ' ' + this.data[5];
        this.time = this.data[3].substring(0, 5);
        this.userdata = info.user.created_at.split(' ');
        this.userdate = this.userdata[2] + ' ' + this.userdata[1] + ' ' + this.userdata[5];
        this.usertime = this.userdata[3].substring(0, 5);
    };
    TwitterMentionsComponent.prototype.getSearchReplies = function (id, screen_name) {
        var _this = this;
        this.loadingRep = true;
        this.myreplies = [];
        var param = {
            q: screen_name,
            since_id: id
        };
        this.selctedId = id;
        this.selectedName = screen_name;
        // console.log(param);
        this.api.getsearch(param)
            .subscribe(function (mySearch) {
            // this.er = false;
            _this.mySearch = mySearch;
            console.log(_this.mySearch.statuses);
            for (var i = 0; i < _this.mySearch.statuses.length; i++) {
                // console.log(this.mySearch.statuses[i]);
                if (_this.mySearch.statuses[i].in_reply_to_status_id_str == id) {
                    if (!_this.myreplies.includes(_this.mySearch.statuses[i])) {
                        _this.myreplies.push(_this.mySearch.statuses[i]);
                        _this.loadingRep = false;
                    }
                }
            }
            if (_this.myreplies.length == 0) {
                _this.loadingRep = false;
            }
        }, function (err) {
            if (err.status == 500) {
                window.location.href = "/login";
            }
            console.log(err);
        });
    };
    TwitterMentionsComponent.prototype.replytweet = function () {
        var _this = this;
        // console.log(this.reply);
        this.replyData = {
            status: this.reply,
            id: this.selctedId,
            username: this.selectedName
        };
        this.api.postreply(this.replyData).subscribe(function (res) {
            console.log(res);
            _this.reply = '';
            _this.getSearchReplies(_this.selctedId, _this.selectedName);
        }, function (err) {
            console.log(err);
        });
    };
    TwitterMentionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitter-mentions',
            template: __webpack_require__(/*! ./twitter-mentions.component.html */ "./src/app/twitter-mentions/twitter-mentions.component.html"),
            styles: [__webpack_require__(/*! ./twitter-mentions.component.css */ "./src/app/twitter-mentions/twitter-mentions.component.css")]
        }),
        __metadata("design:paramtypes", [_twitterservice_service__WEBPACK_IMPORTED_MODULE_1__["TwitterserviceService"]])
    ], TwitterMentionsComponent);
    return TwitterMentionsComponent;
}());



/***/ }),

/***/ "./src/app/twitter-timeline/twitter-timeline.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/twitter-timeline/twitter-timeline.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profImg{\r\n    height: 70px;\r\n    width: auto;\r\n    border-radius: 50%;\r\n}\r\n\r\n.media{\r\n    height: 100px;\r\n    width: auto;\r\n    border-radius: 2px;\r\n}\r\n\r\n.dnt{\r\n    font-size: 12px;\r\n}\r\n\r\n.loader{\r\n    height: 100px;\r\n    margin: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdpdHRlci10aW1lbGluZS90d2l0dGVyLXRpbWVsaW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7R0FDZCIsImZpbGUiOiJzcmMvYXBwL3R3aXR0ZXItdGltZWxpbmUvdHdpdHRlci10aW1lbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZJbWd7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm1lZGlhe1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uZG50e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubG9hZGVye1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/twitter-timeline/twitter-timeline.component.html":
/*!******************************************************************!*\
  !*** ./src/app/twitter-timeline/twitter-timeline.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Tweeter Timeline</h2>\n<div *ngIf=\"undefined === myTimeline\" class=\"text-center\">\n  <img src=\"../../assets/loader.svg\" alt=\"loader\" class=\"loader mx-auto\">\n</div>\n<div *ngIf=\"undefined !== myTimeline\">\n\n  <!-- For All tweets  -->\n  <ng-container *ngFor=\"let tweets of myTimeline.data\">\n\n    <div class=\"mt-3 card\">\n\n      <div class=\"row px-5 mt-3\">\n        <div class=\"col-1\">\n          <img [src]=\"tweets.user.profile_image_url\" alt=\"Profile Image\" class=\"profImg\">\n        </div>\n        <div class=\"col-11 align-self-center\">\n          <span class=\"h5\">{{tweets.user.name}}</span>\n          <br>\n          @{{tweets.user.screen_name}}\n        </div>\n      </div>\n\n      <div class=\"row px-5\">\n        <div class=\"col-1\">\n        </div>\n        <div class=\"col-10\">\n          <span class=\"h6\"> {{tweets.full_text}} </span>\n          <br>\n          <br>\n          <!-- Seperate Hashtag -->\n          <ng-container *ngFor=\"let hashtag of tweets.entities.hashtags\">\n            #{{hashtag.text}}\n            <br>\n            <br>\n          </ng-container>\n\n          <!-- Seperate URL -->\n\n          <ng-container *ngFor=\"let url of tweets.entities.urls\">\n            <a [href]=\"url.url\">{{url.url}}</a>\n            <br>\n            <br>\n          </ng-container>\n\n          <!-- Seperate Attachments -->\n\n          <ng-container *ngFor=\"let med of tweets.entities.media\">\n            <div class=\"row ml-3\">\n              <img [src]=\"med.media_url\" alt=\"media.url\" class=\"media\">\n            </div>\n            <br>\n          </ng-container>\n\n          <p class=\"dnt\">{{tweets.created_at}}</p>\n        </div>\n      </div>\n      \n      <!-- <p>{{tweets.user.location}}</p>\n      <p>{{tweets.user.description}}</p> -->\n    </div>\n  </ng-container>\n\n</div>"

/***/ }),

/***/ "./src/app/twitter-timeline/twitter-timeline.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/twitter-timeline/twitter-timeline.component.ts ***!
  \****************************************************************/
/*! exports provided: TwitterTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterTimelineComponent", function() { return TwitterTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitterservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../twitterservice.service */ "./src/app/twitterservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterTimelineComponent = /** @class */ (function () {
    function TwitterTimelineComponent(api) {
        this.api = api;
        this.er = true;
    }
    TwitterTimelineComponent.prototype.ngOnInit = function () {
        this.getTwitterTimeline();
    };
    TwitterTimelineComponent.prototype.getTwitterTimeline = function () {
        var _this = this;
        this.api.getTimeline()
            .subscribe(function (myTimeline) {
            _this.myTimeline = myTimeline;
            console.log(_this.myTimeline);
            _this.er = false;
        }, function (err) {
            if (err.status == 500) {
                window.location.href = "/login";
            }
            console.log(err);
        });
    };
    TwitterTimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitter-timeline',
            template: __webpack_require__(/*! ./twitter-timeline.component.html */ "./src/app/twitter-timeline/twitter-timeline.component.html"),
            styles: [__webpack_require__(/*! ./twitter-timeline.component.css */ "./src/app/twitter-timeline/twitter-timeline.component.css")]
        }),
        __metadata("design:paramtypes", [_twitterservice_service__WEBPACK_IMPORTED_MODULE_1__["TwitterserviceService"]])
    ], TwitterTimelineComponent);
    return TwitterTimelineComponent;
}());



/***/ }),

/***/ "./src/app/twitterservice.service.ts":
/*!*******************************************!*\
  !*** ./src/app/twitterservice.service.ts ***!
  \*******************************************/
/*! exports provided: TwitterserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterserviceService", function() { return TwitterserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TwitterserviceService = /** @class */ (function () {
    function TwitterserviceService(http) {
        this.http = http;
        this.api_url = 'http://localhost:3000';
    }
    TwitterserviceService.prototype.getTimeline = function () {
        return this.http
            .get(this.api_url + '/home_timeline')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    TwitterserviceService.prototype.getMentions = function () {
        return this.http
            .get(this.api_url + '/mentions_timeline')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    TwitterserviceService.prototype.getStatusShow = function (id) {
        return this.http
            .get(this.api_url + '/statuses/show/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    TwitterserviceService.prototype.getUser = function () {
        return this.http
            .get(this.api_url + '/users/show')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    TwitterserviceService.prototype.getsearch = function (param) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("q", param.q)
            .set("since_id", param.since_id);
        return this.http
            .get(this.api_url + '/search/tweets', { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    TwitterserviceService.prototype.postreply = function (reply) {
        return this.http
            .post(this.api_url + '/tweets/reply', reply)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            alert('tweeted');
            return data;
        }));
    };
    TwitterserviceService.prototype.tweet = function (tweetdata) {
        return this.http.post(this.api_url + "/post_tweet/", { status: tweetdata })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (tweet) {
            alert("tweet posted");
            return tweet;
        }));
    };
    TwitterserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TwitterserviceService);
    return TwitterserviceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vinayak\Desktop\tweet-helpdesk\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
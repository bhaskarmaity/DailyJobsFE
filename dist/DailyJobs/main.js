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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
// {path: "", component: LandingPageComponent}
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-landing-page></app-landing-page>\n<router-outlet></router-outlet>\n"

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
        this.title = 'DailyJobs';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "register", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _user_loggedin_user_loggedin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-loggedin/user-loggedin.module */ "./src/app/user-loggedin/user-loggedin.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
                _user_loggedin_user_loggedin_module__WEBPACK_IMPORTED_MODULE_5__["UserLoggedinModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n\tcolor: #fff;\r\n\tbackground: #63738a;\r\n\tfont-family: 'Roboto', sans-serif;\r\n}\r\n.form-control {\r\n\theight: 40px;\r\n\tbox-shadow: none;\r\n\tcolor: #969fa4;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #5cb85c;\r\n}\r\n.form-control, .btn {        \r\n\tborder-radius: 3px;\r\n}\r\n.signup-form {\r\n\twidth: 450px;\r\n\tmargin: 0 auto;\r\n\tpadding: 30px 0;\r\n  \tfont-size: 15px;\r\n}\r\n.signup-form h2 {\r\n\tcolor: #636363;\r\n\tmargin: 0 0 15px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\r\n.signup-form h2:before, .signup-form h2:after {\r\n\tcontent: \"\";\r\n\theight: 2px;\r\n\twidth: 30%;\r\n\tbackground: #d4d4d4;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 2;\r\n}\r\n.signup-form h2:before {\r\n\tleft: 0;\r\n}\r\n.signup-form h2:after {\r\n\tright: 0;\r\n}\r\n.signup-form .hint-text {\r\n\tcolor: #999;\r\n\tmargin-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\n.signup-form form {\r\n\tcolor: #999;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 15px;\r\n\tbackground: #f2f3f7;\r\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\tpadding: 30px;\r\n}\r\n.signup-form .form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.signup-form input[type=\"checkbox\"] {\r\n\tmargin-top: 3px;\r\n}\r\n.signup-form .btn {        \r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\t\t\r\n\tmin-width: 140px;\r\n\toutline: none !important;\r\n}\r\n.signup-form .row div:first-child {\r\n\tpadding-right: 10px;\r\n}\r\n.signup-form .row div:last-child {\r\n\tpadding-left: 10px;\r\n}\r\n.signup-form a {\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\r\n.signup-form a:hover {\r\n\ttext-decoration: none;\r\n}\r\n.signup-form form a {\r\n\tcolor: #5cb85c;\r\n\ttext-decoration: none;\r\n}\r\n.signup-form form a:hover {\r\n\ttext-decoration: underline;\r\n}  "

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-form\">\n  <form action=\"/examples/actions/confirmation.php\" method=\"post\">\n    <h2>Login</h2>\n    <p class=\"hint-text\">Create your account. It's free and only takes a minute.</p>\n    <div class=\"form-group\">\n      <!-- <div class=\"row\">\n      <div class=\"col\"><input type=\"text\" class=\"form-control\" name=\"first_name\" placeholder=\"First Name\" required=\"required\"></div>\n      <div class=\"col\"><input type=\"text\" class=\"form-control\" name=\"last_name\" placeholder=\"Last Name\" required=\"required\"></div>\n    </div>        \t -->\n    </div>\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"required\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"required\">\n    </div>\n    <div class=\"form-group\">\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-success btn-lg btn-block\">Login</button>\n    </div>\n  </form>\n  <div class=\"text-center\">Not Registered ? <a style=\"color: #5cb85c; text-decoration: none;\" href=\"register\">Register here</a></div>\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n\tcolor: #fff;\r\n\tbackground: #63738a;\r\n\tfont-family: 'Roboto', sans-serif;\r\n}\r\n.form-control {\r\n\theight: 40px;\r\n\tbox-shadow: none;\r\n\tcolor: #969fa4;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #5cb85c;\r\n}\r\n.form-control, .btn {        \r\n\tborder-radius: 3px;\r\n}\r\n.signup-form {\r\n\twidth: 450px;\r\n\tmargin: 0 auto;\r\n\tpadding: 30px 0;\r\n  \tfont-size: 15px;\r\n}\r\n.signup-form h2 {\r\n\tcolor: #636363;\r\n\tmargin: 0 0 15px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\r\n.signup-form h2:before, .signup-form h2:after {\r\n\tcontent: \"\";\r\n\theight: 2px;\r\n\twidth: 30%;\r\n\tbackground: #d4d4d4;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 2;\r\n}\r\n.signup-form h2:before {\r\n\tleft: 0;\r\n}\r\n.signup-form h2:after {\r\n\tright: 0;\r\n}\r\n.signup-form .hint-text {\r\n\tcolor: #999;\r\n\tmargin-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\n.signup-form form {\r\n\tcolor: #999;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 15px;\r\n\tbackground: #f2f3f7;\r\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\tpadding: 30px;\r\n}\r\n.signup-form .form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.signup-form input[type=\"checkbox\"] {\r\n\tmargin-top: 3px;\r\n}\r\n.signup-form .btn {        \r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\t\t\r\n\tmin-width: 140px;\r\n\toutline: none !important;\r\n}\r\n.signup-form .row div:first-child {\r\n\tpadding-right: 10px;\r\n}\r\n.signup-form .row div:last-child {\r\n\tpadding-left: 10px;\r\n}\r\n.signup-form a {\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\r\n.signup-form a:hover {\r\n\ttext-decoration: none;\r\n}\r\n.signup-form form a {\r\n\tcolor: #5cb85c;\r\n\ttext-decoration: none;\r\n}\r\n.signup-form form a:hover {\r\n\ttext-decoration: underline;\r\n}  "

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-form\">\n  <form action=\"/examples/actions/confirmation.php\" method=\"post\">\n    <h2>Register</h2>\n    <p class=\"hint-text\">Create your account. It's free and only takes a minute.</p>\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <div class=\"col\"><input type=\"text\" class=\"form-control\" name=\"first_name\" placeholder=\"First Name\"\n            required=\"required\"></div>\n        <div class=\"col\"><input type=\"text\" class=\"form-control\" name=\"last_name\" placeholder=\"Last Name\"\n            required=\"required\"></div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"required\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"required\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" name=\"confirm_password\" placeholder=\"Confirm Password\"\n        required=\"required\">\n    </div>\n    <div class=\"form-group\">\n      <label class=\"form-check-label\"><input type=\"checkbox\" required=\"required\"> I accept the <a href=\"#\">Terms of\n          Use</a> &amp; <a href=\"#\">Privacy Policy</a></label>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-success btn-lg btn-block\">Register Now</button>\n    </div>\n  </form>\n  <div class=\"text-center\">Already have an account? <a style=\"color: #5cb85c; text-decoration: none;\" href=\"login\">Sign in</a></div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/common/common-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/common/common-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CommonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonRoutingModule", function() { return CommonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _jobs_overview_jobs_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs-overview/jobs-overview.component */ "./src/app/common/jobs-overview/jobs-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "header", component: _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"] },
    { path: "footer", component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"] },
    { path: "jobs", component: _jobs_overview_jobs_overview_component__WEBPACK_IMPORTED_MODULE_4__["JobsOverviewComponent"] }
];
var CommonRoutingModule = /** @class */ (function () {
    function CommonRoutingModule() {
    }
    CommonRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CommonRoutingModule);
    return CommonRoutingModule;
}());



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: CommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModule", function() { return CommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-routing.module */ "./src/app/common/common-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _jobs_overview_jobs_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobs-overview/jobs-overview.component */ "./src/app/common/jobs-overview/jobs-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _common_routing_module__WEBPACK_IMPORTED_MODULE_1__["CommonRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"]
            ],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _jobs_overview_jobs_overview_component__WEBPACK_IMPORTED_MODULE_5__["JobsOverviewComponent"]],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _jobs_overview_jobs_overview_component__WEBPACK_IMPORTED_MODULE_5__["JobsOverviewComponent"]]
        })
    ], CommonModule);
    return CommonModule;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"text-center text-lg-start bg-light text-muted\">\n  <!-- Section: Social media -->\n  <section\n    class=\"d-flex justify-content-center justify-content-lg-between p-4 border-bottom\"\n  >\n    <!-- Left -->\n    <div class=\"me-5 d-none d-lg-block\">\n      <span>Get connected with us on social networks:</span>\n    </div>\n    <!-- Left -->\n\n    <!-- Right -->\n    <div>\n      <a href=\"\" style=\"padding-left: 10px;\" class=\"me-4 text-reset\">\n        <i class=\"fab fa-facebook-f\"></i>\n      </a>\n      <a href=\"\" style=\"padding-left: 10px;\" class=\"me-4 text-reset\">\n        <i class=\"fab fa-twitter\"></i>\n      </a>\n      <a href=\"\" style=\"padding-left: 10px;\" class=\"me-4 text-reset\">\n        <i class=\"fab fa-google\"></i>\n      </a>\n      <a href=\"\" style=\"padding-left: 10px;\" class=\"me-4 text-reset\">\n        <i class=\"fab fa-instagram\"></i>\n      </a>\n      <a href=\"\" style=\"padding-left: 10px;\" class=\"me-4 text-reset\">\n        <i class=\"fab fa-linkedin\"></i>\n      </a>\n      <a href=\"\" style=\"padding-left: 10px;\" class=\"me-4 text-reset\">\n        <i class=\"fab fa-github\"></i>\n      </a>\n    </div>\n    <!-- Right -->\n  </section>\n  <!-- Section: Social media -->\n\n  <!-- Section: Links  -->\n  <section class=\"\">\n    <div class=\"container text-center text-md-start mt-5\">\n      <!-- Grid row -->\n      <div class=\"row mt-3\">\n        <!-- Grid column -->\n        <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">\n          <!-- Content -->\n          <h6 class=\"text-uppercase fw-bold mb-4\">\n            <i class=\"fas fa-gem me-3\"></i>Company name\n          </h6>\n          <p>\n            Here you can use rows and columns to organize your footer content. Lorem ipsum\n            dolor sit amet, consectetur adipisicing elit.\n          </p>\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">\n          <!-- Links -->\n          <h6 class=\"text-uppercase fw-bold mb-4\">\n            Products\n          </h6>\n          <p>\n            <a href=\"#!\" class=\"text-reset\">Angular</a>\n          </p>\n          <p>\n            <a href=\"#!\" class=\"text-reset\">React</a>\n          </p>\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">\n          <!-- Links -->\n          <h6 class=\"text-uppercase fw-bold mb-4\">\n            Useful links\n          </h6>\n          <p>\n            <a href=\"#!\" class=\"text-reset\">Pricing</a>\n          </p>\n          <p>\n            <a href=\"#!\" class=\"text-reset\">Settings</a>\n          </p>\n          <p>\n            <a href=\"#!\" class=\"text-reset\">Orders</a>\n          </p>\n          <p>\n            <a href=\"#!\" class=\"text-reset\">Help</a>\n          </p>\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">\n          <!-- Links -->\n          <h6 class=\"text-uppercase fw-bold mb-4\">\n            Contact\n          </h6>\n          <p><i class=\"fas fa-home me-3\"></i> New York, NY 10012, US</p>\n          <p>\n            <i class=\"fas fa-envelope me-3\"></i>\n            info@example.com\n          </p>\n          <p><i class=\"fas fa-phone me-3\"></i> + 01 234 567 88</p>\n          <p><i class=\"fas fa-print me-3\"></i> + 01 234 567 89</p>\n        </div>\n        <!-- Grid column -->\n      </div>\n      <!-- Grid row -->\n    </div>\n  </section>\n  <!-- Section: Links  -->\n\n  <!-- Copyright -->\n  <div class=\"text-center p-4\" style=\"background-color: rgba(0, 0, 0, 0.05);\">\n    © 2021 Copyright:\n    <a class=\"text-reset fw-bold\" href=\"https://mdbootstrap.com/\">MDBootstrap.com</a>\n  </div>\n  <!-- Copyright -->\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"/\">Daily Jobs</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"login\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"register\">Register</a>\r\n        </li>\r\n        <!-- <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Dropdown\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n        </li> -->\r\n      </ul>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/jobs-overview/jobs-overview.component.css":
/*!******************************************************************!*\
  !*** ./src/app/common/jobs-overview/jobs-overview.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/jobs-overview/jobs-overview.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/common/jobs-overview/jobs-overview.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- &nbsp;<br> -->\n<div>\n  <div style=\"text-align: center;\">\n    <h2 >Popular Jobs</h2>\n  </div>\n  <br>\n  <div class=\"row p-y-30\">\n    <div class=\"col-3\">\n      <div class=\"w3-container\">\n        <div class=\"w3-card-4\">\n          <header class=\"w3-container w3-light-grey\">\n            <h3>Job title</h3>\n          </header>\n          <div class=\"w3-container\">\n            <p>Job location & salary</p>\n            <hr>\n            <p>Job description.</p><br>\n          </div>\n          <button class=\"w3-button w3-block w3-dark-grey\">Apply</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"w3-container\">\n        <div class=\"w3-card-4\">\n          <header class=\"w3-container w3-light-grey\">\n            <h3>Job title</h3>\n          </header>\n          <div class=\"w3-container\">\n            <p>Job location & salary</p>\n            <hr>\n            <p>Job description.</p><br>\n          </div>\n          <button class=\"w3-button w3-block w3-dark-grey\">Apply</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"w3-container\">\n        <div class=\"w3-card-4\">\n          <header class=\"w3-container w3-light-grey\">\n            <h3>Job title</h3>\n          </header>\n          <div class=\"w3-container\">\n            <p>Job location & salary</p>\n            <hr>\n            <p>Job description.</p><br>\n          </div>\n          <button class=\"w3-button w3-block w3-dark-grey\">Apply</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"w3-container\">\n        <div class=\"w3-card-4\">\n          <header class=\"w3-container w3-light-grey\">\n            <h3>Job title</h3>\n          </header>\n          <div class=\"w3-container\">\n            <p>Job location & salary</p>\n            <hr>\n            <p>Job description.</p><br>\n          </div>\n          <button class=\"w3-button w3-block w3-dark-grey\">Apply</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"row p-y-30\">\n    <div class=\"col-3\">\n      <div class=\"w3-container\">\n        <div class=\"w3-card-4\">\n          <header class=\"w3-container w3-light-grey\">\n            <h3>Job title</h3>\n          </header>\n          <div class=\"w3-container\">\n            <p>Job location & salary</p>\n            <hr>\n            <p>Job description.</p><br>\n          </div>\n          <button class=\"w3-button w3-block w3-dark-grey\">Apply</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"w3-container\">\n        <div class=\"w3-card-4\">\n          <header class=\"w3-container w3-light-grey\">\n            <h3>Job title</h3>\n          </header>\n          <div class=\"w3-container\">\n            <p>Job location & salary</p>\n            <hr>\n            <p>Job description.</p><br>\n          </div>\n          <button class=\"w3-button w3-block w3-dark-grey\">Apply</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"w3-container\">\n        <div class=\"w3-card-4\">\n          <header class=\"w3-container w3-light-grey\">\n            <h3>Job title</h3>\n          </header>\n          <div class=\"w3-container\">\n            <p>Job location & salary</p>\n            <hr>\n            <p>Job description.</p><br>\n          </div>\n          <button class=\"w3-button w3-block w3-dark-grey\">Apply</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"w3-container\">\n        <div class=\"w3-card-4\">\n          <header class=\"w3-container w3-light-grey\">\n            <h3>Job title</h3>\n          </header>\n          <div class=\"w3-container\">\n            <p>Job location & salary</p>\n            <hr>\n            <p>Job description.</p><br>\n          </div>\n          <button class=\"w3-button w3-block w3-dark-grey\">Apply</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/jobs-overview/jobs-overview.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/jobs-overview/jobs-overview.component.ts ***!
  \*****************************************************************/
/*! exports provided: JobsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsOverviewComponent", function() { return JobsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobsOverviewComponent = /** @class */ (function () {
    function JobsOverviewComponent() {
    }
    JobsOverviewComponent.prototype.ngOnInit = function () {
    };
    JobsOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobs-overview',
            template: __webpack_require__(/*! ./jobs-overview.component.html */ "./src/app/common/jobs-overview/jobs-overview.component.html"),
            styles: [__webpack_require__(/*! ./jobs-overview.component.css */ "./src/app/common/jobs-overview/jobs-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobsOverviewComponent);
    return JobsOverviewComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\r\n\r\n\r\nbody {\r\n  color: #5a5a5a;\r\n  font-family: 'Open Sans',Arial,sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n\r\nh1,h2,h3,h4,h5{\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n\r\na, a:hover, .btn{outline:none!important;}\r\n\r\n\r\n.btn-search{background: #FD3A13; border-color: #FD3A13; color: #fff; padding: 7px 10px}\r\n\r\n\r\n.btn-search:hover{background: #ca1b1b; border-color: #ca1b1b}\r\n\r\n\r\nsection{padding: 30px 0; float: left; width: 100%}\r\n\r\n\r\n.card{float: left; width:100%}\r\n\r\n\r\n.navbar {border: medium none; float: left; margin-bottom: 0px; width: 100%;  border-radius: 0}\r\n\r\n\r\n.title-large {font-size: 20px; margin: 10px 0 5px; line-height: 27px; color: #141517;}\r\n\r\n\r\n.title-small { color: #141517; font-size: 16px; font-weight: 400; line-height: 23px; margin: 6px 0 0;}\r\n\r\n\r\n.title-x-small {font-size: 18px; margin: 0px;}\r\n\r\n\r\n.title-large a, .title-small a, .title-x-small a{color: inherit}\r\n\r\n\r\n.banner-sec{float: left; width: 100%; background: #EBEBEB}\r\n\r\n\r\n.card-block{padding:0 10px 10px;}\r\n\r\n\r\n.card-text{margin: 0}\r\n\r\n\r\n.text-time{color: #ff0000; font-weight: 600;}\r\n\r\n\r\n.banner-sec .card-img-overlay{padding: 0; top: 3px; left: 7px; height: 20%}\r\n\r\n\r\nheader{float: left; width:100%}\r\n\r\n\r\n.small-top{ border-bottom: 1px solid #2b2b2b;float: left; width: 100%; background: #000}\r\n\r\n\r\n.small-top .social-icon{float: right;}\r\n\r\n\r\n.small-top .social-icon a {border-left: 1px solid #2b2b2b; color: #ca1b1b; float: left; padding: 6px 13px;}\r\n\r\n\r\n.small-top .social-icon a:last-child {border-right: 1px solid #2b2b2b;}\r\n\r\n\r\n.small-top .social-icon a:hover {color:#FD3A13; text-decoration: none;}\r\n\r\n\r\n.small-top .date-sec {font-size: 13px; font-weight: 600; float: left; margin-top: 4px; color: #898989}\r\n\r\n\r\n.top-head{background: #141517; width: 100%; float: left; height: 100px;}\r\n\r\n\r\n.top-head h1 {color: #fff; font-size: 36px; font-weight: 600; margin: 18px 0 0;}\r\n\r\n\r\n.top-head small{float: left; width: 100%; font-size: 14px; color: #c0c0c0; margin-top: 5px; margin-left: 5px;}\r\n\r\n\r\n.top-head .admin-bar {text-align: right; margin-top: 22px;}\r\n\r\n\r\n.top-head .admin-bar a {color: #fff; line-height: 49px; position: relative; padding:0 7px;}\r\n\r\n\r\n.top-head .admin-bar a:hover{color: #ff0000}\r\n\r\n\r\n.top-head .admin-bar a i{margin-right: 6px;}\r\n\r\n\r\n.top-head .admin-bar .ping {background: #ff0000; border: 3px solid #141517; border-radius: 50%; height: 14px; position: absolute; right: 3px;    top: 13px; width: 14px; z-index: 1;}\r\n\r\n\r\n.top-head .admin-bar img {float: right; height: 50px; width: 50px; margin-left: 18px;}\r\n\r\n\r\n.top-nav{background: #fff; padding: 0; border-bottom: 1px solid #dbdbdb}\r\n\r\n\r\n.top-nav .nav-link {padding-bottom: 0.7rem; padding-top: 0.7rem;}\r\n\r\n\r\n.top-nav .navbar-nav .nav-item + .nav-item{margin-left:0}\r\n\r\n\r\n.top-nav li a{color: #141517; text-transform: uppercase; font-size: 14px; font-weight: 700; padding: 0 10px; border-bottom: 2px solid #fff}\r\n\r\n\r\n.top-nav li a:hover, .top-nav li a:focus, .top-nav li.active a{color: #141517; border-bottom: 2px solid #FD3A13 }\r\n\r\n\r\n.top-nav .form-control{border-color: #fff}\r\n\r\n\r\n.navbar-toggle{background: #fff;}\r\n\r\n\r\n.navbar-toggle .icon-bar{background:#0A2E61; }\r\n\r\n\r\n.navbar-brand{display: none;}\r\n\r\n\r\n.top-slider .carousel-indicators{bottom: 0}\r\n\r\n\r\n.top-slider .carousel-indicators li{border:1px solid #000;}\r\n\r\n\r\n.top-slider .carousel-indicators .active{background:#000;}\r\n\r\n\r\n.side-bar .nav-tabs{border-bottom:none;}\r\n\r\n\r\n.side-bar .nav-tabs .nav-link {color: #aeaeae; text-transform: uppercase; border: none;}\r\n\r\n\r\n.side-bar .nav-tabs .nav-link.active, .side-bar .nav-tabs .nav-link:hover{border-bottom:2px solid #ff0000;  text-transform: uppercase; color: #222}\r\n\r\n\r\n.sidebar-tabing .media{margin-top: 20px}\r\n\r\n\r\n.sidebar-tabing img{width: 120px;height: 100px;}\r\n\r\n\r\n.sidebar-tabing .title-small {line-height: 23px; margin-top: 5px; font-size: 18px}\r\n\r\n\r\n#search {float: right; margin-top: 9px; width: 250px;}\r\n\r\n\r\n.search {padding: 5px 0; width: 230px; height: 30px; position: relative; left: 10px; float: left; line-height: 22px;}\r\n\r\n\r\n.search input {background: #d0d0d0; border: medium none; border-radius: 3px 0 0 3px; float: left; height: 36px; line-height: 18px; margin-left: 210px; padding: 0 9px; position: absolute; top: -3px; width: 0;transition: all 0.7s ease-in-out;}\r\n\r\n\r\n.search:hover input, .search input:focus { width: 200px; margin-left: 0px; background: #d0d0d0;}\r\n\r\n\r\n.top-nav .btn {position: absolute;right: 0;top: -3px;border-radius:3px;}\r\n\r\n\r\n.banner-sec{float: left; width:100%;}\r\n\r\n\r\n.banner-sec .news-block{margin-bottom: 20px}\r\n\r\n\r\n.banner-sec .news-block:last-child{margin-bottom: 0px}\r\n\r\n\r\n.banner-sec .news-des {margin-bottom: 5px;}\r\n\r\n\r\n.banner-sec .title-large{margin: 18px 0 0}\r\n\r\n\r\n.banner-sec .time{margin-top: 0px; font-size: 13px;}\r\n\r\n\r\n.banner-sec .carousel-control.left, .banner-sec .carousel-control.right{background: none;}\r\n\r\n\r\n.banner-sec .card{margin-bottom:20px;}\r\n\r\n\r\n.section-01{float: left; width: 100%;  border-top: 1px solid #d5d5d5; border-bottom: 1px solid #d5d5d5}\r\n\r\n\r\n.section-01 .heading-large {border-bottom: 2px solid #222; color: #222; float: left; width: 100%; padding:0 0 6px; margin:0 0 18px; text-align: left;}\r\n\r\n\r\n.section-01 .heading-large::before, .section-01 .heading-large::after{background: transparent;}\r\n\r\n\r\n.section-01 .heading-small {border-bottom: 2px solid #222; color: #222; float: left; margin: 7px 0 0; width: 100%; padding-bottom: 10px; font-size: 18px }\r\n\r\n\r\n.section-01 .title-small {margin-bottom: 5px; font-size:17px }\r\n\r\n\r\n.section-01 .news-block{border-bottom: 1px dashed #000; padding-bottom: 30px; border: none;}\r\n\r\n\r\n.section-01 aside > .news-block{border-bottom: 1px dashed #000; padding-bottom: 19px;}\r\n\r\n\r\n.section-01 aside > .news-block:last-child{border-bottom: none; margin-bottom: 20px}\r\n\r\n\r\n.section-01 .card{border: none;}\r\n\r\n\r\n.section-01 .card-block{padding: 10px 0;}\r\n\r\n\r\n.section-01 .video-sec {float: left; margin-top: 30px; width: 100%;}\r\n\r\n\r\n.section-01 .video-block {float: left; margin-top: 20px; width: 100%;}\r\n\r\n\r\n.action-sec{width:100%; float:left; background:#222}\r\n\r\n\r\n.action-box{float:left; width:100%; text-align:center;}\r\n\r\n\r\n.action-box h2{color:#fff; font-size:20px;}\r\n\r\n\r\n/* Carausel logo */\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\n\n\n<section class=\"banner-sec\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"card\"> <img class=\"img-fluid\" src=\"http://grafreez.com/wp-content/temp_demos/river/img/politics.jpg\"\n            alt=\"\">\n          <div class=\"card-img-overlay\"> <span class=\"badge badge-pill badge-danger\">News</span> </div>\n          <div class=\"card-body\">\n            <div class=\"news-title\">\n              <h2 class=\" title-small\"><a href=\"#\">Syria war: Why the battle for Aleppo matters</a></h2>\n            </div>\n            <p class=\"card-text\"><small class=\"text-time\"><em>3 mins ago</em></small></p>\n          </div>\n        </div>\n        <div class=\"card\"> <img class=\"img-fluid\" src=\"http://grafreez.com/wp-content/temp_demos/river/img/travel.jpg\"\n            alt=\"\">\n          <div class=\"card-img-overlay\"> <span class=\"badge badge-pill badge-danger\">Politics</span> </div>\n          <div class=\"card-body\">\n            <div class=\"news-title\">\n              <h2 class=\" title-small\"><a href=\"#\">Key Republicans sign letter warning against</a></h2>\n            </div>\n            <p class=\"card-text\"><small class=\"text-time\"><em>3 mins ago</em></small></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"card\"> <img class=\"img-fluid\"\n            src=\"http://grafreez.com/wp-content/temp_demos/river/img/business1.jpg\" alt=\"\">\n          <div class=\"card-img-overlay\"> <span class=\"badge badge-pill badge-danger\">Travel</span> </div>\n          <div class=\"card-body\">\n            <div class=\"news-title\">\n              <h2 class=\" title-small\"><a href=\"#\">Obamacare Appears to Be Making People Healthier</a></h2>\n            </div>\n            <p class=\"card-text\"><small class=\"text-time\"><em>3 mins ago</em></small></p>\n          </div>\n        </div>\n        <div class=\"card\"> <img class=\"img-fluid\" src=\"http://grafreez.com/wp-content/temp_demos/river/img/food.jpg\"\n            alt=\"\">\n          <div class=\"card-img-overlay\"> <span class=\"badge badge-pill badge-danger\">News</span> </div>\n          <div class=\"card-body\">\n            <div class=\"news-title\">\n              <h2 class=\" title-small\"><a href=\"#\">‘S.N.L.’ to Lose Two Longtime Cast Members</a></h2>\n            </div>\n            <p class=\"card-text\"><small class=\"text-time\"><em>3 mins ago</em></small></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 top-slider\">\n        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n          <!-- Indicators -->\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n          </ol>\n\n          <!-- Wrapper for slides -->\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"carousel-item active\">\n              <div class=\"news-block\">\n                <div class=\"news-media\"><img class=\"img-fluid\"\n                    src=\"http://grafreez.com/wp-content/temp_demos/river/img/politics1.jpg\" alt=\"\"></div>\n                <div class=\"news-title\">\n                  <h2 class=\" title-large\"><a href=\"#\">Ray madison may struggle to get best from Paul in a 4-2-3-1\n                      formation</a></h2>\n                </div>\n                <div class=\"news-des\">Condimentum ultrices mi est a arcu at cum a elementum per cum turpis dui vulputate\n                  vestibulum in vehicula montes vel. Mauris nam suspendisse consectetur mus...</div>\n                <div class=\"time-text\"><strong>2h ago</strong></div>\n                <div></div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"news-block\">\n                <div class=\"news-media\"><img class=\"img-fluid\"\n                    src=\"http://grafreez.com/wp-content/temp_demos/river/img/sport1.jpg\" alt=\"\"></div>\n                <div class=\"news-title\">\n                  <h2 class=\" title-large\"><a href=\"#\">An Alternative Form of Mental Health Care Gains a Foothold</a>\n                  </h2>\n                </div>\n                <div class=\"news-des\">Condimentum ultrices mi est a arcu at cum a elementum per cum turpis dui vulputate\n                  vestibulum in vehicula montes vel. Mauris nam suspendisse consectetur mus...</div>\n                <div class=\"time-text\"><strong>2h ago</strong></div>\n                <div></div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"news-block\">\n                <div class=\"news-media\"><img class=\"img-fluid\"\n                    src=\"http://grafreez.com/wp-content/temp_demos/river/img/health.jpg\" alt=\"\"></div>\n                <div class=\"news-title\">\n                  <h2 class=\" title-large\"><a href=\"#\">Key Republican Senator Says She Will Not Vote for former\n                      president!</a></h2>\n                </div>\n                <div class=\"news-des\">Condimentum ultrices mi est a arcu at cum a elementum per cum turpis dui vulputate\n                  vestibulum in vehicula montes vel. Mauris nam suspendisse consectetur mus...</div>\n                <div class=\"time-text\"><strong>2h ago</strong></div>\n                <div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-jobs-overview></app-jobs-overview>\n<app-footer> </app-footer>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.ngAfterViewInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/user-loggedin/home/home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-loggedin/home/home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-loggedin/home/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-loggedin/home/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/user-loggedin/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-loggedin/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/user-loggedin/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/user-loggedin/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/user-loggedin/user-loggedin-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-loggedin/user-loggedin-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UserLoggedinRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoggedinRoutingModule", function() { return UserLoggedinRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/user-loggedin/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var UserLoggedinRoutingModule = /** @class */ (function () {
    function UserLoggedinRoutingModule() {
    }
    UserLoggedinRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserLoggedinRoutingModule);
    return UserLoggedinRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-loggedin/user-loggedin.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-loggedin/user-loggedin.module.ts ***!
  \*******************************************************/
/*! exports provided: UserLoggedinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoggedinModule", function() { return UserLoggedinModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_loggedin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-loggedin-routing.module */ "./src/app/user-loggedin/user-loggedin-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/user-loggedin/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserLoggedinModule = /** @class */ (function () {
    function UserLoggedinModule() {
    }
    UserLoggedinModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_loggedin_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserLoggedinRoutingModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], UserLoggedinModule);
    return UserLoggedinModule;
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

module.exports = __webpack_require__(/*! C:\Users\USER\Documents\MEAN\Proj\DailyJobs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
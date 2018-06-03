var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { FacebookLoginService } from '../facebook-login/facebook-login.service';
import { GoogleLoginService } from '../google-login/google-login.service';
import { TwitterLoginService } from '../twitter-login/twitter-login.service';
var LoginPage = (function () {
    function LoginPage(nav, facebookLoginService, googleLoginService, twitterLoginService, loadingCtrl) {
        this.nav = nav;
        this.facebookLoginService = facebookLoginService;
        this.googleLoginService = googleLoginService;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.main_page = { component: TabsNavigationPage };
        this.login = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('test', Validators.required)
        });
    }
    LoginPage.prototype.doLogin = function () {
        this.nav.setRoot(this.main_page.component);
    };
    LoginPage.prototype.doFacebookLogin = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        // let this = this;
        this.facebookLoginService.getFacebookUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            _this.nav.setRoot(_this.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            _this.facebookLoginService.doFacebookLogin()
                .then(function (res) {
                _this.loading.dismiss();
                _this.nav.setRoot(_this.main_page.component);
            }, function (err) {
                console.log("Facebook Login error", err);
            });
        });
    };
    LoginPage.prototype.doGoogleLogin = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        this.googleLoginService.trySilentLogin()
            .then(function (data) {
            // user is previously logged with Google and we have his data we will let him access the app
            _this.nav.setRoot(_this.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            _this.googleLoginService.doGoogleLogin()
                .then(function (res) {
                _this.loading.dismiss();
                _this.nav.setRoot(_this.main_page.component);
            }, function (err) {
                console.log("Google Login error", err);
            });
        });
    };
    LoginPage.prototype.doTwitterLogin = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        this.twitterLoginService.getTwitterUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            _this.nav.setRoot(_this.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            _this.twitterLoginService.doTwitterLogin()
                .then(function (res) {
                _this.loading.dismiss();
                _this.nav.setRoot(_this.main_page.component);
            }, function (err) {
                console.log("Twitter Login error", err);
            });
        });
    };
    LoginPage.prototype.goToSignup = function () {
        this.nav.push(SignupPage);
    };
    LoginPage.prototype.goToForgotPassword = function () {
        this.nav.push(ForgotPasswordPage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'login-page',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController,
        FacebookLoginService,
        GoogleLoginService,
        TwitterLoginService,
        LoadingController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map
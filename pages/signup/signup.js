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
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { FacebookLoginService } from '../facebook-login/facebook-login.service';
import { GoogleLoginService } from '../google-login/google-login.service';
import { TwitterLoginService } from '../twitter-login/twitter-login.service';
var SignupPage = (function () {
    function SignupPage(nav, modal, facebookLoginService, googleLoginService, twitterLoginService, loadingCtrl) {
        this.nav = nav;
        this.modal = modal;
        this.facebookLoginService = facebookLoginService;
        this.googleLoginService = googleLoginService;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.main_page = { component: TabsNavigationPage };
        this.signup = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('test', Validators.required),
            confirm_password: new FormControl('test', Validators.required)
        });
    }
    SignupPage.prototype.doSignup = function () {
        this.nav.setRoot(this.main_page.component);
    };
    SignupPage.prototype.doFacebookSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in
        // because we don't want to ask users to log in each time they open the app
        var env = this;
        this.facebookLoginService.getFacebookUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            env.nav.setRoot(env.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.facebookLoginService.doFacebookLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Facebook Login error", err);
                env.loading.dismiss();
            });
        });
    };
    SignupPage.prototype.doTwitterSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in
        // because we don't want to ask users to log in each time they open the app
        var env = this;
        this.twitterLoginService.getTwitterUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            env.nav.setRoot(env.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.twitterLoginService.doTwitterLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Facebook Login error", err);
                env.loading.dismiss();
            });
        });
    };
    SignupPage.prototype.doGoogleSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        var env = this;
        this.googleLoginService.trySilentLogin()
            .then(function (data) {
            // user is previously logged with Google and we have his data we will let him access the app
            env.nav.setRoot(env.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.googleLoginService.doGoogleLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Google Login error", err);
                env.loading.dismiss();
            });
        });
    };
    SignupPage.prototype.showTermsModal = function () {
        var modal = this.modal.create(TermsOfServicePage);
        modal.present();
    };
    SignupPage.prototype.showPrivacyModal = function () {
        var modal = this.modal.create(PrivacyPolicyPage);
        modal.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Component({
        selector: 'signup-page',
        templateUrl: 'signup.html'
    }),
    __metadata("design:paramtypes", [NavController,
        ModalController,
        FacebookLoginService,
        GoogleLoginService,
        TwitterLoginService,
        LoadingController])
], SignupPage);
export { SignupPage };
//# sourceMappingURL=signup.js.map
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
import { FacebookUserModel } from './facebook-user.model';
import { FacebookLoginService } from './facebook-login.service';
var FacebookLoginPage = (function () {
    function FacebookLoginPage(nav, facebookLoginService, loadingCtrl) {
        this.nav = nav;
        this.facebookLoginService = facebookLoginService;
        this.loadingCtrl = loadingCtrl;
        this.user = new FacebookUserModel();
        this.loading = this.loadingCtrl.create();
    }
    FacebookLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.facebookLoginService.getFacebookUser()
            .then(function (user) {
            _this.user = user;
            _this.loading.dismiss();
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
        });
    };
    FacebookLoginPage.prototype.doFacebookLogout = function () {
        var _this = this;
        this.facebookLoginService.doFacebookLogout()
            .then(function (res) {
            _this.user = new FacebookUserModel();
        }, function (error) {
            console.log("Facebook logout error", error);
        });
    };
    FacebookLoginPage.prototype.doFacebookLogin = function () {
        var _this = this;
        this.facebookLoginService.doFacebookLogin()
            .then(function (user) {
            _this.user = user;
        }, function (err) {
            console.log("Facebook Login error", err);
        });
    };
    return FacebookLoginPage;
}());
FacebookLoginPage = __decorate([
    Component({
        selector: 'facebook-login-page',
        templateUrl: 'facebook-login.html'
    }),
    __metadata("design:paramtypes", [NavController,
        FacebookLoginService,
        LoadingController])
], FacebookLoginPage);
export { FacebookLoginPage };
//# sourceMappingURL=facebook-login.js.map
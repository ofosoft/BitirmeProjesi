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
import { GoogleUserModel } from './google-user.model';
import { GoogleLoginService } from './google-login.service';
var GoogleLoginPage = (function () {
    function GoogleLoginPage(navCtrl, googleLoginService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.googleLoginService = googleLoginService;
        this.loadingCtrl = loadingCtrl;
        this.user = new GoogleUserModel();
        this.loading = this.loadingCtrl.create();
    }
    GoogleLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.googleLoginService.getGoogleUser()
            .then(function (user) {
            _this.user = user;
            _this.loading.dismiss();
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
        });
    };
    GoogleLoginPage.prototype.doGoogleLogout = function () {
        var _this = this;
        this.googleLoginService.doGoogleLogout()
            .then(function (res) {
            _this.user = new GoogleUserModel();
        }, function (error) {
            console.log("Google logout error", error);
        });
    };
    GoogleLoginPage.prototype.doGoogleLogin = function () {
        var _this = this;
        this.googleLoginService.doGoogleLogin()
            .then(function (user) {
            _this.user = user;
        }, function (err) {
            console.log("Google Login error", err);
        });
    };
    return GoogleLoginPage;
}());
GoogleLoginPage = __decorate([
    Component({
        selector: 'google-login-page',
        templateUrl: 'google-login.html'
    }),
    __metadata("design:paramtypes", [NavController,
        GoogleLoginService,
        LoadingController])
], GoogleLoginPage);
export { GoogleLoginPage };
//# sourceMappingURL=google-login.js.map
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
import { TwitterUserModel } from './twitter-user.model';
import { TwitterLoginService } from './twitter-login.service';
var TwitterLoginPage = (function () {
    function TwitterLoginPage(navCtrl, twitterLoginService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.user = new TwitterUserModel();
        this.loading = this.loadingCtrl.create();
    }
    TwitterLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.twitterLoginService.getTwitterUser()
            .then(function (user) {
            _this.user = user;
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    TwitterLoginPage.prototype.doTwitterLogout = function () {
        var _this = this;
        this.twitterLoginService.doTwitterLogout()
            .then(function (res) {
            _this.user = new TwitterUserModel();
        }, function (err) {
            console.log("Twitter logout error", err);
        });
    };
    TwitterLoginPage.prototype.doTwitterLogin = function () {
        var _this = this;
        this.twitterLoginService.doTwitterLogin()
            .then(function (user) {
            _this.user = user;
        }, function (err) {
            console.log("Twitter Login error", err);
        });
    };
    return TwitterLoginPage;
}());
TwitterLoginPage = __decorate([
    Component({
        selector: 'twitter-login-page',
        templateUrl: 'twitter-login.html'
    }),
    __metadata("design:paramtypes", [NavController,
        TwitterLoginService,
        LoadingController])
], TwitterLoginPage);
export { TwitterLoginPage };
//# sourceMappingURL=twitter-login.js.map
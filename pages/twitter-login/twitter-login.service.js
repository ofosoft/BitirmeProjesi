var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NativeStorage } from '@ionic-native/native-storage';
import { TwitterConnect } from '@ionic-native/twitter-connect';
var TwitterLoginService = (function () {
    function TwitterLoginService(http, nativeStorage, twitter) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.twitter = twitter;
    }
    TwitterLoginService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.twitter.login().then(function (resp) {
                //Getting user data
                _this.twitter.showUser().then(function (user) {
                    //now we have the users info, let's save it in the NativeStorage
                    _this.setTwitterUser(user).then(function (res) {
                        resolve(res);
                    });
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    TwitterLoginService.prototype.doTwitterLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.twitter.logout().then(function (res) {
                //user logged out so we will remove him from the NativeStorage
                _this.nativeStorage.remove('twitter_user');
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    TwitterLoginService.prototype.getTwitterUser = function () {
        return this.nativeStorage.getItem('twitter_user');
    };
    TwitterLoginService.prototype.setTwitterUser = function (user) {
        var _this = this;
        console.log(user);
        return new Promise(function (resolve, reject) {
            resolve(_this.nativeStorage.setItem('twitter_user', {
                name: user.name,
                image: (user.profile_image_url).replace("_normal", ""),
                userId: user.id_str,
                following: user.friends_count,
                followers: user.followers_count,
                location: user.location,
                description: user.description,
                screenName: user.screen_name
            }));
        });
    };
    TwitterLoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TwitterLoginService;
}());
TwitterLoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        NativeStorage,
        TwitterConnect])
], TwitterLoginService);
export { TwitterLoginService };
//# sourceMappingURL=twitter-login.service.js.map
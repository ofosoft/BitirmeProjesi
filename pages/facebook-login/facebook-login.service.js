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
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
var FacebookLoginService = (function () {
    function FacebookLoginService(http, nativeStorage, fb) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.fb = fb;
        this.FB_APP_ID = 826720427470540;
        this.fb.browserInit(this.FB_APP_ID, "v2.8");
    }
    FacebookLoginService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //["public_profile"] is the array of permissions, you can add more if you need
            _this.fb.login(["public_profile"]).then(function (response) {
                //Getting name and gender properties
                _this.fb.api("/me?fields=name,gender", [])
                    .then(function (user) {
                    //now we have the users info, let's save it in the NativeStorage
                    _this.setFacebookUser(user)
                        .then(function (res) {
                        resolve(res);
                    });
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    FacebookLoginService.prototype.doFacebookLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fb.logout()
                .then(function (res) {
                //user logged out so we will remove him from the NativeStorage
                _this.nativeStorage.remove('facebook_user');
                resolve();
            }, function (err) {
                reject();
            });
        });
    };
    FacebookLoginService.prototype.getFacebookUser = function () {
        return this.nativeStorage.getItem('facebook_user');
    };
    FacebookLoginService.prototype.setFacebookUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getFriendsFakeData()
                .then(function (data) {
                resolve(_this.nativeStorage.setItem('facebook_user', {
                    userId: user.id,
                    name: user.name,
                    gender: user.gender,
                    image: "https://graph.facebook.com/" + user.id + "/picture?type=large",
                    friends: data.friends,
                    photos: data.photos
                }));
            });
        });
    };
    FacebookLoginService.prototype.getFriendsFakeData = function () {
        return this.http.get('./assets/example_data/social_integrations.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FacebookLoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FacebookLoginService;
}());
FacebookLoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        NativeStorage,
        Facebook])
], FacebookLoginService);
export { FacebookLoginService };
//# sourceMappingURL=facebook-login.service.js.map
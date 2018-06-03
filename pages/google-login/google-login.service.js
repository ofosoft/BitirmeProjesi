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
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeStorage } from '@ionic-native/native-storage';
var GoogleLoginService = (function () {
    function GoogleLoginService(http, nativeStorage, googlePlus) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.googlePlus = googlePlus;
        this.webClientId = "1092390853283-i98feg7fb1dlsm92kkcbim62855pepi8.apps.googleusercontent.com";
    }
    GoogleLoginService.prototype.trySilentLogin = function () {
        var _this = this;
        //checks if user is already signed in to the app and sign them in silently if they are.
        return new Promise(function (resolve, reject) {
            _this.googlePlus.trySilentLogin({
                'scopes': '',
                'webClientId': _this.webClientId,
                'offline': true
            })
                .then(function (user) {
                _this.setGoogleUser(user)
                    .then(function (res) {
                    resolve(res);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    GoogleLoginService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.googlePlus.login({
                'scopes': '',
                'webClientId': _this.webClientId,
                'offline': true
            })
                .then(function (user) {
                _this.setGoogleUser(user)
                    .then(function (res) {
                    resolve(res);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    GoogleLoginService.prototype.doGoogleLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.googlePlus.logout()
                .then(function (response) {
                //user logged out so we will remove him from the NativeStorage
                _this.nativeStorage.remove('google_user');
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    GoogleLoginService.prototype.getGoogleUser = function () {
        return this.nativeStorage.getItem('google_user');
    };
    GoogleLoginService.prototype.setGoogleUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getFriendsFakeData()
                .then(function (data) {
                resolve(_this.nativeStorage.setItem('google_user', {
                    userId: user.userId,
                    name: user.displayName,
                    email: user.email,
                    image: user.imageUrl,
                    friends: data.friends,
                    photos: data.photos
                }));
            });
        });
    };
    GoogleLoginService.prototype.getFriendsFakeData = function () {
        return this.http.get('./assets/example_data/social_integrations.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GoogleLoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return GoogleLoginService;
}());
GoogleLoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        NativeStorage,
        GooglePlus])
], GoogleLoginService);
export { GoogleLoginService };
//# sourceMappingURL=google-login.service.js.map
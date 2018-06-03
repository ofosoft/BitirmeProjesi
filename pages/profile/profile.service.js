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
var ProfileService = (function () {
    function ProfileService(http, nativeStorage) {
        this.http = http;
        this.nativeStorage = nativeStorage;
    }
    ProfileService.prototype.getData = function () {
        return this.http.get('./assets/example_data/profile.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProfileService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProfileService.prototype.getUserImage = function () {
        return this.nativeStorage.getItem('profileImage');
    };
    ProfileService.prototype.setUserImage = function (newImage) {
        this.nativeStorage.setItem('profileImage', newImage);
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        NativeStorage])
], ProfileService);
export { ProfileService };
//# sourceMappingURL=profile.service.js.map
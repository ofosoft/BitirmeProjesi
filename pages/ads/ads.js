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
import { NavController, ToastController, Platform } from 'ionic-angular';
import { AdMobFree } from '@ionic-native/admob-free';
var AdsPage = (function () {
    function AdsPage(nav, admob, toastCtrl, platform) {
        this.nav = nav;
        this.admob = admob;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.bannerConfig = {
            // add your banner config here
            // for the sake of this example we will just use the test config
            isTesting: true,
            autoShow: true,
        };
        this.interstitialConfig = {
            // add your config here
            // for the sake of this example we will just use the test config
            isTesting: true,
            autoShow: true,
        };
    }
    AdsPage.prototype.ionViewWillLoad = function () {
        this.admob.banner.config(this.bannerConfig);
        this.admob.interstitial.config(this.interstitialConfig);
    };
    AdsPage.prototype.showBanner = function () {
        var toast = this.toastCtrl.create({
            message: 'Your ad is being created...',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.admob.banner.prepare()
            .then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        })
            .catch(function (e) { return console.log(e); });
    };
    AdsPage.prototype.removeBanner = function () {
        this.admob.banner.remove()
            .then(function () {
            console.log("removeBanner");
        })
            .catch(function (e) { return console.log(e); });
    };
    AdsPage.prototype.showInterstitial = function () {
        this.admob.interstitial.prepare()
            .then(function () {
            // interstitial Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        })
            .catch(function (e) { return console.log(e); });
    };
    return AdsPage;
}());
AdsPage = __decorate([
    Component({
        selector: 'ads-page',
        templateUrl: 'ads.html'
    }),
    __metadata("design:paramtypes", [NavController,
        AdMobFree,
        ToastController,
        Platform])
], AdsPage);
export { AdsPage };
//# sourceMappingURL=ads.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
var WalkthroughPage = (function () {
    function WalkthroughPage(nav) {
        this.nav = nav;
        this.lastSlide = false;
    }
    WalkthroughPage.prototype.skipIntro = function () {
        // You can skip to main app
        // this.nav.setRoot(TabsNavigationPage);
        // Or you can skip to last slide (login/signup slide)
        this.lastSlide = true;
        this.slider.slideTo(this.slider.length());
    };
    WalkthroughPage.prototype.onSlideChanged = function () {
        // If it's the last slide, then hide the 'Skip' button on the header
        this.lastSlide = this.slider.isEnd();
    };
    WalkthroughPage.prototype.goToLogin = function () {
        this.nav.push(LoginPage);
    };
    WalkthroughPage.prototype.goToSignup = function () {
        this.nav.push(SignupPage);
    };
    return WalkthroughPage;
}());
__decorate([
    ViewChild('slider'),
    __metadata("design:type", Slides)
], WalkthroughPage.prototype, "slider", void 0);
WalkthroughPage = __decorate([
    Component({
        selector: 'walkthrough-page',
        templateUrl: 'walkthrough.html'
    }),
    __metadata("design:paramtypes", [NavController])
], WalkthroughPage);
export { WalkthroughPage };
//# sourceMappingURL=walkthrough.js.map
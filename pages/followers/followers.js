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
import { MenuController, NavParams } from 'ionic-angular';
var FollowersPage = (function () {
    function FollowersPage(menu, navParams) {
        this.menu = menu;
        this.navParams = navParams;
        this.list = [];
        this.list = navParams.get('list');
    }
    FollowersPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on this page
        this.menu.enable(false);
    };
    FollowersPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return FollowersPage;
}());
FollowersPage = __decorate([
    Component({
        selector: 'followers-page',
        templateUrl: 'followers.html'
    }),
    __metadata("design:paramtypes", [MenuController, NavParams])
], FollowersPage);
export { FollowersPage };
//# sourceMappingURL=followers.js.map
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
import { MenuController, App, NavParams, LoadingController } from 'ionic-angular';
import { FollowersPage } from '../followers/followers';
import { SettingsPage } from '../settings/settings';
import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service';
import { SocialSharing } from '@ionic-native/social-sharing';
import 'rxjs/Rx';
var ProfilePage = (function () {
    function ProfilePage(menu, app, navParams, profileService, loadingCtrl, socialSharing) {
        this.menu = menu;
        this.app = app;
        this.navParams = navParams;
        this.profileService = profileService;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.profile = new ProfileModel();
        this.display = "list";
        this.loading = this.loadingCtrl.create();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.profileService.getData()
            .then(function (data) {
            _this.profile.user = data.user;
            _this.profile.following = data.following;
            _this.profile.followers = data.followers;
            _this.profile.posts = data.posts;
            _this.loading.dismiss();
        });
    };
    ProfilePage.prototype.goToFollowersList = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(FollowersPage, {
            list: this.profile.followers
        });
    };
    ProfilePage.prototype.goToFollowingList = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(FollowersPage, {
            list: this.profile.following
        });
    };
    ProfilePage.prototype.goToSettings = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(SettingsPage);
    };
    ProfilePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    ProfilePage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    ProfilePage.prototype.sharePost = function (post) {
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(post.description, post.title, post.image)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Component({
        selector: 'profile-page',
        templateUrl: 'profile.html'
    }),
    __metadata("design:paramtypes", [MenuController,
        App,
        NavParams,
        ProfileService,
        LoadingController,
        SocialSharing])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.js.map
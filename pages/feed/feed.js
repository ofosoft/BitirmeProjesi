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
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import 'rxjs/Rx';
import { FeedModel } from './feed.model';
import { FeedService } from './feed.service';
import { SocialSharing } from '@ionic-native/social-sharing';
var FeedPage = (function () {
    function FeedPage(nav, feedService, navParams, loadingCtrl, socialSharing) {
        this.nav = nav;
        this.feedService = feedService;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.feed = new FeedModel();
        this.feed.category = navParams.get('category');
        this.loading = this.loadingCtrl.create();
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.feedService
            .getPosts()
            .then(function (posts) {
            _this.feed.posts = posts;
            _this.loading.dismiss();
        });
    };
    FeedPage.prototype.goToProfile = function (event, item) {
        this.nav.push(ProfilePage, {
            user: item
        });
    };
    FeedPage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    FeedPage.prototype.sharePost = function (post) {
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(post.description, post.title, post.image, null)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Component({
        selector: 'feed-page',
        templateUrl: 'feed.html'
    }),
    __metadata("design:paramtypes", [NavController,
        FeedService,
        NavParams,
        LoadingController,
        SocialSharing])
], FeedPage);
export { FeedPage };
//# sourceMappingURL=feed.js.map
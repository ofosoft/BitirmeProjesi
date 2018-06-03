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
import { NavController } from 'ionic-angular';
import { MapsPage } from '../maps/maps';
import { FacebookLoginPage } from '../facebook-login/facebook-login';
import { GoogleLoginPage } from '../google-login/google-login';
import { TwitterLoginPage } from '../twitter-login/twitter-login';
import { ContactCardPage } from '../contact-card/contact-card';
import { AdsPage } from '../ads/ads';
import { VideoPlaylistPage } from '../video-playlist/video-playlist';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
var FunctionalitiesPage = (function () {
    function FunctionalitiesPage(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    FunctionalitiesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        Observable.forkJoin(this.translate.get('FACEBOOK_INTEGRATION'), this.translate.get('GOOGLE_INTEGRATION'), this.translate.get('TWITTER_INTEGRATION'), this.translate.get('CONTACT_CARD'), this.translate.get('MAPS'), this.translate.get('VIDEO_PLAYLIST'), this.translate.get('ADS')).subscribe(function (data) {
            _this.items = [
                { title: data[0], component: FacebookLoginPage },
                { title: data[1], component: GoogleLoginPage },
                { title: data[2], component: TwitterLoginPage },
                { title: data[3], component: ContactCardPage },
                { title: data[4], component: MapsPage },
                { title: data[5], component: VideoPlaylistPage },
                { title: data[6], component: AdsPage }
            ];
        });
    };
    FunctionalitiesPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    return FunctionalitiesPage;
}());
FunctionalitiesPage = __decorate([
    Component({
        selector: 'functionalities-page',
        templateUrl: 'functionalities.html'
    }),
    __metadata("design:paramtypes", [NavController,
        TranslateService])
], FunctionalitiesPage);
export { FunctionalitiesPage };
//# sourceMappingURL=functionalities.js.map
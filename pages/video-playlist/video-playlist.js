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
import { NavController, LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { VideoPlaylistModel } from './video-playlist.model';
var VideoPlaylistPage = (function () {
    function VideoPlaylistPage(nav, loadingCtrl, socialSharing) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.start_playing = false;
        this.video_playlist_model = new VideoPlaylistModel();
    }
    VideoPlaylistPage.prototype.createLoader = function () {
        this.loading = this.loadingCtrl.create();
    };
    VideoPlaylistPage.prototype.presentLoader = function () {
        // Check if the current instance is usable
        if (this.loading === undefined || (this.loading !== undefined && this.loading.instance === null)) {
            // If it's not usable, then create a new one
            this.createLoader();
        }
        this.loading.present();
    };
    VideoPlaylistPage.prototype.dismissLoader = function () {
        // Check if the current instance is usable
        if (this.loading !== undefined) {
            // If it's not usable, then create a new one
            this.loading.dismiss();
        }
    };
    VideoPlaylistPage.prototype.playMedia = function (media) {
        // Check if this media is not the same we are currently playing
        if (media !== this.video_playlist_model.selected_video) {
            this.presentLoader();
            // Change sources
            this.video_playlist_model.selected_video = media;
            // When changing sources we wait until the metadata is loaded and then we start playing the video
        }
    };
    VideoPlaylistPage.prototype.onPlayerReady = function (api) {
        this.api = api;
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    };
    VideoPlaylistPage.prototype.playVideo = function () {
        if (this.start_playing) {
            this.dismissLoader();
            this.api.play();
        }
        else {
            this.start_playing = true;
        }
    };
    VideoPlaylistPage.prototype.shareVideo = function () {
        var current_video = this.video_playlist_model.selected_video;
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(current_video.description, current_video.title, current_video.thumbnail, null)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    return VideoPlaylistPage;
}());
VideoPlaylistPage = __decorate([
    Component({
        selector: 'video-playlist-page',
        templateUrl: 'video-playlist.html',
    }),
    __metadata("design:paramtypes", [NavController,
        LoadingController,
        SocialSharing])
], VideoPlaylistPage);
export { VideoPlaylistPage };
//# sourceMappingURL=video-playlist.js.map
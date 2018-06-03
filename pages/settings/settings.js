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
import { NavController, ModalController, LoadingController, Platform } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { WalkthroughPage } from '../walkthrough/walkthrough';
import 'rxjs/Rx';
import { ProfileModel } from '../profile/profile.model';
import { ProfileService } from '../profile/profile.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from "../../providers/language/language.service";
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
var SettingsPage = (function () {
    function SettingsPage(nav, modal, loadingCtrl, translate, languageService, profileService, appRate, imagePicker, cropService, platform) {
        this.nav = nav;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.languageService = languageService;
        this.profileService = profileService;
        this.appRate = appRate;
        this.imagePicker = imagePicker;
        this.cropService = cropService;
        this.platform = platform;
        // make WalkthroughPage the root (or first) page
        this.rootPage = WalkthroughPage;
        this.profile = new ProfileModel();
        this.loading = this.loadingCtrl.create();
        this.languages = this.languageService.getLanguages();
        this.settingsForm = new FormGroup({
            name: new FormControl(),
            location: new FormControl(),
            description: new FormControl(),
            currency: new FormControl(),
            weather: new FormControl(),
            notifications: new FormControl(),
            language: new FormControl()
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.profileService.getData().then(function (data) {
            _this.profile.user = data.user;
            // setValue: With setValue, you assign every form control value at once by passing in a data object whose properties exactly match the form model behind the FormGroup.
            // patchValue: With patchValue, you can assign values to specific controls in a FormGroup by supplying an object of key/value pairs for just the controls of interest.
            // More info: https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#populate-the-form-model-with-_setvalue_-and-_patchvalue_
            _this.settingsForm.patchValue({
                name: data.user.name,
                location: data.user.location,
                description: data.user.about,
                currency: 'dollar',
                weather: 'fahrenheit',
                notifications: true,
                language: _this.languages[0]
            });
            _this.loading.dismiss();
            _this.settingsForm.get('language').valueChanges.subscribe(function (lang) {
                _this.setLanguage(lang);
            });
        });
    };
    SettingsPage.prototype.logout = function () {
        // navigate to the new page if it is not the current page
        this.nav.setRoot(this.rootPage);
    };
    SettingsPage.prototype.showTermsModal = function () {
        var modal = this.modal.create(TermsOfServicePage);
        modal.present();
    };
    SettingsPage.prototype.showPrivacyModal = function () {
        var modal = this.modal.create(PrivacyPolicyPage);
        modal.present();
    };
    SettingsPage.prototype.setLanguage = function (lang) {
        var language_to_set = this.translate.getDefaultLang();
        if (lang) {
            language_to_set = lang.code;
        }
        this.translate.setDefaultLang(language_to_set);
        this.translate.use(language_to_set);
    };
    SettingsPage.prototype.rateApp = function () {
        this.appRate.preferences.storeAppURL = {
            ios: '<my_app_id>',
            android: 'market://details?id=<package_name>',
            windows: 'ms-windows-store://review/?ProductId=<Store_ID>'
        };
        this.appRate.promptForRating(true);
    };
    SettingsPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.cropService.crop(results[i], { quality: 75 }).then(function (newImage) {
                            _this.profileService.setUserImage(newImage);
                            _this.profile.user.image = newImage;
                        }, function (error) { return console.error("Error cropping image", error); });
                    }
                }, function (err) { return console.log(err); });
            }
        });
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Component({
        selector: 'settings-page',
        templateUrl: 'settings.html'
    }),
    __metadata("design:paramtypes", [NavController,
        ModalController,
        LoadingController,
        TranslateService,
        LanguageService,
        ProfileService,
        AppRate,
        ImagePicker,
        Crop,
        Platform])
], SettingsPage);
export { SettingsPage };
//# sourceMappingURL=settings.js.map
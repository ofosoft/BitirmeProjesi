var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Pipe } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactModel } from './contact.model';
import { ContactService } from './contact.service';
import 'rxjs/Rx';
var ContactCardPage = (function () {
    function ContactCardPage(navCtrl, navParams, loadingCtrl, ContactService, emailComposer, inAppBrowser, domSanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.ContactService = ContactService;
        this.emailComposer = emailComposer;
        this.inAppBrowser = inAppBrowser;
        this.domSanitizer = domSanitizer;
        this.contact = new ContactModel();
        /* this.ContactService.firma(this.navParams.get('firmaId')).subscribe(
             data => {
                 this.firma = data;
                 console.log(this.firma);
     
             },
             err => {
                 console.log(err);
             }
         );*/
        this.ContactService
            .firma(this.navParams.get('firmaId'))
            .then(function (data) {
            _this.firma = data;
            console.log(_this.firma);
        });
    }
    ContactCardPage.prototype.transform = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ContactCardPage.prototype.ionViewDidLoad = function () {
        /* this.ContactService.firma(this.navParams.get('firmaId')).subscribe(
            data => {
                this.firma = data;
                console.log(this.firma);
    
            },
            err => {
                console.log(err);
            }
        );*/
    };
    //Note: we commented this method because the Call Number plugin was unstable and causing lots of errors. If you want to use it please go: https://ionicframework.com/docs/native/call-number/
    /* call(number: string){
       this.callNumber.callNumber(number, true)
       .then(() => console.log('Launched dialer!'))
       .catch(() => console.log('Error launching dialer'));
     }*/
    ContactCardPage.prototype.sendMail = function () {
        //for more option please go here: http://ionicframework.com/docs/native/email-composer/
        var email = {
            to: 'contact@ionicthemes.com',
            subject: 'This app is the best!',
            body: "Hello, I'm trying this fantastic app that will save me hours of development"
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    ContactCardPage.prototype.openInAppBrowser = function (website) {
        if (website != "http://" && website != "") {
            this.inAppBrowser.create(website, '_blank', "location=yes");
        }
    };
    ContactCardPage.prototype.googleUrl = function () {
        return this.domSanitizer.bypassSecurityTrustUrl("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1562838.8527110727!2d38.338999!3d40.088356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDDCsDA1JzE4LjEiTiAzOMKwMjAnMjAuNCJF!5e0!3m2!1str!2sus!4v1503476825375");
    };
    return ContactCardPage;
}());
ContactCardPage = __decorate([
    Pipe({ name: 'safe' }),
    Component({
        selector: 'contact-card-page',
        templateUrl: 'contact-card.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        LoadingController,
        ContactService,
        EmailComposer,
        InAppBrowser,
        DomSanitizer])
], ContactCardPage);
export { ContactCardPage };
//# sourceMappingURL=contact-card.js.map
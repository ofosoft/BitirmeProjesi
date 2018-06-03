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
import { ContactCardPage } from '../contact-card/contact-card';
import { AltSektorPage } from '../alt-sektor/alt-sektor';
import 'rxjs/Rx';
import { ListingModel } from './listing.model';
import { ListingService } from './listing.service';
var ListingPage = (function () {
    function ListingPage(nav, listingService, loadingCtrl) {
        this.nav = nav;
        this.listingService = listingService;
        this.loadingCtrl = loadingCtrl;
        this.listing = new ListingModel();
        this.loading = this.loadingCtrl.create({
            content: "Lütfen Bekleyiniz...",
            dismissOnPageChange: true
        });
    }
    ListingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.listingService.haberler().subscribe(function (data) {
            _this.listing.haberler = data;
        }, function (err) {
            console.log(err);
        });
        this.listingService.anasayfa_vitrin_firmalar().subscribe(function (data) {
            _this.listing.populerFirmalar = data;
        }, function (err) {
            console.log(err);
        });
        this.listingService.sektorler().subscribe(function (data) {
            _this.listing.sektorler = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.loading.dismiss();
    };
    ListingPage.prototype.altSektorGit = function (sektor) {
        console.log("Sektore Git:", sektor.sektorId);
        this.nav.push(AltSektorPage, { sektorId: sektor.sektorId });
    };
    ListingPage.prototype.firmayaGit = function (firma) {
        console.log("Firmaya Git:", firma.firmaId);
        this.nav.push(ContactCardPage, { firmaId: firma.firmaId });
    };
    return ListingPage;
}());
ListingPage = __decorate([
    Component({
        selector: 'listing-page',
        templateUrl: 'listing.html',
    }),
    __metadata("design:paramtypes", [NavController,
        ListingService,
        LoadingController])
], ListingPage);
export { ListingPage };
//# sourceMappingURL=listing.js.map
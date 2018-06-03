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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirmalarPage } from '../firmalar/firmalar';
ContactCardPage;
import { AltSektorService } from './alt-sektor.service';
var AltSektorPage = (function () {
    function AltSektorPage(nav, altSektorService, navParams) {
        this.nav = nav;
        this.altSektorService = altSektorService;
        this.navParams = navParams;
    }
    AltSektorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.altSektorService.sponsor_firmalar(this.navParams.get('sektorId')).subscribe(function (data) {
            _this.sponsorFirmalar = data;
        }, function (err) {
            console.log(err);
        });
        this.altSektorService.alt_sektorler(this.navParams.get('sektorId')).subscribe(function (data) {
            _this.altSektorler = data;
            _this.sektorAd = _this.altSektorler[0].sektorAd;
            console.log();
        }, function (err) {
            console.log(err);
        });
    };
    AltSektorPage.prototype.firmayaGit = function (firma) {
        console.log("Firmaya Git:", firma.firmaId);
        this.nav.push(ContactCardPage, { firmaId: firma.firmaId });
    };
    AltSektorPage.prototype.firmalarGit = function (altSektor) {
        console.log("AltSektor Git:", altSektor.asId);
        this.nav.push(FirmalarPage, { asId: altSektor.asId });
    };
    return AltSektorPage;
}());
AltSektorPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-alt-sektor',
        templateUrl: 'alt-sektor.html',
    }),
    __metadata("design:paramtypes", [NavController, AltSektorService, NavParams])
], AltSektorPage);
export { AltSektorPage };
//# sourceMappingURL=alt-sektor.js.map
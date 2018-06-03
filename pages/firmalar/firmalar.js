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
import { FirmalarService } from './firmalar.service';
import { ContactCardPage } from '../contact-card/contact-card';
var FirmalarPage = (function () {
    function FirmalarPage(nav, navParams, firmalarService) {
        this.nav = nav;
        this.navParams = navParams;
        this.firmalarService = firmalarService;
    }
    FirmalarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.firmalarService.firmalar(this.navParams.get('asId')).subscribe(function (data) {
            _this.firmalar = data;
        }, function (err) {
            console.log(err);
        });
    };
    FirmalarPage.prototype.firmaGit = function (firma) {
        console.log("Firmaya Git:", firma.firmaId);
        this.nav.push(ContactCardPage, { firmaId: firma.firmaId });
    };
    return FirmalarPage;
}());
FirmalarPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-firmalar',
        templateUrl: 'firmalar.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, FirmalarService])
], FirmalarPage);
export { FirmalarPage };
//# sourceMappingURL=firmalar.js.map
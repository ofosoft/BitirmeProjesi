var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var baseUrl = "http://www.sivasrehberim.net/servis";
var ListingService = (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.haberler = function () {
        return this.http.get(baseUrl + "/haberler").map(function (res) { return res.json(); });
    };
    ListingService.prototype.sektorler = function () {
        return this.http.get(baseUrl + "/sektorler").map(function (res) { return res.json(); });
    };
    ListingService.prototype.anasayfa_vitrin_firmalar = function () {
        return this.http.get(baseUrl + "/anasayfa_vitrin_firmalar").map(function (res) { return res.json(); });
    };
    ListingService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ListingService;
}());
ListingService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ListingService);
export { ListingService };
//# sourceMappingURL=listing.service.js.map
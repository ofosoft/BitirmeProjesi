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
import 'rxjs/Rx';
import { List1Model } from './list-1.model';
import { List1Service } from './list-1.service';
var List1Page = (function () {
    function List1Page(nav, list1Service, loadingCtrl) {
        this.nav = nav;
        this.list1Service = list1Service;
        this.loadingCtrl = loadingCtrl;
        this.list1 = new List1Model();
        this.loading = this.loadingCtrl.create();
    }
    List1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.list1Service
            .getData()
            .then(function (data) {
            _this.list1.items = data.items;
            _this.loading.dismiss();
        });
    };
    return List1Page;
}());
List1Page = __decorate([
    Component({
        selector: 'list-1-page',
        templateUrl: 'list-1.html'
    }),
    __metadata("design:paramtypes", [NavController,
        List1Service,
        LoadingController])
], List1Page);
export { List1Page };
//# sourceMappingURL=list-1.js.map
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
import { List2Model } from './list-2.model';
import { List2Service } from './list-2.service';
var List2Page = (function () {
    function List2Page(nav, list2Service, loadingCtrl) {
        this.nav = nav;
        this.list2Service = list2Service;
        this.loadingCtrl = loadingCtrl;
        this.list2 = new List2Model();
        this.loading = this.loadingCtrl.create();
    }
    List2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.list2Service
            .getData()
            .then(function (data) {
            _this.list2.items = data.items;
            _this.loading.dismiss();
        });
    };
    return List2Page;
}());
List2Page = __decorate([
    Component({
        selector: 'list-2-page',
        templateUrl: 'list-2.html'
    }),
    __metadata("design:paramtypes", [NavController,
        List2Service,
        LoadingController])
], List2Page);
export { List2Page };
//# sourceMappingURL=list-2.js.map
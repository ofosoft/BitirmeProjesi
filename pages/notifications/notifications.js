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
import { NotificationsModel } from './notifications.model';
import { NotificationsService } from './notifications.service';
var NotificationsPage = (function () {
    function NotificationsPage(nav, notificationsService, loadingCtrl) {
        this.nav = nav;
        this.notificationsService = notificationsService;
        this.loadingCtrl = loadingCtrl;
        this.notifications = new NotificationsModel();
        this.loading = this.loadingCtrl.create();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.notificationsService
            .getData()
            .then(function (data) {
            _this.notifications.today = data.today;
            _this.notifications.yesterday = data.yesterday;
            _this.loading.dismiss();
        });
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Component({
        selector: 'notifications-page',
        templateUrl: 'notifications.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NotificationsService,
        LoadingController])
], NotificationsPage);
export { NotificationsPage };
//# sourceMappingURL=notifications.js.map
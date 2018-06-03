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
import { ScheduleModel } from './schedule.model';
import { ScheduleService } from './schedule.service';
var SchedulePage = (function () {
    function SchedulePage(nav, scheduleService, loadingCtrl) {
        this.nav = nav;
        this.scheduleService = scheduleService;
        this.loadingCtrl = loadingCtrl;
        this.schedule = new ScheduleModel();
        this.segment = "today";
        this.loading = this.loadingCtrl.create();
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.scheduleService
            .getData()
            .then(function (data) {
            _this.schedule.today = data.today;
            _this.schedule.upcoming = data.upcoming;
            _this.loading.dismiss();
        });
    };
    SchedulePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    SchedulePage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    Component({
        selector: 'schedule-page',
        templateUrl: 'schedule.html'
    }),
    __metadata("design:paramtypes", [NavController,
        ScheduleService,
        LoadingController])
], SchedulePage);
export { SchedulePage };
//# sourceMappingURL=schedule.js.map
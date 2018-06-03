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
import { NavController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { List1Page } from '../list-1/list-1';
import { List2Page } from '../list-2/list-2';
import { GridPage } from '../grid/grid';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
var LayoutsPage = (function () {
    function LayoutsPage(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    LayoutsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        Observable.forkJoin(this.translate.get('SCHEDULE'), this.translate.get('LISTS'), this.translate.get('LISTS'), this.translate.get('GRID'), this.translate.get('NOTIFICATIONS'), this.translate.get('PROFILE')).subscribe(function (data) {
            _this.items = [
                { title: data[0], component: SchedulePage },
                { title: data[1], note: '(Big)', component: List1Page },
                { title: data[2], note: '(Mini)', component: List2Page },
                { title: data[3], component: GridPage },
                { title: data[4], component: NotificationsPage },
                { title: data[5], component: ProfilePage },
            ];
        });
    };
    LayoutsPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    return LayoutsPage;
}());
LayoutsPage = __decorate([
    Component({
        selector: 'layouts-page',
        templateUrl: 'layouts.html'
    }),
    __metadata("design:paramtypes", [NavController,
        TranslateService])
], LayoutsPage);
export { LayoutsPage };
//# sourceMappingURL=layouts.js.map
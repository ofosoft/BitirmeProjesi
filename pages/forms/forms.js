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
import { FormLayoutPage } from '../form-layout/form-layout';
import { FiltersPage } from '../filters/filters';
import { FormValidationsPage } from '../form-validations/form-validations';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
var FormsPage = (function () {
    function FormsPage(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    FormsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        Observable.forkJoin(this.translate.get('FORMS_EXAMPLES'), this.translate.get('FILTERS'), this.translate.get('FORM_VALIDATIONS')).subscribe(function (data) {
            _this.items = [
                { title: data[0], component: FormLayoutPage },
                { title: data[1], component: FiltersPage },
                { title: data[2], component: FormValidationsPage }
            ];
        });
    };
    FormsPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    return FormsPage;
}());
FormsPage = __decorate([
    Component({
        selector: 'forms-page',
        templateUrl: 'forms.html'
    }),
    __metadata("design:paramtypes", [NavController,
        TranslateService])
], FormsPage);
export { FormsPage };
//# sourceMappingURL=forms.js.map
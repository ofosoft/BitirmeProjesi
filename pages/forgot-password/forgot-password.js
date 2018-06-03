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
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(nav) {
        this.nav = nav;
        this.main_page = { component: TabsNavigationPage };
        this.forgot_password = new FormGroup({
            email: new FormControl('', Validators.required)
        });
    }
    ForgotPasswordPage.prototype.recoverPassword = function () {
        console.log(this.forgot_password.value);
        this.nav.setRoot(this.main_page.component);
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Component({
        selector: 'forgot-password-page',
        templateUrl: 'forgot-password.html'
    }),
    __metadata("design:paramtypes", [NavController])
], ForgotPasswordPage);
export { ForgotPasswordPage };
//# sourceMappingURL=forgot-password.js.map
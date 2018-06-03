var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';
import { ListingPage } from '../pages/listing/listing';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { FormsPage } from '../pages/forms/forms';
import { LayoutsPage } from '../pages/layouts/layouts';
import { SettingsPage } from '../pages/settings/settings';
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
import { TranslateService } from '@ngx-translate/core';
var MyApp = (function () {
    function MyApp(platform, menu, app, splashScreen, statusBar, translate, toastCtrl) {
        var _this = this;
        this.menu = menu;
        this.app = app;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        // make WalkthroughPage the root (or first) page
        this.rootPage = ListingPage;
        // rootPage: any = FunctionalitiesPage;
        // rootPage: any = TabsNavigationPage;
        this.textDir = "ltr";
        translate.setDefaultLang('en');
        translate.use('en');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
        });
        this.translate.onLangChange.subscribe(function (event) {
            if (event.lang == 'ar') {
                platform.setDir('rtl', true);
                platform.setDir('ltr', false);
            }
            else {
                platform.setDir('ltr', true);
                platform.setDir('rtl', false);
            }
            Observable.forkJoin(_this.translate.get('HOME'), _this.translate.get('FORMS'), _this.translate.get('FUNCTIONALITIES'), _this.translate.get('LAYOUTS'), _this.translate.get('SETTINGS')).subscribe(function (data) {
                _this.pages = [
                    { title: data[0], icon: 'home', component: TabsNavigationPage },
                    { title: data[1], icon: 'create', component: FormsPage },
                    { title: data[2], icon: 'code', component: FunctionalitiesPage }
                ];
                _this.pushPages = [
                    { title: data[3], icon: 'grid', component: LayoutsPage },
                    { title: data[4], icon: 'settings', component: SettingsPage }
                ];
            });
        });
    }
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
        this.app.getRootNav().push(page.component);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform,
        MenuController,
        App,
        SplashScreen,
        StatusBar,
        TranslateService,
        ToastController])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map
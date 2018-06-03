var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild } from '@angular/core';
import { ShowHideInput } from './show-hide-input';
var ShowHideContainer = (function () {
    function ShowHideContainer() {
        this.show = false;
    }
    ShowHideContainer.prototype.toggleShow = function () {
        this.show = !this.show;
        if (this.show) {
            this.input.changeType("text");
        }
        else {
            this.input.changeType("password");
        }
    };
    return ShowHideContainer;
}());
__decorate([
    ContentChild(ShowHideInput),
    __metadata("design:type", ShowHideInput)
], ShowHideContainer.prototype, "input", void 0);
ShowHideContainer = __decorate([
    Component({
        selector: 'show-hide-container',
        templateUrl: 'show-hide-password.html',
        host: {
            'class': 'show-hide-password'
        }
    }),
    __metadata("design:paramtypes", [])
], ShowHideContainer);
export { ShowHideContainer };
//# sourceMappingURL=show-hide-container.js.map
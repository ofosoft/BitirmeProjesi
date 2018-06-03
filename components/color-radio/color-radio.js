var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
var ColorRadio = (function () {
    function ColorRadio(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ColorRadio.prototype.setColor = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
        this.renderer.setElementStyle(this.el.nativeElement, 'borderColor', color);
    };
    ColorRadio.prototype.ngOnInit = function () {
        console.log(this.color);
        this.setColor(this.color);
    };
    return ColorRadio;
}());
__decorate([
    Input('color-radio'),
    __metadata("design:type", String)
], ColorRadio.prototype, "color", void 0);
ColorRadio = __decorate([
    Directive({
        selector: '[color-radio]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], ColorRadio);
export { ColorRadio };
//# sourceMappingURL=color-radio.js.map
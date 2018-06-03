var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { isPresent } from 'ionic-angular/util/util';
var BackgroundImage = (function () {
    function BackgroundImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
    }
    Object.defineProperty(BackgroundImage.prototype, "src", {
        set: function (val) {
            this._src = isPresent(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    BackgroundImage.prototype.ngOnChanges = function (changes) {
        this._update();
        // console.log("CHANGES background-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    BackgroundImage.prototype._update = function () {
        var _this = this;
        var img = new Image();
        img.addEventListener('load', function () {
            _this._elementRef.nativeElement.style.backgroundImage = 'url(' + _this._src + ')';
            _this._loaded(true);
        });
        img.src = this._src;
        this._loaded(false);
    };
    BackgroundImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    return BackgroundImage;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], BackgroundImage.prototype, "class", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BackgroundImage.prototype, "src", null);
BackgroundImage = __decorate([
    Component({
        selector: 'background-image',
        templateUrl: 'background-image.html'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], BackgroundImage);
export { BackgroundImage };
//# sourceMappingURL=background-image.js.map
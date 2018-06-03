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
var PreloadImage = (function () {
    function PreloadImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._img = new Image();
    }
    Object.defineProperty(PreloadImage.prototype, "src", {
        set: function (val) {
            this._src = isPresent(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImage.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || null;
        },
        enumerable: true,
        configurable: true
    });
    PreloadImage.prototype.ngOnChanges = function (changes) {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + "%";
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
        this._update();
        // console.log("CHANGES preload-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    PreloadImage.prototype._update = function () {
        var _this = this;
        if (isPresent(this.alt)) {
            this._img.alt = this.alt;
        }
        if (isPresent(this.title)) {
            this._img.title = this.title;
        }
        this._img.addEventListener('load', function () {
            _this._elementRef.nativeElement.appendChild(_this._img);
            _this._loaded(true);
        });
        this._img.src = this._src;
        this._loaded(false);
    };
    PreloadImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    return PreloadImage;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], PreloadImage.prototype, "alt", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PreloadImage.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PreloadImage.prototype, "src", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PreloadImage.prototype, "ratio", null);
PreloadImage = __decorate([
    Component({
        selector: 'preload-image',
        templateUrl: 'preload-image.html'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], PreloadImage);
export { PreloadImage };
//# sourceMappingURL=preload-image.js.map
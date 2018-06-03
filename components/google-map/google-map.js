var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, EventEmitter } from '@angular/core';
import { isPresent } from 'ionic-angular/util/util';
var GoogleMap = (function () {
    function GoogleMap(_elementRef) {
        this._elementRef = _elementRef;
        this._mapOptions = {
            zoom: 15
        };
        this.$mapReady = new EventEmitter();
        this._mapIdledOnce = false;
    }
    Object.defineProperty(GoogleMap.prototype, "options", {
        set: function (val) {
            if (isPresent(val)) {
                this._mapOptions = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    GoogleMap.prototype.ngOnInit = function () {
        this.initMap();
    };
    GoogleMap.prototype.initMap = function () {
        var _this = this;
        this._el = this._elementRef.nativeElement;
        this._map = new google.maps.Map(this._el, this._mapOptions);
        // Workarround for init method: try to catch the first idel event after the map cretion (this._mapIdledOnce). The following idle events don't matter.
        var _ready_listener = this._map.addListener('idle', function () {
            console.log("mapReady - IDLE");
            if (!_this._mapIdledOnce) {
                _this.$mapReady.emit(_this._map);
                _this._mapIdledOnce = true;
                // Stop listening to event, the map is ready
                google.maps.event.removeListener(_ready_listener);
            }
        });
    };
    return GoogleMap;
}());
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], GoogleMap.prototype, "options", null);
GoogleMap = __decorate([
    Component({
        selector: 'google-map',
        template: ''
    }),
    __metadata("design:paramtypes", [ElementRef])
], GoogleMap);
export { GoogleMap };
//# sourceMappingURL=google-map.js.map
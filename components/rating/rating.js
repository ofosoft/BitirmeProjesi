var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var noop = function () { };
export var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Rating; }),
    multi: true
};
var Rating = (function () {
    function Rating() {
        this.max = 5;
        this.readOnly = false;
        this.propagateChange = noop;
    }
    Rating.prototype.ngOnInit = function () {
        var states = [];
        for (var i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
            }
            else if (this.innerValue > i) {
                states[i] = 1;
            }
            else {
                states[i] = 0;
            }
        }
        this.range = states;
    };
    Object.defineProperty(Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.propagateChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Rating.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Rating.prototype.registerOnTouched = function () { };
    Rating.prototype.rate = function (amount) {
        if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
        }
    };
    return Rating;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], Rating.prototype, "max", void 0);
__decorate([
    Input('read-only'),
    __metadata("design:type", Object)
], Rating.prototype, "readOnly", void 0);
Rating = __decorate([
    Component({
        selector: 'rating',
        templateUrl: 'rating.html',
        providers: [RATING_CONTROL_VALUE_ACCESSOR]
    })
], Rating);
export { Rating };
//# sourceMappingURL=rating.js.map
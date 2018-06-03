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
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
var noop = function () { };
export function counterRangeValidator(maxValue, minValue) {
    return function (c) {
        var err = {
            rangeError: {
                given: c.value,
                max: maxValue || 10,
                min: minValue || 0
            }
        };
        return (c.value > +maxValue || c.value < +minValue) ? err : null;
    };
}
var CounterInput = CounterInput_1 = (function () {
    function CounterInput() {
        this.propagateChange = noop;
        this.validateFn = noop;
        this._counterValue = 0;
    }
    Object.defineProperty(CounterInput.prototype, "counterValue", {
        get: function () {
            return this._counterValue;
        },
        set: function (val) {
            this._counterValue = val;
            this.propagateChange(val);
        },
        enumerable: true,
        configurable: true
    });
    CounterInput.prototype.ngOnChanges = function (inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = counterRangeValidator(this.counterRangeMax, this.counterRangeMin);
        }
    };
    CounterInput.prototype.writeValue = function (value) {
        if (value) {
            this.counterValue = value;
        }
    };
    CounterInput.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CounterInput.prototype.registerOnTouched = function () { };
    CounterInput.prototype.increase = function () {
        this.counterValue++;
    };
    CounterInput.prototype.decrease = function () {
        this.counterValue--;
    };
    CounterInput.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    return CounterInput;
}());
__decorate([
    Input('counterValue'),
    __metadata("design:type", Object)
], CounterInput.prototype, "_counterValue", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Object)
], CounterInput.prototype, "counterRangeMax", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Object)
], CounterInput.prototype, "counterRangeMin", void 0);
CounterInput = CounterInput_1 = __decorate([
    Component({
        selector: 'counter-input',
        templateUrl: 'counter-input.html',
        host: {
            'class': 'counter-input'
        },
        providers: [
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return CounterInput_1; }), multi: true },
            { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return CounterInput_1; }), multi: true }
        ]
    })
], CounterInput);
export { CounterInput };
var CounterInput_1;
//# sourceMappingURL=counter-input.js.map
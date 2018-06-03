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
import { FormGroup, FormControl } from '@angular/forms';
import { counterRangeValidator } from '../../components/counter-input/counter-input';
var FiltersPage = (function () {
    function FiltersPage(nav) {
        this.nav = nav;
        this.rangeForm = new FormGroup({
            single: new FormControl(25),
            dual: new FormControl({ lower: 33, upper: 60 })
        });
        this.checkboxForm = new FormGroup({
            person_1: new FormControl(true),
            person_2: new FormControl(false),
            person_3: new FormControl(false),
            person_4: new FormControl(true),
            person_5: new FormControl(false)
        });
        this.radioForm = new FormGroup({
            selected_option: new FormControl('apple')
        });
        this.checkboxTagsForm = new FormGroup({
            tag_1: new FormControl(false),
            tag_2: new FormControl(false),
            tag_3: new FormControl(true),
            tag_4: new FormControl(true),
            tag_5: new FormControl(false),
            tag_6: new FormControl(false),
            tag_7: new FormControl(true),
            tag_8: new FormControl(false)
        });
        this.radioTagsForm = new FormGroup({
            selected_option: new FormControl('any')
        });
        this.switchersForm = new FormGroup({
            notifications: new FormControl(true),
            email_notifications: new FormControl(false)
        });
        this.counterForm = new FormGroup({
            counter: new FormControl(5, counterRangeValidator(7, 1)),
            counter2: new FormControl(2, counterRangeValidator(5, 1))
        });
        this.ratingForm = new FormGroup({
            rate: new FormControl(2.5),
            rate2: new FormControl(1.5)
        });
        this.radioColorForm = new FormGroup({
            selected_color: new FormControl('#fc9961')
        });
    }
    FiltersPage.prototype.rangeChange = function (range) {
        console.log("range, change, ratio: " + range.ratio + ", value: " + range.value);
    };
    return FiltersPage;
}());
FiltersPage = __decorate([
    Component({
        selector: 'filters-page',
        templateUrl: 'filters.html'
    }),
    __metadata("design:paramtypes", [NavController])
], FiltersPage);
export { FiltersPage };
//# sourceMappingURL=filters.js.map
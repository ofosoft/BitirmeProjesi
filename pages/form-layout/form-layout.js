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
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { counterRangeValidator } from '../../components/counter-input/counter-input';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
var FormLayoutPage = (function () {
    function FormLayoutPage(nav, alertCtrl, cropService, imagePicker) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.cropService = cropService;
        this.imagePicker = imagePicker;
        this.section = "event";
        this.post_form = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            servings: new FormControl(2, counterRangeValidator(10, 1)),
            time: new FormControl('01:30', Validators.required),
            temperature: new FormControl(180)
        });
        this.event_form = new FormGroup({
            title: new FormControl('', Validators.required),
            location: new FormControl('', Validators.required),
            from_date: new FormControl('2016-09-18', Validators.required),
            from_time: new FormControl('13:00', Validators.required),
            to_date: new FormControl('', Validators.required),
            to_time: new FormControl('', Validators.required)
        });
        this.card_form = new FormGroup({
            card_number: new FormControl('', Validators.required),
            card_holder: new FormControl('', Validators.required),
            cvc: new FormControl('', Validators.required),
            exp_date: new FormControl('', Validators.required),
            save_card: new FormControl(true, Validators.required)
        });
    }
    FormLayoutPage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    FormLayoutPage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    FormLayoutPage.prototype.createPost = function () {
        console.log(this.post_form.value);
    };
    FormLayoutPage.prototype.createEvent = function () {
        console.log(this.event_form.value);
    };
    FormLayoutPage.prototype.createCard = function () {
        console.log(this.card_form.value);
    };
    FormLayoutPage.prototype.chooseCategory = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: 'category-prompt'
        });
        alert.setTitle('Category');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Confirm',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.categories_checkbox_open = false;
                _this.categories_checkbox_result = data;
            }
        });
        alert.present().then(function () {
            _this.categories_checkbox_open = true;
        });
    };
    FormLayoutPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.cropService.crop(results[i], { quality: 75 }).then(function (newImage) {
                            _this.selected_image = newImage;
                        }, function (error) { return console.error("Error cropping image", error); });
                    }
                }, function (err) { return console.log(err); });
            }
        });
    };
    return FormLayoutPage;
}());
FormLayoutPage = __decorate([
    Component({
        selector: 'form-layout-page',
        templateUrl: 'form-layout.html'
    }),
    __metadata("design:paramtypes", [NavController,
        AlertController,
        Crop,
        ImagePicker])
], FormLayoutPage);
export { FormLayoutPage };
//# sourceMappingURL=form-layout.js.map
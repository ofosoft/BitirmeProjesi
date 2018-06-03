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
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { UsernameValidator } from '../../components/validators/username.validator';
import { PasswordValidator } from '../../components/validators/password.validator';
import { PhoneValidator } from '../../components/validators/phone.validator';
import { Country } from './form-validations.model';
import emailMask from 'text-mask-addons/dist/emailMask';
var FormValidationsPage = (function () {
    function FormValidationsPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.emailMask = emailMask;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'lastname': [
                { type: 'required', message: 'Last name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'phone': [
                { type: 'required', message: 'Phone is required.' },
                { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions.' }
            ],
        };
    }
    FormValidationsPage.prototype.ionViewWillLoad = function () {
        this.countries = [
            new Country('UY', 'Uruguay'),
            new Country('US', 'United States'),
            new Country('AR', 'Argentina')
        ];
        this.genders = [
            "Male",
            "Female"
        ];
        this.matching_passwords_group = new FormGroup({
            password: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required,
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new FormControl('', Validators.required)
        }, function (formGroup) {
            return PasswordValidator.areEqual(formGroup);
        });
        var country = new FormControl(this.countries[0], Validators.required);
        var phone = new FormControl('', Validators.compose([
            Validators.required,
            PhoneValidator.validCountryPhone(country)
        ]));
        this.country_phone_group = new FormGroup({
            country: country,
            phone: phone
        });
        this.validations_form = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                UsernameValidator.validUsername,
                Validators.maxLength(25),
                Validators.minLength(5),
                Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                Validators.required
            ])),
            name: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            gender: new FormControl(this.genders[0], Validators.required),
            country_phone: this.country_phone_group,
            matching_passwords: this.matching_passwords_group,
            terms: new FormControl(true, Validators.pattern('true'))
        });
    };
    FormValidationsPage.prototype.onSubmit = function (values) {
        console.log(values);
    };
    return FormValidationsPage;
}());
FormValidationsPage = __decorate([
    Component({
        selector: 'form-validations-page',
        templateUrl: 'form-validations.html'
    }),
    __metadata("design:paramtypes", [NavController, FormBuilder])
], FormValidationsPage);
export { FormValidationsPage };
//# sourceMappingURL=form-validations.js.map
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '../custom-validator/form-validation';
@Component({
    selector: 'app-bank-card-number-input',
    templateUrl: './bank-card-number-input.component.html',
    styleUrls: ['./bank-card-number-input.component.scss']
})
export class BankCardNumberInputComponent implements OnInit {

    @Input('formItem') form: FormGroup|undefined;
    @Input('formName') formName = '';
    @Input('maxLenght') maxLenght: number = 0;
    @Input('minLenght') minLenght: number = 0;
    @Input('lable') lable = '';
    @Input('isrequired') isrequired = false;
    @Input('readonly') readonly = false;
    @Input('class') class = '';
    @Input('onchange') onchange = () => { };
    formGroup: FormGroup|any;
    formNames: any;
    constructor(private customFormValidator: CustomFormValidators) {

    }

    ngOnInit(): void {
        this.formGroup = this.form;
        this.formNames = this.formName;

        const formItem = this.formGroup?.get(this.formNames);
        formItem?.setValidators([this.customFormValidator.checkCardNumber, Validators.maxLength(this.maxLenght), Validators.minLength(this.minLenght)]);
        formItem?.updateValueAndValidity();
    }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '../custom-validator/form-validation';
@Component({
    selector: 'app-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {

    @Input('formItem') form: FormGroup|undefined;
    @Input('formName') formName = '';
    @Input('maxLenght') maxLenght=3;
    @Input('minLenght') minLenght=0;
    @Input('lable') lable = '';
    @Input('isrequired') isrequired = false;
    @Input('readonly') readonly = false;
    @Input('class') class = '';
    @Input('onchange') onchange = () => { };
    formGroup: FormGroup|any;
    formNames: any;
    constructor(private customFormValidator: CustomFormValidators)
    {

    }

    ngOnInit(): void {
        this.formGroup = this.form;
        this.formNames = this.formName;

        const formItem = this.formGroup.get(this.formNames);
        formItem.setValidators([this.customFormValidator.checkNumberCharacters,  Validators.maxLength(this.maxLenght), Validators.minLength(this.minLenght)]);
        formItem.updateValueAndValidity();
    }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '../custom-validator/form-validation';

@Component({
    selector: 'app-nationalcode-input',
    templateUrl: './nationalcode-input.component.html',
    styleUrls: ['./nationalcode-input.component.scss']
})
export class NationalcodeInputComponent implements OnInit {
    @Input('formItem') form: FormGroup|undefined;
    @Input('formName') formName: string = '';
    @Input('lable') lable: string = '';
    @Input('isrequired') isrequired: boolean = false;

    @Input('readonly') readonly = false;
    formGroup: any;
    formNames: any;
    constructor(private customFormValidator: CustomFormValidators) {
    }

    ngOnInit(): void {
        this.formGroup = this.form;
        this.formNames = this.formName;
        const formItem = this.formGroup.get(this.formNames);
        if (this.isrequired)
            formItem.setValidators([Validators.required, this.customFormValidator.checkNationalCode]);
        else
            formItem.setValidators([this.customFormValidator.checkNationalCode]);
        formItem.updateValueAndValidity();
    }


}

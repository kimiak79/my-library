import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-text-type-input',
    templateUrl: './text-type-input.component.html',
    styleUrls: ['./text-type-input.component.scss']
})
export class TextTypeInputComponent implements OnInit {

    @Input('formItem') form: FormGroup|undefined;
    @Input('formName') formName = '';
    @Input('maxLenght') maxLenght = 50;
    @Input('lable') lable = '';
    @Input('isrequired') isrequired = false;
    @Input('readonly') readonly = false;
    @Input('changeValue') changeValue: any = () => { };
    @Input('onEnter') onEnter: any = () => { };
    formGroup: any;
    formNames: any;
    constructor() {

    }

    ngOnInit(): void {
        this.formGroup = this.form;
        this.formNames = this.formName;
        const formItem = this.formGroup.get(this.formNames);
        formItem.setValidators([Validators.maxLength(this.maxLenght)]);
        formItem.updateValueAndValidity();
    }

}

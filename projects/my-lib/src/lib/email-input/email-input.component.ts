import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '../custom-validator/form-validation';  
@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnInit {

  @Input('formItem') form: FormGroup|undefined;
  @Input('formName') formName: string = '';
  @Input('lable') lable: string = '';
  @Input('isrequired') isrequired: boolean = false;
  formGroup: any;
  formNames: any;
  constructor(private customFormValidator: CustomFormValidators) {

  }

  ngOnInit(): void {
    this.formGroup = this.form;
    this.formNames = this.formName;
    const formItem = this.formGroup.get(this.formNames);
    formItem.setValidators([this.customFormValidator.checkEmail,Validators.email]);
    formItem.updateValueAndValidity();
  }
}

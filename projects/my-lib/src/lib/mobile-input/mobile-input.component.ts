import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '../custom-validator/form-validation';  

@Component({
  selector: 'app-mobile-input',
  templateUrl: './mobile-input.component.html',
  styleUrls: ['./mobile-input.component.scss']
})
export class MobileInputComponent implements OnInit {

  @Input('formItem') form: FormGroup|undefined;
  @Input('formName') formName: string = '';
  @Input('maxLenght') maxLenght: number = 50;
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
    formItem.setValidators([this.customFormValidator.checkMobileNumber]);
    formItem.updateValueAndValidity();
  }

}

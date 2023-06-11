import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomFormValidators } from '../custom-validator/form-validation';
export class PasswordValidator {

    public static strong(control: FormControl){
        if(control.value == null){
            return null;
        }
        let hasNumber = /\d/.test(control.value);
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);
  
        let isLenght = false;
        if(control.value.length >= 8){
            isLenght = true;
        }
        // console.log('Num:', hasNumber, 'Upp:', hasUpper, 'Low:', hasLower ,'isLenght:', isLenght);
        const valid = hasNumber && hasUpper && hasLower && isLenght;
        if (!valid) {
            // return what´s not valid
            return { 'hasNumber': hasNumber, 'hasUpper': hasUpper, 'hasLower': hasLower , 'minLen':isLenght };
        }
        return null;
    }
  }
@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {
   
  @Input('formItem') form: FormGroup | undefined ;
  @Input('formName') formName: string = '';
  @Input('lable') lable: string = '';
  @Input('isrequired') isrequired: boolean = true;
  @Input('hideBtn') hideBtn: boolean = false;
  @Input('newPass') newPass: boolean = false;
  @Input('placeholder') placeholder: string = '';
  @Input('matchMood') matchMood: boolean = false;
  @Input('matchformName') matchformName: string = '';
  
  hide:boolean = true;
  formGroup: any;
  formNames: any;
  constructor(){

  }
ngOnInit(): void {
  this.formGroup = this.form;
    this.formNames = this.formName;
    const formItem = this.formGroup.get(this.formNames);
        formItem.setValidators([
            CustomFormValidators.strong,
            CustomFormValidators.mustMatch(this.matchformName,this.formNames )
            ]);
}
}

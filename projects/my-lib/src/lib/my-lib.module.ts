import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextTypeInputComponent } from './text-type-input/text-type-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { NationalcodeInputComponent } from './nationalcode-input/nationalcode-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { MobileInputComponent } from './mobile-input/mobile-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { BankCardNumberInputComponent } from './bank-card-number-input/bank-card-number-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { CustomFormValidators } from './custom-validator/form-validation';
import { CustomModelValidators } from './custom-validator/model-validator';
const COMPONENTS=[
  TextTypeInputComponent,
  NumberInputComponent,
  NationalcodeInputComponent,
  PasswordInputComponent,
  EmailInputComponent,
  BankCardNumberInputComponent,
  MobileInputComponent,
]
@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    BrowserModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    COMPONENTS
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fa-IR' },
    CustomFormValidators,
    CustomModelValidators
],
})
export class MyLibModule { }

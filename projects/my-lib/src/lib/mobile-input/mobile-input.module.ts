import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MobileInputComponent } from './mobile-input.component';
import { MatSelectModule } from '@angular/material/select';
import { CustomFormValidators } from '../custom-validator/form-validation';
import { CustomModelValidators } from '../custom-validator/model-validator';


@NgModule({
    declarations: [],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,

      MatAutocompleteModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatSelectModule
    ],
    exports: [
        
    ],
    providers: [
        CustomFormValidators,
        CustomModelValidators
    ]
})
export class MobileInputModule { }

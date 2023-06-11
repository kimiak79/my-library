import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'MyLibTest';
  form: FormGroup|undefined;

  constructor(private fb:FormBuilder){
this.form = this.fb.group({
  textTypeTest : [''],
  numberTest : [''],
  nationalcodeTest : [''],
  passwordTest : [''],
  mobileTest : [''],
  emailTest : [''],
  bankCardTest : [''],
})
  }
ngOnInit(): void {
   
  }
}

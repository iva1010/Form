import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {MuValidators} from './mu.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  private static checkPass(abstractControl: AbstractControl): {[key: string]: boolean}{
    console.log(abstractControl);
    return  null;
  }


  ngOnInit(): void {
    // @ts-ignore
    this.form = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/[a-zA-Z0-9]+/),
      ]),
      doublePassword: new FormControl(null, [
        Validators.required,
        AppComponent.checkPass,
      ]),
    });
  }




  submit(): void {
    console.log('Form: ', this.form);
    const  formData = {...this.form.value};
    console.log('Form Data: ', formData);
  }
}

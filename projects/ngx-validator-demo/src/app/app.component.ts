import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgxValidators } from 'projects/ngx-validator/src/public-api';

const myValidator = (control: AbstractControl): ValidationErrors | null => {
  if (control.value) {
    return control.value === 'admin' ? {
      notAllowAdmin: {
        message: 'khong dc nha'
      }
    } : null;
  }
  return null;
}

const matchPassword = (password: string, confirmPassword: string) => {
  return (formGroup: FormGroup) => {
    const passwordControl = formGroup.controls[password];
    const confirmPasswordControl = formGroup.controls[confirmPassword];

    if (!passwordControl || !confirmPasswordControl) {
      return;
    }

    if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
      return;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: {message: 'not match'} });
    } else {
      confirmPasswordControl.setErrors(null);
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-validator-demo';

  form = this.formBuilder.group({
    firstName: ['', [NgxValidators.required('Required nhen'), myValidator]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required, NgxValidators.min(18, 'Khong được dưới 18 tuổi')]],
    old: ['', [Validators.required, Validators.min(18)]],
    phoneNumber: [''],
    password: [''],
    confirmPassword: [''],
  }, {
    validator: matchPassword('password', 'confirmPassword'),
  });

  constructor(private formBuilder: FormBuilder) {
    this.form.valueChanges.subscribe(value => {
      console.log(this.form);
    });
  }

}

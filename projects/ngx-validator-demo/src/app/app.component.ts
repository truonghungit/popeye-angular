import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Validators as NgxValidators } from 'projects/ngx-validator/src/public-api';

const myValidator = (control: AbstractControl): ValidationErrors | null => {
  if (control.value) {
    return control.value === 'admin' ? { notAllowAdmin: true } : null;
  }
  return null;
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
  });

  constructor(private formBuilder: FormBuilder) {
  }

}

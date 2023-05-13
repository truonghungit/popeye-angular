import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormValidatorModule, FormValidatorConfig } from 'projects/ngx-validator/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';

const formValidatorConfig: FormValidatorConfig = {
  validateOn: ({ submited }) => {
    return submited;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    FormValidatorModule.configure(formValidatorConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '.@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickDirective } from './click.directive';
import { SmsPassword } from './sms.password'
//import { ResetComponent } from './reset/reset.component';
//import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  schemas: [
    NO_ERRORS_SCHEMA
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

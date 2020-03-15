import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Http} from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {sin} from './filters/sinFilter';
import {phone} from './filters/phoneFilter';
import { SinDirective } from './sin.directive';
import { PhoneDirective } from './phone.directive';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    sin,
    phone,
    SinDirective,
    PhoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }

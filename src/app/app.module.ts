import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { AgeValidatorDirective } from './directives/age-validator.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';
import { AuthComponent } from './components/auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegistrationToNaturalistClubComponent } from './components/registration-to-naturalist-club/registration-to-naturalist-club.component';
import { NaturalistComponent } from './components/naturalist/naturalist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    NewRegistrationComponent,
    AgeValidatorDirective,
    UpdateRegistrationComponent,
    AuthComponent,
    FooterComponent,
    ChangePasswordComponent,
    RegistrationToNaturalistClubComponent,
    NaturalistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { NaturalistComponent } from './components/naturalist/naturalist.component';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { RegistrationToNaturalistClubComponent } from './components/registration-to-naturalist-club/registration-to-naturalist-club.component';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';

const routes: Routes = [
  {path:'new', component:NewRegistrationComponent},
  {path:'', component:HomeComponent},
  {path:'update/:id', component:UpdateRegistrationComponent},
  {path: 'login', component:AuthComponent},
  {path: 'password', component:ChangePasswordComponent},
  {path: 'registration', component:RegistrationToNaturalistClubComponent},
  {path: 'naturalists', component:NaturalistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/models/authResponseData';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  public user?:AuthResponseData

  ngOnInit(): void {
    if (!this.auth.isLoggedIn){
      this.router.navigate(["/login"]);
    }
  }

  public updatePassword(f:NgForm){
    const password:String=f.value.password;
      this.auth.changePassword(password).subscribe(()=>{
        this.router.navigate(["/"]);
    });
  }
}

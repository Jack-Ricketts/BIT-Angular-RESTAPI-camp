import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthResponseData } from '../models/authResponseData';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn=false;
  public user?:AuthResponseData;

  constructor(private http:HttpClient) { }

  public register(email:String,password:String){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7JGVU6nYPvqOsx2l4TNCM3vhDv1k4uLo',{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap((response)=>{
      this.isLoggedIn=true;
      this.user=response;
    }));
  }

  public login(email:String,password:String){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7JGVU6nYPvqOsx2l4TNCM3vhDv1k4uLo',{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap((response)=>{
      this.isLoggedIn=true;
      this.user=response;
    }));
  }

  public logout(){
    this.isLoggedIn=false;
    this.user=undefined;
  }
}

// AIzaSyD7JGVU6nYPvqOsx2l4TNCM3vhDv1k4uLo
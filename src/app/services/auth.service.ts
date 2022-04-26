import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthReponseData } from '../models/authResponseData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  public register(email:String, password:String){
    return this.http.post<AuthReponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7JGVU6nYPvqOsx2l4TNCM3vhDv1k4uLo',{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}

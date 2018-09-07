import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface responseParameters{
  success:string,
  message:string
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus=false;
  constructor(private http:HttpClient) { 
    
  }
  setLoggedIn(value:boolean)
  {
    this.loggedInStatus=value
  }
  get isLoggedIn()
  {
    return this.loggedInStatus
  }
  getUserDetails(email,password)
  {
    console.log('email',email);
    console.log('password',password);
      return this.http.post<responseParameters>('/api/login.php',{
        email,
        password
      })
  }
  registerUser(firstName,lastName,email,password)
  {
    return this.http.post<responseParameters>('/api/login.php',{
      firstName,
      lastName,
      email,
      password
    })
  }

}

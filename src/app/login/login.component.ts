import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService,
              private router:Router) { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault()
    const target=event.target
    const email=target.querySelector('#inputEmail').value;
    const password=target.querySelector('#inputPassword').value;
    this.Auth.getUserDetails(email,password).subscribe(data=>{
      if(data.success=='0')
      {
        this.router.navigate(['restaurant'])
        this.Auth.setLoggedIn(true)
      }else{
        window.alert(data.message);
      }
    });
    console.log('email',email,'password',password);
  }
}

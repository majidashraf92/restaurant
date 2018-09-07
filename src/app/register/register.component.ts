import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth:AuthService,
    private router:Router) { }

  ngOnInit() {
  }
  registerUser(event){
    event.preventDefault()
    const errors=[];
    const target=event.target
    const firstName=target.querySelector('#firstName').value;
    const lastName=target.querySelector('#lastName').value;
    const email=target.querySelector('#email').value;
    const password=target.querySelector('#password').value;
    const confrimPassword=target.querySelector('#confrimPassword').value;
    if(password!=confrimPassword)
    {
      errors.push("Password do not match");

    }
    if(errors.length>0)
    {
        this.Auth.registerUser(firstName,lastName,email,password).subscribe(response=>{
          console.log('Response',response);
        })
    }
    console.log('email',email,'password',password);
  }
}

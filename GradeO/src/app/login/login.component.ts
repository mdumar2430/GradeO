import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username:string="";
  password:string="";
  constructor(private Auth: AuthService, 
              private router: Router,private mydb:UserService) { }

  ngOnInit() {
  }

  // loginUser(event:any) {
  //   event.preventDefault()
  //   const target = event.target
  //   const username = target.querySelector('#username').value
  //   const password = target.querySelector('#password').value

  //   this.Auth.getUserDetails(username, password).subscribe(data => {
  //     if(data.success) {
  //       this.router.navigate(['admin'])
  //       this.Auth.setLoggedIn(true)
  //     } else {
  //       window.alert(data.message)
  //     }
  //   })
  //   console.log(username, password)
  // }

  login(){
    this.mydb.logingCheck(this.username,this.password).subscribe(data=>{
      if(data["message"]){
        const redirectUrl = "/dashboard";
        this.router.navigate([redirectUrl]);
      }
    })
    

  }

}

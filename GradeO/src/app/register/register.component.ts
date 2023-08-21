import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string="";
  password:string="";
  Cpassword:string="";

  constructor(private mydb:UserService,private router: Router) { }

  ngOnInit(): void {
  }
  signup(){
    if(this.Cpassword!=this.password)
      alert("passwrod mismatch")
    else{
      this.mydb.signup(this.username,this.password).subscribe(data=>{
        if(data["message"]){
          alert("user created");
          const redirectUrl = "/login";
        this.router.navigate([redirectUrl]);
        }
      })
        
    }  
    
    
  }

}

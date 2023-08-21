import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;

  rollno:string="";
  name:string="";
  mark1:string="";
  mark2:string="";
  mark3:string="";
  mark4:string="";
  mark5:string="";
  p:string="";
  grade:string="";


  constructor(private mydb:UserService) { 
    this.mydb.display().subscribe((data:any)=>this.student=data["jsondata"])
  }
  student:any;
  ngOnInit(): void {
  }
  
  Cal(){
    this.mydb.calc(this.rollno,this.name,this.mark1,this.mark2,this.mark3,this.mark4,this.mark5).subscribe(data=>{
      if(data["message"]){
        alert("done")
       window.location.reload();
      }
      else{
        alert("fail")
      }
    })
  }
}

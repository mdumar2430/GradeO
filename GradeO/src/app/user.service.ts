import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }

  logout() {
    return this.http.get<logoutStatus>('/api/logout.php')
  }

  logingCheck(username:string,password:string):Observable<any>{
    return this.http.get("http://localhost:5000/logincheck?username="+username+"&password="+password);

  }
  signup(username:string,password:string):Observable<any>{
    return this.http.get("http://localhost:5000/insertuser?username="+username+"&password="+password);

  }
  calc(rollno:string,name:string,mark1:string,mark2:string,mark3:string,mark4:string,mark5:string):Observable<any>{
    return this.http.get("http://localhost:5000/insertstud?rollno="+rollno+"&name="+name+"&mark1="+mark1+"&mark2="+mark2+"&mark3="+mark3+"&mark4="+mark4+"&mark5="+mark5);

  }
  display():Observable<any>{
    return this.http.get("http://localhost:5000/display")
  }
 
}

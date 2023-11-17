import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  endpoint = '/login';
  domain: string;
  
  valid :boolean = true 


  constructor(private router: Router,private http: HttpClient) {
    this.domain = "http://localhost:3000"
   }

  ngOnInit(): void {}

  showRegistrationForm(){}

  login(f:any) {
    const isAuthenticated = true;
    const userData = {
      phone: f.value.phone,
      pass: f.value.pass
    };
    console.log(userData);
    this.router.navigate(['/about'])
    
  //   this.http.post(`${this.domain},${this.endpoint}`, userData).subscribe(
  //    (response : any) =>{
  //     this.valid = response.userExists;
  //     if (response.userExists){
  //       this.router.navigate(['/about'])
  //     }else{
  //       console.log("USER DOES NOT EXIST")
  //     }
  //    },
  //    (error) =>{
  //     console.error('Login failed:', error);
  //    }
  //   )
  // }
  }
}

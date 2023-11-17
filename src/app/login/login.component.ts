import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showRegistration = false;

  constructor(private router: Router) { }

  login(f:any) {
    const isAuthenticated = true;
    const userData = {
      phone: f.value.phone,
      pass: f.value.pass
    };
    console.log(userData)
    if (isAuthenticated) {
      const confirmed = window.confirm('Successfully logged in! Click OK to go to the home page.');

      if (confirmed) {
        this.router.navigate(['/about']);
      }
    }
  }





  showRegistrationForm() {
    this.showRegistration = true;
  }
}

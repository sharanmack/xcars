// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   }}



import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  login() {
   
    const isAuthenticated = true;
    

    if (isAuthenticated) {
    
      const confirmed = window.confirm('Successfully logged in! Click OK to go to the home page.');

      if (confirmed) {
        
        this.router.navigate(['/about']);
      }
    }
  }
}


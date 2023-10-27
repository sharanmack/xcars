

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private router: Router) {
  }
  

  Home() {
    // Navigate to the "home" component
    this.router.navigate(['/intro']); // Replace 'home' with the actual route path of your home component
  }
  

}

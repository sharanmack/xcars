import { Component } from '@angular/core';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-register',

  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css']

})

export class RegisterComponent {

  user = {

    username: '',

    email: '',

    password: ''

  };

 

  constructor(private router: Router) {}

 

  onSubmit() {

 

    alert('Your data is registered');

 

 

    if (confirm('Do you want to go to the Login page?')) {

      this.router.navigate(['/login']);

    }

  }

}
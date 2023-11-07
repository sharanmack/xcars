
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  message: string = 'Alert: Your message has been submitted successfully!';
  showMessage: boolean = false;

  submitForm() {
    this.showMessage = true;
  }

  closeModal() {
    this.showMessage = false;
  }
}
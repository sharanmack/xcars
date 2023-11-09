

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






// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {
//   message: string = '';
//   showMessage: boolean = false;

//   constructor(private http: HttpClient) {}

//   submitForm() {
//     const emailData = {
//       to: 'sharanmack06@gmail.com', 
//       subject: 'Contact Us Form Submission',
//       message: 'First Name: John\nLast Name: Doe\nCountry: USA\nSubject: Message Content',
//     };

//     this.http.post('https://smtpjs.com/v3/smtp.js', emailData).subscribe(
//       (response: any) => {
//         if (response.success) {
//           this.message = 'Your message has been submitted successfully!';
//         } else {
//           this.message = 'Email sending failed. Please try again later.';
//         }
//         this.showMessage = true;
//       },
//       (error) => {
//         console.error('Error:', error);
//         this.message = 'An error occurred while sending the email.';
//         this.showMessage = true;
//       }
//     );
//   }

//   closeModal() {
//     this.showMessage = false;
//   }
// }

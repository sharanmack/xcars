// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {
// // contact.component.ts




//   onSubmit() {
//     const userName = (<HTMLInputElement>document.getElementById('Name')).value;
//     const phone = (<HTMLInputElement>document.getElementById('Phone')).value;
//     const email = (<HTMLInputElement>document.getElementById('Email')).value;

//     const messageBody = `Name ${userName}<br/> Phone ${phone}<br/> Email ${email}`;

//     (window as any).Email.send({
//       Host: "smtp.elasticemail.com",
//       Username: "sharanmack05@icloud.com",
//       Password: "D4529334515FE10C59B2216F2418BDBA119A",
//       To: 'sharanmack05@icloud.com',
//       From: "sharanmack06@gmail.com",
//       Subject: "This is the subject",
//       Body: messageBody
//     }).then(
//       (message: any) => { 
//         console.log("Email sending response:", message);
  
//         if (message === 'OK') {
//           alert("Data submitted successfully!");
//         } else {
//           alert("Error submitting data.");
//         }
//       }
//     );
//     }
//   }



import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  onSubmit() {

    const userName = (<HTMLInputElement>document.getElementById('Name')).value;
    const phone = (<HTMLInputElement>document.getElementById('Phone')).value;
    const email = (<HTMLInputElement>document.getElementById('Email')).value;

   
    const messageBody = `Name: ${userName}\nPhone: ${phone}\nEmail: ${email}`;

   
    const isSubmissionSuccessful = true;

    if (isSubmissionSuccessful) {
      alert('Data submitted successfully!');
    } else {
      alert('Error submitting data.');
    }
  }
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ENV } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  endpoint = '/sendemail';
  domain: string;
  loading = false;
  showAlert = false;
  alertMessage = '';

  formData: any = {};

  constructor(private router: Router, private http: HttpClient) {
    this.domain = ENV.apiUrl;
  }

  onSubmit(contactForm: any) {
    this.loading = true;
    const userData = {
      name: contactForm.value.Name,
      phone: contactForm.value.Phone,
      email: contactForm.value.Email,
      message: contactForm.value.Message
    };

    console.log('Form submitted:', userData);

    this.http.post(`${this.domain}${this.endpoint}`, userData).subscribe(
      (response: any) => {
        if (response.emailsent) {
          this.loading = false;
          this.showAlertMessage('WILL GET IN TOUCH SOON!!');
        } else {
          this.loading = false;
          this.showAlertMessage('Sorry, email not sent');
        }
      },
    );
  }

  showAlertMessage(message: string) {
    this.showAlert = true;
    this.alertMessage = message;

    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-datauplode',
  templateUrl: './datauplode.component.html',
  styleUrls: ['./datauplode.component.css']
})
export class DatauplodeComponent {
  car = {
    name: '',
    model: '',
    price: 0,
    contactDetails: ''
  };
  msg: string='';
  url: string='';

  submitForm() {
    // You can perform any validation or data processing here before storing the data.
    // For simplicity, we'll just display the entered data.
    this.msg = 'Form submitted!';
  }

  selectFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected file here (e.g., upload it to a server, or display it).
      // For simplicity, we'll just display the image file.
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    
  }
}


import { Component } from '@angular/core';

@Component(
  {
  selector: 'app-datauplode',
  templateUrl: './datauplode.component.html',
  styleUrls: ['./datauplode.component.css']
})
export class DatauplodeComponent {
  car = {
    name: '',
    model: '',
    price: 0,
    kilometre:'',
    contactDetails: ''
  };
  msg: string = '';
  urls: string[] = []; // Use an array to store multiple selected image URLs
  submitted: boolean = false;
  selectedFiles: File[] = []; // Use an array to store multiple selected files

  submitForm() {
    this.msg = 'Form submitted!';
    this.submitted = true;
  }

  selectFiles(event: any) {
    this.selectedFiles = event.target.files;
    this.urls = []; // Clear previous URLs
    for (let i = 0; i < this.selectedFiles.length; i++) {
      const file = this.selectedFiles[i];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
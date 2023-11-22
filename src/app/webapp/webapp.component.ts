import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.css']
})
export class WebappComponent {

  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Adjust the URL based on your backend server configuration
      const apiUrl = 'http://localhost:3000/upload';

      this.http.post(apiUrl, formData).subscribe(
        (response) => {
          console.log('File uploaded successfully');
        },
        (error) => {
          console.error('Error uploading file', error);
        }
      );
    }
  }



}

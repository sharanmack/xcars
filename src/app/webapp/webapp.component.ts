import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.css']
})
export class WebappComponent {

  selectedFile: File | null = null;
  imageUrls: string[] = [];

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      console.log(this.selectedFile)
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


  // showfile(){
  //   this.http.get('http://localhost:3000/files').subscribe(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.error('Error uploading file', error);
  //     }
  //   );
  // }

  showfile() {
    this.http.get('http://localhost:3000/files').subscribe(
      (response: any[] | any) => {
        console.log(response);
  
        if (Array.isArray(response)) {
          this.imageUrls = response.map(file => {
            return `http://localhost:3000/uploads/${file.filename}`;
          });
        } else {
          this.imageUrls = [`http://localhost:3000/${response.path}/${response.filename}`];
        }
      },
      (error) => {
        console.error('Error retrieving files', error);
      }
    );
  }
  

  

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent {

  imageUrls: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
   

    
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

  getFilePath(file: any): string {
    // Adjust the URL based on your backend server configuration
    return `http://localhost:3000/${file.path}`;
  }
}

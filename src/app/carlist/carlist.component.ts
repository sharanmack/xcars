import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent {

  files: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Adjust the URL based on your backend server configuration
    const apiUrl = 'http://localhost:3000/files';

    this.http.get(apiUrl).subscribe(
      (response: Object) => { // Update the type here to Object or any
        this.files = response as any[]; // You can use 'as any[]' to explicitly cast the response to an array
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

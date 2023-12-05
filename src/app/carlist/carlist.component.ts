import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { AfterViewInit, ElementRef } from '@angular/core';
import { ENV } from 'src/environments/environment';
@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
  searchText: string = '';
  carsData: any[] = [];
  filteredCarsData: any[] = [];
  selectedFilter: string = 'carName';
  modelFilter: string = '';
  priceFilter: number | null = null;
  kilometerFilter: number | null = null;
  GetC = '/files';
  domain: string;

  @ViewChild(CarouselComponent) carousel!: CarouselComponent;

  constructor(private http: HttpClient) {
    this.domain = ENV.apiUrl
   }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    // `${this.domain}${this.endpoint}`
    // 'http://localhost:3000/files'
    this.http.get<any[]>(`${this.domain}${this.GetC}`).subscribe(data => {
      this.carsData = data.map(car => ({ ...car, enlargeImage: false }));
      this.updateFilter();
    });
  }

  updateFilter() {
    const searchLowerCase = this.searchText.toLowerCase();
    this.filteredCarsData = this.carsData.filter(car => {
      return (
        car.carName.toLowerCase().includes(searchLowerCase) &&
        car.carModel.toLowerCase().includes(this.modelFilter.toLowerCase()) &&
        (this.priceFilter === null || car.carPrice <= this.priceFilter) &&
        (this.kilometerFilter === null || car.carkilometre <= this.kilometerFilter)
      );
    });
  }

  deleteCar(car: any): void {
    console.log(car);
    const endpoint = "/deletecar";
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: car,
    };

    this.http.delete(`${this.domain}${endpoint}`, httpOptions).subscribe(
      (response: any) => {
        console.log("Car deleted successfully");
      },
      (error) => {
        console.error('Car deletion failed:', error);
        // Add your error handling logic here
      }
    );
  
    const index = this.carsData.indexOf(car);
    if (index !== -1) {
      this.carsData.splice(index, 1);
      this.updateFilter();
    }
  }

  toggleImageSize(car: any): void {
    car.enlargeImage = !car.enlargeImage;
  }

  editCar(car: any): void {
    console.log('Editing car:', car);

  }

  // prevImage(): void {
  //   if (this.carousel && this.carousel.activeSlide > 0) {
  //     this.carousel.prevSlide();
  //   }
  // }

  nextImage(): void {
    if (this.carousel && this.carousel.activeSlide < this.filteredCarsData.length - 1) {
      this.carousel.nextSlide();
    }
  }

  getImagePath(filename: string): string {
    console.log(filename)
    return `${this.domain}/uploads/${filename}`;
  }
}

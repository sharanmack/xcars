import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
  searchText: string = '';
  carsData: any[] = [];
  filteredCarsData: any[] = [];

  modelFilter: string = '';
  priceFilter: number | null = null;
  kilometerFilter: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('http://localhost:3000/files').subscribe(data => {
      this.carsData = data;
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
    // Implement your delete logic here
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



  
}

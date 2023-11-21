import { Component } from '@angular/core';
type CarData = {
  [key: string]: string[];
};
@Component({
  selector: 'app-uplodecar',
  templateUrl: './uplodecar.component.html',
  styleUrls: ['./uplodecar.component.css']
})
export class UplodecarComponent {
  car = {
    name: '',
    model: '',
    price: 0,
    kilometre: '',
    contactDetails: '',
    fuelType: '',
    selectedBrand: '',
    selectedCarNames: [] as string[]
  };
  

  msg: string = '';
  urls: string[] = [];
  submitted: boolean = false;
  selectedFiles: File[] = [];
  isFormOpen: boolean = false;
  carData: CarData = {
    'Maruti Suzuki': ['Maruti Suzuki Alto', 'S-Presso', 'Celerio', 'Wagon R',' Swift', 'Dzire', 'Baleno', 'Vitara Brezza', 'Ertiga', 'XL6', 'Ciaz', 'S-Cross'],
    'Hyundai': ['Hyundai Grand i10','Hyundai Grand i10 Nios','Hyundai Elite i20','Hyundai i20 Active','Hyundai Aura','Hyundai Verna','Hyundai Creta','Hyundai Alcazar','Hyundai Venue','Hyundai Tucson','Hyundai Kona Electric'],
    'Tata': ['Tata Tiago', 'Tata Tigor', 'Tata Altroz', 'Tata Nexon', 'Tata Harrier', 'Tata Safari', 'Tata Hexa'],
    'Toyata': ['Toyota Glanza', 'Toyota Urban Cruiser', 'Toyota Yaris', 'Toyota Fortuner', 'Toyota Innova Crysta', 'Toyota Camry', 'Toyota Vellfire', 'Toyota Land Cruiser Prado', 'Toyota Land Cruiser LC200', 'Toyota Corolla Altis'],
    'Ford' : ['Ford Figo', 'Ford Aspire', 'Ford Freestyle', 'Ford EcoSport', 'Ford Endeavour', 'Ford Mustang'],
    'Wolkswagen': ['Volkswagen Polo', 'Volkswagen Vento', 'Volkswagen Ameo', 'Volkswagen Taigun', 'Volkswagen T-Roc', 'Volkswagen Tiguan Allspace'],
    'kia':['Kia Sonet', 'Kia Seltos', 'Kia Carnival'],
    'MG':['MG Hector', 'MG Hector Plus', 'MG ZS EV', 'MG Gloster', 'MG Astor'],
    'Renault':['Renault Kwid', 'Renault Triber', 'Renault Duster'],
    'Mahindra':['Mahindra Bolero', 'Mahindra Scorpio', 'Mahindra Thar', 'Mahindra XUV300', 'Mahindra XUV500', 'Mahindra TUV300', 'Mahindra Marazzo', 'Mahindra Alturas G4', 'Mahindra KUV100'],
    'Nissan':['Nissan Magnite', 'Nissan Kicks'],
    'Skoda':['Skoda Rapid', 'Skoda Octavia', 'Skoda Superb', 'Skoda Kushaq', 'Skoda Kodiaq'],
    'Datsun':['Datsun GO', 'Datsun GO+', 'Datsun redi-GO'],
    'Jeep':['Jeep Compass', 'Jeep Wrangler', 'Jeep Grand Cherokee'],
  };

  submitForm(){
    this.msg = 'Form submitted!';
    this.submitted = true;
  }
  fileUpload: any;
  selectFiles(event: any) {
    this.selectedFiles = event.target.files;
    this.urls = [];
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

  fuelTypes: string[] = ['Petrol', 'Diesel', 'Electric'];

  carNames: string[] = Object.keys(this.carData);

  onSelectBrand(brand: string) {
    this.car.selectedBrand = brand;
    this.car.selectedCarNames = this.carData[brand];
  }
  
}



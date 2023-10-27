
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showMessage: boolean = false;
  ok = "none"

  submitForm() {
  
    this.showMessage = true;
  }
  

  closeModal() {
    this.showMessage = false;
  }


  popup(){
    this.ok = "block";
    console.log(
      'uhjuihjui'
    );
    

  }
}

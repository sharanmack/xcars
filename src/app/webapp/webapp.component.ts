import { Component } from '@angular/core';
@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.css']
})
export class WebappComponent {
  modalImageSrc: string | null = null;
  modalCaption: string | null = null;

  openModal(): void {
    const modal = document.getElementById("myModal");
    modal!.style.display = "block";

    const img = document.getElementById("myImg");
    this.modalImageSrc = img ? img.getAttribute('src') : null;
    this.modalCaption = img ? img.getAttribute('alt') : null;
  }

  closeModal(): void {
    const modal = document.getElementById("myModal");
    modal!.style.display = "none";
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  showMoreInfo1 = false;
  showMoreInfo2 = false;
  showMoreInfo3 = false;

  toggleMoreInfo1() {
    this.showMoreInfo1 = !this.showMoreInfo1;
    this.showMoreInfo2 = false;
    this.showMoreInfo3 = false;
  }

  toggleMoreInfo2() {
    this.showMoreInfo1 = false;
    this.showMoreInfo2 = !this.showMoreInfo2;
    this.showMoreInfo3 = false;
  }

  toggleMoreInfo3() {
    this.showMoreInfo1 = false;
    this.showMoreInfo2 = false;
    this.showMoreInfo3 = !this.showMoreInfo3;
  }

  isDataUploadComponentOpen: boolean = false;

  openDataUploadComponent() {
    this.isDataUploadComponentOpen = true;
  }

  modalImageSrc: string | null = null;
  modalCaption: string | null = null;

  closeModal(): void {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  }

  openModal(imgSrc: string, imgAlt: string): void {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "block";
      this.modalImageSrc = imgSrc;
      this.modalCaption = imgAlt;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})
export class PicturesComponent {
  images: string[] = [
    'assets/vkkpic.jpg',
    'assets/vaishnavi1.jpg',
    'assets/vaishnavipic2.jpg',
    'assets/vaishnavi2.jpg',
  ];

  currentIndex: number = 0;

  previousImage() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}

import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})
export class PicturesComponent {
  @Output() homePage = new EventEmitter<string>();
  currentImage: string = '';
  currentIndex: number = 0;
  intervalId: any;
  images: string[] = [
    'assets/vkkpic.jpg',
    'assets/vaishnavi1.jpg',
    'assets/vaishnavipic2.jpg',
    'assets/vaishnavi2.jpg',
  ];

  // currentIndex: number = 0;

  previousImage() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  ngOnInit(): void {
    this.currentImage = this.images[this.currentIndex];
    this.startSlideshow();
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 3000); // Change image every 6 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }  
  gotoHome() {
    this.homePage.emit('cancel');
  }

}

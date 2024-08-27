import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BiodataComponent } from './biodata/biodata.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BiodataComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  biodatas: boolean = false;
  home:boolean = true;
  ngOnInit() {

  }

  onMouseEnter(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;

    if (x > rect.width / 2) {
      button.classList.remove('left-hover');
      button.classList.add('right-hover');
    } else {
      button.classList.remove('right-hover');
      button.classList.add('left-hover');
    }
  }

  onMouseLeave() {
    const button = document.querySelector('.animated-button');
    button?.classList.remove('right-hover', 'left-hover');
  }

  photos() {
    // alert("OMkar");
  }

  biodata() {
    this.biodatas = true;
    this.home = false;
  }

  homePage(event: any) {
    this.biodatas = false;
    this.home = true;
  }
}

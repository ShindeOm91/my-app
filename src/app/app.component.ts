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

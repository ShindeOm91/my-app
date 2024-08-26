import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-biodata',
  standalone: true,
  imports: [],
  templateUrl: './biodata.component.html',
  styleUrl: './biodata.component.css'
})
export class BiodataComponent {
  @Output() homePage = new EventEmitter<string>();

  gotoHome() {
    this.homePage.emit('cancel');
  }

}

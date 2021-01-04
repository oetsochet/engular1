import { Component } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';

  mode = "dark";
  onChengeMoed() {
    if (this.mode == 'light') {
      this.mode = 'dark';
    }
    else {
      this.mode = 'light';
    }
  }
}

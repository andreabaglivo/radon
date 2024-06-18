import { Component } from '@angular/core';
import { HOME_TITLE } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public HOME_TITLE = HOME_TITLE;
}

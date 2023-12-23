import { Component } from '@angular/core';
import { HOME_TITLE } from '../../constants';

@Component({
  selector: 'ea-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public title: string = HOME_TITLE;

}

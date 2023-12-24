import { Component } from '@angular/core';
import { HOME_TITLE } from '../../constants';
import { ICard } from '../../interfaces/card.interface';

@Component({
  selector: 'ea-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public title: string = HOME_TITLE;
  public homeCard: ICard = {
    title: 'ae',
    type: 'round',
  }

}

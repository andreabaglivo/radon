import { Component } from '@angular/core';
import { CARD_INFO_RADON, HOME_TITLE } from '../../constants';
import { ICard } from '../../interfaces/card.interface';

@Component({
  selector: 'ea-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public cardInfo: ICard = CARD_INFO_RADON;
}

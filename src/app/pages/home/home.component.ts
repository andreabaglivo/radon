import { Component } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';
import { CARD_INFO_1, CARD_INFO_2, CARD_INFO_3, CARD_INFO_4 } from '../../../../src/app/constants';

@Component({
  selector: 'ea-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public cardInfo1: ICard = CARD_INFO_1;
  public cardInfo2: ICard = CARD_INFO_2;
  public cardInfo3: ICard = CARD_INFO_3;
  public cardInfo4: ICard = CARD_INFO_4;

}

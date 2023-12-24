import { Component, Input } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';
import { EMPTY_CARD } from '../../constants';

@Component({
  selector: 'ae-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardConfig: ICard = EMPTY_CARD;
}

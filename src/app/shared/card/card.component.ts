import { Component, Input } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';
import { EMPTY_CARD } from '../../constants';

@Component({
  selector: 'r-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardConfig: ICard = EMPTY_CARD;

}

document.addEventListener('DOMContentLoaded', () => {
  const flipCard = document.getElementById('flip-card');

  if (flipCard) {

    flipCard.addEventListener('mouseenter', () => {
        flipCard.classList.add('flipped');
    });
  
    flipCard.addEventListener('mouseleave', () => {
        // La carta rimane girata anche quando il mouse viene tolto.
    });
  
    flipCard.addEventListener('click', () => {
        flipCard.classList.remove('flipped');
    });
  }
});


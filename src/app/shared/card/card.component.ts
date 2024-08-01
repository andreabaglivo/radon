import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';
import { EMPTY_CARD } from '../../constants';

@Component({
  selector: 'r-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardConfig: ICard = EMPTY_CARD;

  ngOnInit(): void {

    
     
  }

}




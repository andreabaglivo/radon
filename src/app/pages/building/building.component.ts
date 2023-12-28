import { Component } from '@angular/core';
import { ISheet } from '../../interfaces/sheet.interface'
import { GENERAL_SHEET_MOK } from '../../mok';
import { ICard } from '../../interfaces/card.interface';

@Component({
  selector: 'ae-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent {

  generalInfo: ISheet = GENERAL_SHEET_MOK;
  electricCard: ICard= {
    title: 'Elettrico',
    type: 'electric'
  };
  hydraulicCard: ICard = {
    title: 'Idraulico',
    type: 'hydraulic'
  };

  structureCard: ICard = {
    title: 'Strutture',
    type: 'structure'
  }

  photovoltaicCard: ICard = {
    title: 'Fotovoltaico',
    type: 'photovoltaic'
  }
  // riscaldamentoCard;
  // allarmeCard;
  // gasCard; 

  heatingCard: ICard= {
    title: 'Riscaldamento',
    type: 'heating'
  };

  gardenCard: ICard= {
    title: 'Giardino',
    type: 'garden'
  };
}

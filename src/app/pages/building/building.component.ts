import { Component } from '@angular/core';
import { ISheet } from '../../interfaces/sheet.interface'
import { ELECTRIC_CARD_MOK, EXPENSE_CARD_MOK, GARDEN_CARD_MOK, GENERAL_SHEET_MOK, HEATING_CARD_MOK, HYDRAULIC_CARD_MOK, INSURANCE_CARD_MOK, PHOTOVOLTAIC_CARD_MOK, STRUCTURE_CARD_MOK } from '../../mok';
import { ICard } from '../../interfaces/card.interface';

@Component({
  selector: 'ae-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent {
  title = 'ae'; 

  generalInfo: ISheet = GENERAL_SHEET_MOK;

  electricCard: ICard = ELECTRIC_CARD_MOK;
  hydraulicCard: ICard = HYDRAULIC_CARD_MOK; 
  structureCard: ICard = STRUCTURE_CARD_MOK;
  photovoltaicCard: ICard = PHOTOVOLTAIC_CARD_MOK; 
  // riscaldamentoCard;
  // allarmeCard;
  // gasCard; 

  heatingCard: ICard = HEATING_CARD_MOK;
  gardenCard: ICard = GARDEN_CARD_MOK;
  expenseCard: ICard = EXPENSE_CARD_MOK;
  insuranceCard: ICard = INSURANCE_CARD_MOK;
}

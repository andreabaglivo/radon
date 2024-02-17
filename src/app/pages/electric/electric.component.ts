import { Component } from '@angular/core';
import { ELECTRIC_SHEET_MOK } from '../../../../src/app/mok';

@Component({
  selector: 'ae-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.scss']
})
export class ElectricComponent {
  public electricSheet = ELECTRIC_SHEET_MOK;

}

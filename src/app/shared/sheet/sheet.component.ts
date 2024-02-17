import { Component, Input } from '@angular/core';
import { ISheet } from '../../../../src/app/interfaces/sheet.interface';

@Component({
  selector: 'ea-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent {
  @Input() sheet!: ISheet;
}

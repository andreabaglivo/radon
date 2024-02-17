import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuildingComponent } from './pages/building/building.component';
import { RoomComponent } from './pages/room/room.component';
import { ElectricComponent } from './pages/electric/electric.component';
import { PhotovoltaicComponent } from './pages/photovoltaic/photovoltaic.component';
import { StructureComponent } from './pages/structure/structure.component';
import { HeatingComponent } from './pages/heating/heating.component';
import { GardenComponent } from './pages/garden/garden.component';
import { HydraulicComponent } from './pages/hydraulic/hydraulic.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { ExpenseComponent } from './pages/expense/expense.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'building',
    component: BuildingComponent,
  },
  {
    path: 'building/room',
    component: RoomComponent,
  },
  {
    path: 'building/electric',
    component: ElectricComponent,
  },
  {
    path: 'building/photovoltaic',
    component: PhotovoltaicComponent,
  },
  {
    path: 'building/structure',
    component: StructureComponent,
  },
  {
    path: 'building/heating',
    component: HeatingComponent,
  },
  {
    path: 'building/garden',
    component: GardenComponent,
  },
  {
    path: 'building/hydraulic',
    component: HydraulicComponent,
  },
  {
    path: 'building/expense',
    component: ExpenseComponent,
  },
  {
    path: 'building/insurance',
    component: InsuranceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

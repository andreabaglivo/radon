import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuildingComponent } from './pages/building/building.component';
import { RoomComponent } from './pages/room/room.component';
import { ElectricComponent } from './pages/electric/electric.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

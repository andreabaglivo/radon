import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourVirtualeComponent } from './tour-virtuale/tour-virtuale.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './shared/card/card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MapComponent } from './shared/map/map.component';
import {MatInputModule} from '@angular/material/input';
import { SearchMenuComponent } from './shared/search-menu/search-menu.component';
import { BuildingComponent } from './pages/building/building.component';
import { RoomComponent } from './pages/room/room.component';
import { ElectricComponent } from './pages/electric/electric.component';
import { SheetComponent } from './shared/sheet/sheet.component';
import { HydraulicComponent } from './pages/hydraulic/hydraulic.component';
import { StructureComponent } from './pages/structure/structure.component';
import { PhotovoltaicComponent } from './pages/photovoltaic/photovoltaic.component';
import { HeatingComponent } from './pages/heating/heating.component';
import { GardenComponent } from './pages/garden/garden.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { ExpenseComponent } from './pages/expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    TourVirtualeComponent,
    HomeComponent,
    CardComponent,
    MapComponent,
    SearchMenuComponent,
    BuildingComponent,
    RoomComponent,
    ElectricComponent,
    SheetComponent,
    HydraulicComponent,
    StructureComponent,
    PhotovoltaicComponent,
    HeatingComponent,
    GardenComponent,
    ExpenseComponent,
    InsuranceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,  
    MatInputModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

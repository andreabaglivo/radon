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

@NgModule({
  declarations: [
    AppComponent,
    TourVirtualeComponent,
    HomeComponent,
    CardComponent,
    MapComponent,
    SearchMenuComponent
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

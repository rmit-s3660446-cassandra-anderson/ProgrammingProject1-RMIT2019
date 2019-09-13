import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatGridListModule, MatCheckboxModule, MatButtonModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { BookformComponent } from './bookform/bookform.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,                  
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MapComponent,
    BookformComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
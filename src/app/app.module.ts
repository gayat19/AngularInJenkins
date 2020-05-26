import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { BouquetComponent } from './bouquet/bouquet.component';
import { ShowBouquetsComponent } from './show-bouquets/show-bouquets.component';
import {BouquetService} from './services/bouquet.service';
import {ShowBouquetComponent} from './show-bouquets/show-bouquet/show-bouquet.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { SearchImagesComponent } from './search-images/search-images.component';
@NgModule({
  declarations: [
    AppComponent,
    BouquetComponent,
    ShowBouquetsComponent,
    ShowBouquetComponent,
    ShowCartComponent,
    SearchImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BouquetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

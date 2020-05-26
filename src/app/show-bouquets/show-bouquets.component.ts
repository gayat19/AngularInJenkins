import { Component, OnInit } from '@angular/core';
import {BouquetService} from '../services/bouquet.service';
import {Bouquet} from '../bouquet/bouquet.model';

@Component({
  selector: 'app-show-bouquets',
  templateUrl: './show-bouquets.component.html',
  styleUrls: ['./show-bouquets.component.css']
})
export class ShowBouquetsComponent implements OnInit {
bouquets:Bouquet[];
message:string;
  constructor(private bouquetService:BouquetService) {
    this.bouquets = this.bouquetService.bouquets;
   }

  ngOnInit() {
  }
  addToBuy(event:Bouquet){

    if(this.bouquetService.addToCart(event.Id))
      this.message = "Added to cart";
    else
      this.message = "Unable to add to cart now";
  }
}

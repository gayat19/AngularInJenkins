import { Component, OnInit } from '@angular/core';
import {BouquetService} from '../services/bouquet.service';
import {Bouquet} from './bouquet.model';

@Component({
  selector: 'app-bouquet',
  templateUrl: './bouquet.component.html',
  styleUrls: ['./bouquet.component.css']
})
export class BouquetComponent implements OnInit {
  Id:number;
  Name:string;
  Price:number;
  Desc:string;
  Quantity:number;
  bouquet:Bouquet;
  message:string;
  constructor(private bouquetService:BouquetService) { 
    this.bouquet = new Bouquet();
    this.message = "Welcome!!!"
  }

  ngOnInit() {
  }
  addBouquet(){
    this.bouquet = new Bouquet();
    this.bouquet.Id = this.Id;
    this.bouquet.Name = this.Name;
    this.bouquet.Price = this.Price;
    this.bouquet.Desc = this.Desc;
    this.bouquet.Quantity = this.Quantity;
    if(this.bouquetService.addBouquet(this.bouquet))
      this.message = "Bouquet added!!!!";
    else 
    this.message = "Bouquet died:-(";
  }
}

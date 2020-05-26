import { Component, OnInit } from '@angular/core';
import {BouquetService} from '../services/bouquet.service';
import {Bouquet} from '../bouquet/bouquet.model';
@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
cart:Bouquet[];
quan:number[];
  constructor(private bouquetService:BouquetService) {
    this.cart = bouquetService.shoppingCart;
    this.quan = bouquetService.itemQuantity;
   }
  checkCart(){
    if(this.bouquetService.shoppingCart.length==0)
      return false;
    else
      return true;
  }
  ngOnInit() {
  }

}

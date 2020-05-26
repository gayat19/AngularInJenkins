import {Component,Output,Input,EventEmitter} from '@angular/core';
import {BouquetService} from '../../services/bouquet.service';
import {Bouquet} from '../../bouquet/bouquet.model';

@Component({
    selector:'app-show-bouquet',
    templateUrl:'./show-bouquent.component.html'
})
export class ShowBouquetComponent{
@Input() bouquet:Bouquet;
@Output() buyBouquet = new EventEmitter();
buy(){
    this.buyBouquet.emit(this.bouquet);
    }
}


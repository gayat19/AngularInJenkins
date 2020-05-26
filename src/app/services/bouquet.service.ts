import {Bouquet} from '../bouquet/bouquet.model';


export class BouquetService{
    bouquets:Bouquet[];
    shoppingCart:Bouquet[];
    itemQuantity:number[];
    constructor(){
        this.shoppingCart = [];
        this.itemQuantity=[];
        var first=new Bouquet();
        first.Id=100;
        first.Name="Mixed";
        first.Price=200;
        first.Quantity=2;
        first.Desc="Normal Mixed flowers!!!! but good one. value for money"
        this.bouquets = [first];
    }
    addBouquet(bouquet){
        var exist:boolean = false;
        for(let i=0;i<this.bouquets.length;i++){
            if(this.bouquets[i].Id == bouquet.Id){
                this.bouquets[i].Quantity += bouquet.Quantity*1;
                exist = true;
                break;
            }
        }
        if(exist != true){
            this.bouquets.push(bouquet);
        }
        
    }
    getBouquite(id)
    {
        var bouquet:Bouquet = null;
        if(id){
            for(let i=0;i<this.bouquets.length;i++){
                if(this.bouquets[i].Id == id){
                    bouquet = this.bouquets[i];
                    break;
                }
            }
        }
        return bouquet;
    }
    addToCart(id){
        var result = false;
        var exists = false;
        if(id != null){
            for(let i=0;i<this.bouquets.length;i++){
                if(this.bouquets[i].Id == id &&  this.bouquets[i].Quantity>0){
                    for(var j =0;j<this.shoppingCart.length;j++){
                        if(this.shoppingCart[j].Id == id)
                        {
                            this.itemQuantity[j] =((this.itemQuantity[j]*1)+1);
                            console.log(this.itemQuantity[j]);
                            exists = true;
                            this.bouquets[i].Quantity -= 1;
                             result = true; 
                        }
                    }
                    if(exists==false){
                        this.shoppingCart.push(this.bouquets[i]);
                        this.itemQuantity[this.shoppingCart.length-1] =1;
                        this.bouquets[i].Quantity -= 1;
                        result = true; 
                    }
                }
            }
        }
        return result;
    }
}

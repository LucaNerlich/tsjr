import { Artikel } from "./Artikel";
import { Person } from "./Person";

// tsc *.ts --watch
// tsc -w -p .

export class ShoppingCart {
    owner: Person;
    itemsToBuy: Artikel[] = [];
    currentPrice: number;

    constructor(owner: Person){
        this.owner = owner;
    }

    addArtikel(artikel: Artikel) {
        this.itemsToBuy.push(artikel);
    }

    printShoppingCart() {
        for (let item of this.itemsToBuy) {
            console.log(item.getName());
        }
    }

    getShoppingCartSum() {
        let sum: number;

        // get each articles price and add to sum
        for (let item of this.itemsToBuy) {
            sum += item.price;
        }

        return sum;
    }
}


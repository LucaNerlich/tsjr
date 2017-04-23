import { Artikel } from "./Artikel";
import { Person } from "./Person";

// tsc *.ts --watch
// tsc -w -p .

export class ShoppingCart {
    owner: Person;
    itemsToBuy: Artikel[];
    currentPrice: number;

    addArtikel(artikel: Artikel) {
        this.itemsToBuy.push(artikel);
    }

    printShoppingCart(shoppingCart: ShoppingCart) {
        for (let item of shoppingCart.itemsToBuy) {
            console.log(item.getName());
        }
    }

    getShoppingCartSum(shoppingCart: ShoppingCart) {
        let sum: number;

        // get each articles price and add to sum
        for (let item of shoppingCart.itemsToBuy) {
            sum += item.price;
        }

        return sum;
    }
}


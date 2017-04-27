import { Artikel } from "./Artikel";
import { Person } from "./Person";

/** JS Doc Comment */
export class ShoppingCart {
    owner: Person;
    itemsToBuy: Artikel[] = [];
    currentPrice: number;

    /** 
     * Represents a shopping cart.
     * @constructor
     * @param {Person} owner - The owner of the shoppingcart.
     */
    constructor(owner: Person) {
        this.owner = owner;
    }

    addArtikel(artikel: Artikel) {
        this.itemsToBuy.push(artikel);
    }

    removeArtikel(artikel: Artikel) {
        let index = this.itemsToBuy.indexOf(artikel, 0)
        if (index > -1) {
            this.itemsToBuy.splice(index, 1)
        }
    }

    printShoppingCart() {
        for (let item of this.itemsToBuy) {
            console.log(item.getName());
        }
    }

    getShoppingCartSum() {
        let sum: number = 0;

        // get each articles price and add to sum
        for (let item of this.itemsToBuy) {
            sum += item.getPrice();
        }

        return sum;
    }
}

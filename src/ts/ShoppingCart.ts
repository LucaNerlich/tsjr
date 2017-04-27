import { Artikel } from "./Artikel";
import { Person } from "./Person";
import * as Collections from "typescript-collections";

/** JS Doc Comment */
enum ArtikelTyp {
    Frucht,
    Gemuese,
    Tiefkuehl,
    Suess
}

export class ShoppingCart {
    private owner: Person;
    private itemsToBuy: Artikel[] = [];
    private currentPrice: number;

    /** 
     * Represents a shopping cart.
     * @constructor
     * @param {Person} owner - The owner of the shoppingcart.
     */
    constructor(owner: Person) {
        this.owner = owner;
    }

    addArtikel(artikel: Artikel): void {
        this.itemsToBuy.push(artikel);

        // enum beispiel
        let x = ArtikelTyp.Frucht;

    }

    removeArtikel(artikel: Artikel): boolean {
        let index: number = this.itemsToBuy.indexOf(artikel, 0)
        if (index > -1) {
            this.itemsToBuy.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    printShoppingCart(): void {
        for (let item of this.itemsToBuy) {
            console.log(item.getName());
        }

        // https://github.com/basarat/typescript-collections
        // let testSet: Collections.Set = new Collections.Set<number>();
    }

    getShoppingCartSum(): number {
        let sum: number = 0;

        // get each articles price and add to sum
        for (let item of this.itemsToBuy) {
            sum += item.getPrice();
        }

        return sum;
    }
}

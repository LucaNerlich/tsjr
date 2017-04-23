import { Artikel } from "./Artikel";
import { Person } from "./Person";
export declare class ShoppingCart {
    owner: Person;
    itemsToBuy: Artikel[];
    currentPrice: number;
    constructor(owner: Person);
    addArtikel(artikel: Artikel): void;
    printShoppingCart(): void;
    getShoppingCartSum(): number;
}

import { Artikel } from "./Artikel";
import { Person } from "./Person";
import { ShoppingCart } from "./Shoppingcart";

// tsc -w -p .
// if issues with npm or node occur, try complete reinstall of node and npm
// http://stackoverflow.com/questions/33870520/npm-install-cannot-find-module-semver
// in vsc using prettier: cmd + shift + p -> 'Format Document'

let banane: Artikel = new Artikel("Banane", 1.2);

let apfel: Artikel = new Artikel("Apfel", 0.99);

let shopper1: Person = new Person("Luca", "Nerlich");

let shoppingCart: ShoppingCart = new ShoppingCart(shopper1);

shoppingCart.addArtikel(banane);
shoppingCart.addArtikel(apfel);

shoppingCart.printShoppingCart();
console.log("###### - Preise - ######");
console.log(shoppingCart.getShoppingCartSum());

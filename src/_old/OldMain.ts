import { Artikel } from "./Artikel";
import { Person } from "./Person";
import { ShoppingCart } from "./Shoppingcart";

// http://brianflove.com/2016/11/08/typescript-2-express-node/
// https://basarat.gitbooks.io/typescript/

let banane: Artikel = new Artikel("Banane", 1.2);

let apfel: Artikel = new Artikel("Apfel", 0.99);

let shopper1: Person = new Person("Luca", "Nerlich");

let shoppingCart: ShoppingCart = new ShoppingCart(shopper1);

shoppingCart.addArtikel(banane);
shoppingCart.addArtikel(banane);
shoppingCart.addArtikel(apfel);
shoppingCart.addArtikel(apfel);

shoppingCart.printShoppingCart();
console.log("###### - Preise - ######");
console.log(shoppingCart.getShoppingCartSum());

//  Promises examples - https://basarat.gitbooks.io/typescript/docs/promise.html

const promise = new Promise((resolve, reject) => {
    resolve(123);
    reject(new Error("Something awful happened"));
});
promise.then((res) => {
    console.log('I get called:', res === 123); // I get called: true
});
promise.catch((err) => {
    console.log('I get called:', err.message); // I get called: 'Something awful happened'

});
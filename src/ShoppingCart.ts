import {Artikel} from "./Artikel";
import {Person} from "./Person";

// tsc *.ts --watch
// tsc -w -p .

export interface ShoppingCart{
    owner :Person;
    itemsToBuy :Array<Artikel>;
    currentPrice :number;
}

function getShoppingCartSum(shoppingCart :ShoppingCart){
    let sum :number;

    // get each articles price and add to sum
    for (let item of shoppingCart.itemsToBuy){
        sum += item.price;
    }

    return sum;
}
export class ShoppingCart {
    addArtikel(artikel) {
        this.itemsToBuy.push(artikel);
    }
    printShoppingCart(shoppingCart) {
        for (let item of shoppingCart.itemsToBuy) {
            console.log(item.getName());
        }
    }
    getShoppingCartSum(shoppingCart) {
        let sum;
        for (let item of shoppingCart.itemsToBuy) {
            sum += item.price;
        }
        return sum;
    }
}
//# sourceMappingURL=Shoppingcart.js.map
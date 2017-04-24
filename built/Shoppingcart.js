export class ShoppingCart {
    constructor(owner) {
        this.itemsToBuy = [];
        this.owner = owner;
    }
    addArtikel(artikel) {
        this.itemsToBuy.push(artikel);
    }
    printShoppingCart() {
        for (let item of this.itemsToBuy) {
            console.log(item.getName());
        }
    }
    getShoppingCartSum() {
        let sum = 0;
        for (let item of this.itemsToBuy) {
            sum += item.getPrice();
        }
        return sum;
    }
}
//# sourceMappingURL=Shoppingcart.js.map
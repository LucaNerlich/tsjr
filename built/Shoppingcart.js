var ArtikelTyp;
(function (ArtikelTyp) {
    ArtikelTyp[ArtikelTyp["Frucht"] = 0] = "Frucht";
    ArtikelTyp[ArtikelTyp["Gemuese"] = 1] = "Gemuese";
    ArtikelTyp[ArtikelTyp["Tiefkuehl"] = 2] = "Tiefkuehl";
    ArtikelTyp[ArtikelTyp["Suess"] = 3] = "Suess";
})(ArtikelTyp || (ArtikelTyp = {}));
export class ShoppingCart {
    constructor(owner) {
        this.itemsToBuy = [];
        this.owner = owner;
    }
    addArtikel(artikel) {
        this.itemsToBuy.push(artikel);
        let x = ArtikelTyp.Frucht;
    }
    removeArtikel(artikel) {
        let index = this.itemsToBuy.indexOf(artikel, 0);
        if (index > -1) {
            this.itemsToBuy.splice(index, 1);
        }
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
export class Artikel {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    getName() {
        return this.name;
    }
    getNameAndPrice() {
        return this.getName() + ": " + this.getPrice();
    }
}
//# sourceMappingURL=Artikel.js.map
export class Artikel {
    name: string;
    price: number;

    constructor(name: string, price: number) {
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

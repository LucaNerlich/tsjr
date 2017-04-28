export class Artikel {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    getName(): string {
        return this.name;
    }

    getNameAndPrice(): string {
        return this.getName() + ": " + this.getPrice();
    }
}

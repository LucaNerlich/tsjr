export class Artikel {
    name: String;
    price: number;

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





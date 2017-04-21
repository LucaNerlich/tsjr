export interface Artikel{
    name :String;
    price :number;
}

function getPrice(){
    return this.price;
}

function getName(){
    return this.name;
}
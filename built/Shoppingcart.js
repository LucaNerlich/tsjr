function getShoppingCartSum(shoppingCart) {
    let sum;
    for (let item of shoppingCart.itemsToBuy) {
        sum += item.price;
    }
    return sum;
}
//# sourceMappingURL=Shoppingcart.js.map
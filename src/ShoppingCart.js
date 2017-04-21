"use strict";
exports.__esModule = true;
function getShoppingCartSum(shoppingCart) {
    var sum;
    // get each articles price and add to sum
    for (var _i = 0, _a = shoppingCart.itemsToBuy; _i < _a.length; _i++) {
        var item = _a[_i];
        sum += item.price;
    }
    return sum;
}

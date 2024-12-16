var menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */
function placeOrder(name) {
    var item = menu.find((item) => item.name == name);
    if (!item) {
        return;
    }
    cashInRegister += item.price;
    var order = {
        id: nextOrderId++,
        pizza: item,
        status: "ordered",
    };
    orderQueue.push(order);
    return order;
}
/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */
function completeOrder(orderId) {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order)
        return;
    order.status = "completed";
    return order;
}
/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 *
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 */
export function getPizzaDetail(identifier) {
    /**
     * Challenge: write the code to check if the parameter is a string
     * or a number, and use the menu.find() method accordingly
     */
    if (typeof identifier == "string") {
        return menu.find((pizza) => pizza.name == identifier);
    }
    else if (typeof identifier == "number") {
        return menu.find((pizza) => pizza.id == identifier);
    }
    else {
        throw new TypeError("Parameter `identifier must be either string or a number`");
    }
}
addNewPizza({ id: 6, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 7, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 8, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(0);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

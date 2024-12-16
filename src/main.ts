type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  status: "ordered" | "completed";
  pizza: Pizza;
};

var cashInRegister: number = 100;
var nextPizzaId = 0;
var nextOrderId: number = 1;
var orderQueue: Order[] = [];

var menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  let pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(pizza);
  return pizza;
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */
function placeOrder(name: string): Order | undefined {
  var item = menu.find((item) => item.name == name);

  if (!item) {
    return;
  }
  cashInRegister += item.price;

  var order: Order = {
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

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) return;
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

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  /**
   * Challenge: write the code to check if the parameter is a string
   * or a number, and use the menu.find() method accordingly
   */
  if (typeof identifier == "string") {
    return menu.find((pizza) => pizza.name == identifier);
  } else if (typeof identifier == "number") {
    return menu.find((pizza) => pizza.id == identifier);
  } else {
    throw new TypeError(
      "Parameter `identifier must be either string or a number`"
    );
  }
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(0);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

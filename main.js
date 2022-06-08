import Order from "./js/order.js";
import * as orderService from "./js/orderService.js";

const code = document.querySelector("#code");
const basic = document.querySelector("#basic");
const discount = document.querySelector("#discount");
const button = document.querySelector("#calc");
const result = document.querySelector("#result");

button.addEventListener("click", function (e) {
  e.preventDefault;
  const order = new Order(code.value, basic.value, discount.value);
  const sale = orderService.total(order);
  result.classList.add("result");
  result.innerHTML = sale;
});

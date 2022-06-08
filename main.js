import Order from "./js/order.js";
import ShippingService from "./js/shippingService.js";
import OrderService from "./js/OrderService.js";

const code = document.querySelector("#code");
const basic = document.querySelector("#basic");
const discount = document.querySelector("#discount");
const button = document.querySelector("#calc");
const result = document.querySelector("#result");

const sp = new ShippingService();
const os = new OrderService();

function purshace(item) {
  let total;
  if (item.basic == 0) {
    result.classList.add("result")
    result.classList.add("error")
    return result.innerHTML = `Empty cart =\\`;
  } else {
    result.classList.remove("error")
    result.classList.add("result")
    total = os.total(item) + sp.shipment(item.basic);
    return result.innerHTML = `Purshace code: ${item.code} <br> <strong>Total price = $${total.toFixed(2)} </strong>`;
  }
}

button.addEventListener("click", function(e) {
  e.preventDefault;
  const order = new Order(code.value, basic.value, discount.value);
  purshace(order);
});

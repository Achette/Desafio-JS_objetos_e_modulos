import Order from "./js/order.js";
import ShippingService from "./js/shippingService.js";
import orderService from "./js/orderService.js";

const code = document.querySelector("#code");
const basic = document.querySelector("#basic");
const discount = document.querySelector("#discount");
const button = document.querySelector("#calc");
const result = document.querySelector("#result");

const sp = new ShippingService();
const os = new orderService();

function purshace(item) {
  let total 
  if(item.basic == 0) {
    return result.innerHTML =  `Empty cart`
  } else {
    total = os.total(item) + sp.shipment(item.basic)
    return result.innerHTML = `Purshace code: ${item.code}
    Valor total = ${total.toFixed(2)}`
  }
}

button.addEventListener("click", function (e) {
  e.preventDefault;
  const order = new Order(code.value, basic.value, discount.value);  
  purshace(order)
});

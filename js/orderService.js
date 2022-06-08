import * as shippingService from "./shippingService.js";

export function total(order) {
  try {
    let basicPrice = order.basic;
    if (basicPrice == 0) {
      throw "Empty chart =\\";
    }
    let discount = order.discount;
    const shipping = shippingService.shipment(basicPrice);
    const total = basicPrice - basicPrice * (discount / 100) + shipping;
    return `Order code: ${order.code} <br> <strong>Total price: $${total.toFixed(2)}</strong>`;

  } catch (e) {
    return e;
  }
}

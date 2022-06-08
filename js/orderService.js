import * as shippingService from "./shippingService.js";

export function total(order) {
  try {
    let basicprice = order.basic;
    if (basicprice == 0) {
      throw "Empty chart =\\";
    }
    let discount = order.discount;
    const shipping = shippingService.shipment(basicprice);
    const total = basicprice - basicprice * (discount / 100) + shipping;
    return `Order code: ${order.code} <br> <strong>Total price: ${total.toFixed(2)}</strong>`;

  } catch (e) {
    return e;
  }
}

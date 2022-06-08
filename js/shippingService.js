class ShippingService {
  constructor() {}

  shipment(order) {
    let shipping;
    if (order > 200) {
      shipping = 0.0;
    } else if (order < 200 && order > 100) {
      shipping = 12.0;
    } else {
      shipping = 20.0;
    }

    return shipping;
  }
}

export default ShippingService;

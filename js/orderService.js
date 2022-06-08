class OrderService {
  constructor() {}

  total(order) {
    let basicprice = order.basic;
    let discount = order.discount;

    const total = basicprice - basicprice * (discount / 100);

    return total;
  }
}

export default OrderService;

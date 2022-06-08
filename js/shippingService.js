export function shipment(order) {
   
  let shipping
  if(order > 200) {
    shipping = 0
  } else if (order < 200 && order > 100) {
    shipping = 12
  } else {
    shipping = 20
  }

  return shipping
}




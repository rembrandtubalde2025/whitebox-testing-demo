function calculateDiscount(price, type) {

  // Camino 1: precio inválido
  if (price <= 0) {
    return 0;
  }

  // Camino 2: cliente VIP
  if (type === "VIP") {
    return price * 0.8;
  }

  // Camino 3: cliente REGULAR
  else if (type === "REGULAR") {
    return price * 0.9;
  }

  // Camino 4: tipo desconocido
  else {
    return price;
  }
}

module.exports = calculateDiscount;

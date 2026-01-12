function calcularDescuento(monto, tipoCliente) {
  if (monto <= 0) {
    return 0;
  }

  if (tipoCliente === 'VIP') {
    if (monto > 1000) {
      return monto * 0.3;
    } else {
      return monto * 0.2;
    }
  }

  if (tipoCliente === 'REGULAR') {
    if (monto > 500) {
      return monto * 0.1;
    }
  }

  if (tipoCliente === 'NUEVO') {
    return monto * 0.05;
  }

  return 0;
}

module.exports = { calcularDescuento };

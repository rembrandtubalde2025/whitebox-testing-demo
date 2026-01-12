const { calcularDescuento } = require('./calculator');

test('VIP con monto alto', () => {
  expect(calcularDescuento(1500, 'VIP')).toBe(450);
});

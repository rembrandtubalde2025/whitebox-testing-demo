const { calcularDescuento } = require('./calculator.js');

test('VIP con monto alto', () => {
  expect(calcularDescuento(1500, 'VIP')).toBe(450);
});

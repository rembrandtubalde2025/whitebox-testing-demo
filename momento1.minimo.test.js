const { calcularDescuento } = require('./momento1.minimo.test.js');

test('VIP con monto alto', () => {
  expect(calcularDescuento(1500, 'VIP')).toBe(450);
});

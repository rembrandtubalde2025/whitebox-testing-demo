const { calcularDescuento } = require('./momento2.intermedio.test');

test('VIP con monto bajo', () => {
  expect(calcularDescuento(500, 'VIP')).toBe(100);
});

test('REGULAR con monto alto', () => {
  expect(calcularDescuento(800, 'REGULAR')).toBe(80);
});

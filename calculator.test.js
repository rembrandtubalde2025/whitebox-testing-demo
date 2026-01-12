const { calcularDescuento } = require('./calculator');

test('VIP con monto alto', () => {
  const resultado = calcularDescuento(1500, 'VIP');
  expect(resultado).toBe(450);
});

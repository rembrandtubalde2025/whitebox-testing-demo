const { calcularDescuento } = require('./calculator');

test('monto inválido', () => {
  expect(calcularDescuento(0, 'VIP')).toBe(0);
});

test('VIP monto alto (>1000)', () => {
  expect(calcularDescuento(1500, 'VIP')).toBe(450);
});

test('VIP monto bajo (<=1000)', () => {
  expect(calcularDescuento(800, 'VIP')).toBe(160);
});

test('REGULAR monto alto (>500)', () => {
  expect(calcularDescuento(600, 'REGULAR')).toBe(60);
});

test('REGULAR monto bajo (<=500)', () => {
  expect(calcularDescuento(400, 'REGULAR')).toBeUndefined();
});

test('cliente NUEVO', () => {
  expect(calcularDescuento(200, 'NUEVO')).toBe(10);
});

test('tipo desconocido', () => {
  expect(calcularDescuento(300, 'OTRO')).toBe(0);
});

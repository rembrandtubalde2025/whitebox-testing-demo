const calculateDiscount = require("./calculator");

test("Aplica descuento VIP", () => {
  expect(calculateDiscount(100, "VIP")).toBe(80);
});

test("Precio menor o igual a cero", () => {
  expect(calculateDiscount(-10, "VIP")).toBe(0);
});

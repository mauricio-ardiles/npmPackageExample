import { sumar, restar, multiplicar, dividir } from '../src/math';

describe('Funciones matemáticas', () => {
  test('suma correcta', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('resta correcta', () => {
    expect(restar(10, 4)).toBe(6);
  });

  test('multiplicación correcta', () => {
    expect(multiplicar(3, 7)).toBe(21);
  });

  test('división correcta', () => {
    expect(dividir(8, 2)).toBe(4);
  });

  test('no divide entre cero', () => {
    expect(() => dividir(5, 0)).toThrow("No se puede dividir entre cero");
  });
});

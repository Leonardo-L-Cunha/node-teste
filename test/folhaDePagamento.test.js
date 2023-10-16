import { somaHoraExtra, calculaDescontos } from '..';

describe('Testes dos Caáculos de folha', () => {
  test('Deve retornanar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHoraExtra(2000, 500);

    expect(retornado).toBe(esperado);
  });

  test('Deve retornar o desconto salarial', () => {
    const esperado = 2300;
    const retonado = calculaDescontos(2500, 200);

    expect(retonado).toBe(esperado);
  });
});

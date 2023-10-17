import Item from '../item.js';

describe('Teste dos Itens', () => {
  it('Deve retorna os 3 campos: nome, valor , quantidade', () => {
    const item = new Item('Batata', 2.5, 10);

    expect(item.nome).toBe('Batata');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it('Deve retorna soma total do item', () => {
    const item = new Item('Arroz', 17, 3);

    expect(item.pegaValorTotalItem()).toBe(51);
  });
});

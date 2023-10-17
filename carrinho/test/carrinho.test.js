import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Dever testar o carrinho', () => {
  it('Carrinho deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens no carrinho', () => {
    const item = new Item('Abacaxi', 4.75, 3);
    const item2 = new Item('Pó de café', 8, 2);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);
  });

  it('Deve ter a propriedade "total" na inicializacao', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve retornar um erro caso finalize a compra com o carrinho vazio', () => {
    function englobaErros() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErros).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adcionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);

    expect(carrinho.frete).toBe(10);
  });

  it('Deve finalizar a compra com sucesso', () => {
    const item = new Item('Abacaxi', 4.75, 3);
    const item2 = new Item('Pó de café', 8, 2);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 30.25,
      frete: 10,
      total: 40.25,
    });
  });
});

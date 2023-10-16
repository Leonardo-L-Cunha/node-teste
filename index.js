import assert from 'node:assert/strict';

const somaHoraExtra = (salario, horaExtra) => salario + horaExtra;

const calculaDescontos = (salario, desconto) => salario - desconto;

const veriqueSe = (valor) => {
  assercoes = {
    ehExatamenteIgualA(esperado) {
      assert.strictEqual(valor, esperado);
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou`);
  } catch (error) {
    console.error(`${titulo} nao passou`);
  }
};

teste('Soma Salario', () => {
  const esperado = 2400;
  const retornado = somaHoraExtra(2000, 500);

  veriqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('Desconto Salario', () => {
  const esperado = 2300;
  const retornado = calculaDescontos(2500, 200);

  veriqueSe(retornado).ehExatamenteIgualA(esperado);
});

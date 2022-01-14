const despesas = require('./base/lista-despesas')();
const parcelas = require('./base/lista-parcelas')();

//  fazendo um for com forEach
despesas.forEach((item) => {
    console.log(item);
});

// filtrando uma lista com filter
const sublist = despesas.filter((despesa) => {
    return despesa.descricao.toLocaleLowerCase().includes('conta');    
});
console.log(sublist);

// retorno um elemento
const despesa = despesas.find((despesa) => {
    return despesa.descricao.toLocaleLowerCase().includes('conta');    
});


const isPago = parcelas.every((parcela) => parcela.pago);
console.log('is divida paga: ', isPago);

const temParcelaAberta = parcelas.some((parcela) => !parcela.pago);
console.log('is parcela aberta: ', temParcelaAberta);

// reduce (somar os itens)
const total = despesas.reduce((valorAnterior, despesaAtual) => {
    return valorAnterior + despesaAtual.valor;
}, 0);

console.log(total);

// map
const listaSimples = despesas.map((despesa) => {
    return {
        descricao: despesa.descricao,
        valor: despesa.valor
    }
});

console.log(listaSimples);


// splice
// a partir do segundo element, remover 0 elements e add o element {test: 'testes'}
despesas.splice(2, 0, {test: 'testes'});
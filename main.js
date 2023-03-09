var precos = [10, 7, 8, 25, 8, 9, 100, 99];

function obterMenorPreco(lista) {
    var menorNumero = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (menorNumero > lista[i]) {
            menorNumero = lista[i];
        }
    }
    return menorNumero;
}

function obterMaiorPreco(precos) {
    var maiorNumero = precos[0];
    for (let i = 1; i < precos.length; i++) {
        if (maiorNumero < precos[i]) {
            maiorNumero = precos[i];
        }
    }
    return maiorNumero;
   /*   var max = Math.max(...lista);
        return max; */
}

//console.log(">>>Menor preço: " + obterMenorPreco(precos));
//console.log(">>>Maior preço: " + obterMaiorPreco(precos));

var nomes = ["tiago", "Alexandre", "kamillA"];
var nomesCapitalizados = [];

function capitalizarNomes(nomes) {
    for (let i = 0; i < nomes.length; i++) {
        nomesCapitalizados.push(nomes[i][0].toUpperCase() + nomes[i].substring(1).toLowerCase());
    }
    console.log(nomesCapitalizados);
}

//capitalizarNomes(nomes);

var descontos = [0.15, 0.30];
var valorDaCompra = 100;

function obterDescontoCategoria(categoria, valorDaCompra, desconto) {
    if (categoria == 'infantil') {
        valorDaCompra -= valorDaCompra * (descontos[0] + desconto);
    }
    if (categoria == 'alimentação') {
        valorDaCompra -= valorDaCompra * (descontos[1] + desconto);
    }
    if (categoria != 'alimentação' && categoria != 'infantil') {
        valorDaCompra -= valorDaCompra *  desconto;
    }
    
    console.log(`categorias: ${categoria}\nvalor da compra: ${valorDaCompra}`);
    console.log();
}

//obterDescontoCategoria("alimentação", 100);
var precos = [5, 7, 9, 50, 20];
var produtosDentroDoOrcamento = [];
var orcamento = 9;

function obterPrecosLimitadosAoOrcamento(orcamento, precos) {
    for (let i = 0; i < precos.length; i++) {
        if (precos[i] <= orcamento) {
            produtosDentroDoOrcamento.push(precos[i]);
        }
    }
    console.log(produtosDentroDoOrcamento);
}

//obterPrecosLimitadosAoOrcamento(orcamento, precos);

var valorDoProduto = [10, 30, 5, 15];
var total = 0;

function calcularTotalDaCompra(valorDoProduto) {
    for (let i = 0; i < valorDoProduto.length; i++) {   
        total += valorDoProduto[i];
    }
    console.log(total);
}

//calcularTotalDaCompra(valorDoProduto);

var precos = [10, 7, 8, 25, 8, 9, 100, 99];

function obterMenorEMaiorPrecos(preco) {
    var menorPreco = preco[0];
    var maiorPreco = preco[0];

    for (let i = 0; i < preco.length; i ++) {
        if (preco[i] >= maiorPreco) {
            maiorPreco = preco[i];
        }
        if (preco[i] <= menorPreco) {
            menorPreco = preco[i];
        }
    }
    console.log(">>>Maior Preço: " + maiorPreco);
    console.log(">>>Menor Preço: " + menorPreco);
}

//obterMenorEMaiorPrecos(precos);

var precosDosProdutos = [10, 7, 8, 25, 8, 9, 100, 99];
var valorDeOrcamentoInferior = 9;
var valorDeOrcamentoSuperior = 30;

function obterPrecosDentroDoOrcamento(precos, valorDeOrcamentoInferior, valorDeOrcamentoSuperior) {
    var precosDentroDoOrcamento = [];
    for (let i = 0; i < precos.length; i++) {
        if (precos[i] >= valorDeOrcamentoInferior && precos[i] <= valorDeOrcamentoSuperior) {
            precosDentroDoOrcamento.push(precos[i]);
        }
    }
    console.log(precosDentroDoOrcamento);
}

//obterPrecosDentroDoOrcamento(precos, valorDeOrcamentoInferior, valorDeOrcamentoSuperior);


//var categorias = ["infantil", "alimentação"];
//var valorDaCompra = 100;

function  obterDescontoTotal(categoria, cupom) {
    var desconto = 0.0;

    if (cupom != 'CUPOM-INVALIDO') {
        desconto += 0.10;
    }
    obterDescontoCategoria(categoria, valorDaCompra, desconto);
}

obterDescontoTotal('alimentação', 'NULABSSA');         // => 40
obterDescontoTotal('alimentação', 'ALURANU');          // => 40
obterDescontoTotal('infantil', 'ALURANU');             // => 25
obterDescontoTotal('bebida', 'ALURANU');               // => 10
obterDescontoTotal('bebida', 'CUPOM-INVALIDO');        // => 0
obterDescontoTotal('alimentação', 'CUPOM-INVALIDO');   // => 30
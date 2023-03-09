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
}
//console.log(">>>Menor preço: " + obterMenorPreco(precos));
//console.log(">>>Maior preço: " + obterMaiorPreco(precos));

var nomes = ["tiago", "Alexandre", "kamillA"];


function capitalizarNomes(nomes) {
    let nomesCapitalizados = [];

    for (let i = 0; i < nomes.length; i++) {
        nomesCapitalizados.push(nomes[i].charAt(0).toUpperCase() + nomes[i].substring(1).toLowerCase());
    }
    return nomesCapitalizados;
}
//console.log(capitalizarNomes(nomes));

var descontos = [0.15, 0.30];
//var valorDaCompra = 100;

function obterDescontoCategoria(categoria) {
    var categoriaCapitalizada = capitalizarNomes([categoria])[0];

    if (categoriaCapitalizada == "Infantil") {
        return 15;
    }
    else if (categoriaCapitalizada == "Alimentação") {
        return 30;
    }
    else {
        return 0;
    }
}
/* console.log( obterDescontoCategoria("infantil"));
console.log( obterDescontoCategoria("Alimentação"));
console.log( obterDescontoCategoria("A")); */

function obterPrecosLimitadosAoOrcamento(orcamento, precos) {
    let precosDentroDoOrcamento = [];

    for (let i = 0; i < precos.length; i++) {
        if (precos[i] <= orcamento) {
            precosDentroDoOrcamento.push(precos[i]);
        }
    }
    return precosDentroDoOrcamento;
}
var precos = [5, 7, 9, 50, 20];
var orcamento = 9;
//console.log(obterPrecosLimitadosAoOrcamento(orcamento, precos));

function calcularTotalDaCompra(valorDoProduto) {
    let total = 0;

    for (let i = 0; i < valorDoProduto.length; i++) {   
        total += valorDoProduto[i];
    }
    return total;
}
var valorDoProduto = [10, 30, 5, 15];
//console.log(calcularTotalDaCompra(valorDoProduto));

var precos = [10, 7, 8, 25, 8, 9, 100, 99];

function obterMenorEMaiorPrecos(preco) {
    var menorPreco = obterMenorPreco(preco);
    var maiorPreco = obterMaiorPreco(preco);

    return [menorPreco, maiorPreco];
}
//console.log(obterMenorEMaiorPrecos(precos));

function obterPrecosDentroDoOrcamento(precos, valorDeOrcamentoInferior, valorDeOrcamentoSuperior) {
    if (valorDeOrcamentoInferior <= valorDeOrcamentoSuperior) {
        let precosDentroDoOrcamento = [];

        for (let i = 0; i < precos.length; i++) {
            if (precos[i] >= valorDeOrcamentoInferior && precos[i] <= valorDeOrcamentoSuperior) {
                precosDentroDoOrcamento.push(precos[i]);
            }
        }
        return precosDentroDoOrcamento;
    }
    else {
        undefined;
    }
}
var precosDosProdutos = [10, 7, 8, 25, 8, 9, 100, 99];
var valorDeOrcamentoInferior = 9;
var valorDeOrcamentoSuperior = 30;
//console.log(obterPrecosDentroDoOrcamento(precos, valorDeOrcamentoInferior, valorDeOrcamentoSuperior));

function  obterDescontoTotal(categoria, cupom) {
    let descontoTotal = 0;

    if (cupom.toUpperCase() != "CUPOM-INVALIDO") {
        descontoTotal += 10;
    }
    descontoTotal += obterDescontoCategoria(categoria);

    return descontoTotal;
}
console.log(obterDescontoTotal('alimentação', 'ALURANU'));          // => 40
console.log(obterDescontoTotal('infantil', 'ALURANU'));             // => 25
console.log(obterDescontoTotal('bebida', 'ALURANU'));               // => 10
console.log(obterDescontoTotal('bebida', 'CUPOM-INVALIDO'));        // => 0
console.log(obterDescontoTotal('alimentação', 'CUPOM-INVALIDO'));   // => 30 */

var categoriaDosProdutos = ['Infantil', 'Bebida', 'Alimentação', 'Bebida'];
var valorDosProdutos = [50, 25, 30, 22];

function calcularTotalDaCompraComDescontos(precos, categorias, cupom) {
    let valorTotalDaCompra = 0;
    
    for (let i = 0; i < categorias.length; i++) {
        let descontoTotal = obterDescontoTotal(categorias[i], cupom);
        
        valorTotalDaCompra += precos[i] - (precos[i] * (descontoTotal / 100));
    }
    return valorTotalDaCompra;
}

//console.log(calcularTotalDaCompraComDescontos(valorDosProdutos, categoriaDosProdutos, "ALURANU"));

var nomeCompleto = "tiago lage payne de pádua";

function capitalizarNomeCompleto(nome) {
    let nomeSeparado = nome.split(" ");
    let nomeCompletoCapitalizado = "";

    for (let i = 0; i < nomeSeparado.length; i++) {
        if (nomeSeparado[i].length >= 3) {
            nomeCompletoCapitalizado += capitalizarNomes([nomeSeparado[i]]) + " ";
        }
        else {
            nomeCompletoCapitalizado += nomeSeparado[i] + " ";
        }
    }
    return nomeCompletoCapitalizado.trim();
}
//console.log(capitalizarNomeCompleto(nomeCompleto));

function gerarCupomFiscal(produtos, precos, categorias, cupom) {
    var subtotal = 0;
    var cupomDesconto = 0;

    console.log("Nome                Valor                 Desconto            Total");
    for (let i =0; i < produtos.length; i++) {
        var desconto = precos[i] * (obterDescontoCategoria(categorias[i]) / 100);
        var valorPago = precos[i] - desconto;
        subtotal += valorPago;
        cupomDesconto += desconto;

        console.log(`${produtos[i]}:        R$ ${precos[i].toFixed(2).replace(".", ",")}                ${desconto.toFixed(2).replace(".", ",")}            R$ ${valorPago.toFixed(2).replace(".", ",")}`);
    }
     

    console.log(`Subtotal:                                                  R$ ${subtotal.toFixed(2).replace(".", ",")}`);
    console.log(`Cupom de Desconto: ${cupom}                                R$ ${cupomDesconto.toFixed(2).replace(".", ",")}`);
    console.log(`Total                                                      R$ ${calcularTotalDaCompraComDescontos(precos, categorias, cupom).toFixed(2).replace(".", ",")}`);
}
gerarCupomFiscal(['Serpentina', 'Refrigerante'], [20, 7], ['Infantil', 'Bebida'], 'NULABSSA');

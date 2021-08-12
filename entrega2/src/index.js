const listaProdutos = require('./data/data')

function convertToCurrency(value){
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value)
}

console.log("01.")
const itensEmEstoque = listaProdutos.reduce((accumulator, currentValue) => accumulator + currentValue.qtdEstoque, 0);
console.log(`Quantidade de itens em estoque: ${itensEmEstoque};`);
// Item 2
console.log("02.")
let totalEmDestaque = listaProdutos.filter(value => value.emDestaque === "sim");
let estoqueDestaque = totalEmDestaque.map(value => value.qtdEstoque);
let dest = 0;
for(let i = 0; i < estoqueDestaque.length; i++) {
    dest += estoqueDestaque[i];
}
console.log(`Objetos com valor "sim" para a chave "emDestaque": ${totalEmDestaque.length};
Quantidade total de itens em estoque que estão em destaque: ${dest} `);


// Item 3
console.log("03.")
let totalDisponivel = listaProdutos.filter(value => value.disponivel === "sim");

console.log(`Objetos com valor "sim" para a chave "disponivel": ${totalDisponivel.length};
Quantidade total de itens em estoque que estão em disponiveis: ${itensEmEstoque} `);
// Item 4
console.log("04.")
let itensDisponiveisEEmDestaque = 0;
for(const item of listaProdutos){
    if(item.disponivel === "sim" && item.emDestaque === "sim") {
        itensDisponiveisEEmDestaque += item.qtdEstoque
    }
}
// console.log(`Quantidade de itens disponiveis e em destaque: ${totalEmDestaque.length}.`);

console.log(`Objetos com valor "sim" para as chaves "emDestaque" e "disponivel": ${totalEmDestaque.length};
Quantidade total de itens em estoque que estão em destaque: ${itensDisponiveisEEmDestaque} `);


// Item 5
console.log("05.")
let emEstoque = listaProdutos.filter(value => value.qtdEstoque > 0);
const precoEstoque = emEstoque.map(value => value.preco * value.qtdEstoque);
    
var inventario = 0;
    
for (var i = 0; i < precoEstoque.length; i++){
    inventario += precoEstoque[i];
};

console.log(`Valor total do inventário da empresa:  ${convertToCurrency(inventario)}.`);
    

// Item 6  
console.log("06.")

let deptoItemMaisCaro;
let prodMaisCaro;
let valorItemMaisCaro = 0;

for(const prod of listaProdutos) {
    if(prod.preco > valorItemMaisCaro) {
        deptoItemMaisCaro = prod.departamento.nomeDepto;
        prodMaisCaro = prod.descricao;
        valorItemMaisCaro = prod.preco;
    }
}
console.log(`Pertencente ao departamento de ${deptoItemMaisCaro}, com preço de ${convertToCurrency(valorItemMaisCaro)},
o produto mais caro da loja é:
${prodMaisCaro}.`)

// Item 7
console.log("07.")

let deptoItemMaisBarato;
let prodMaisBarato;
let valorItemMaisBarato = valorItemMaisCaro;

for(const prod of listaProdutos) {
    if(prod.preco < valorItemMaisBarato) {
        deptoItemMaisBarato = prod.departamento.nomeDepto;
        prodMaisBarato = prod.descricao;
        valorItemMaisBarato = prod.preco;
    }
}

console.log(`Pertencente ao departamento de ${deptoItemMaisBarato}, com preço de ${convertToCurrency(valorItemMaisBarato)},
o produto mais barato da loja é: ${prodMaisBarato}.`)



// Item 8
console.log("08.")

var maisValioso = 0

function produtoMaisValioso(){

listaProdutos.forEach((item) =>{
    if (item.qtdEstoque > 0){
        if (item.preco * item.qtdEstoque > maisValioso){
            maisValioso = item.preco * item.qtdEstoque
            lista = item
        }
    }
})

return console.log(`O item mais valioso é o ${lista.descricao} no valor total de ${convertToCurrency(maisValioso)}`);
}
produtoMaisValioso();


// Item 9
console.log("09.")

function produtoMenosValioso(menosValioso){
menosValioso = maisValioso;

listaProdutos.forEach((item) =>{
    if (item.qtdEstoque > 0){
        if (item.preco * item.qtdEstoque < menosValioso){
            menosValioso = item.preco * item.qtdEstoque
            lista = item
        }
    }
})

return console.log(`O item menos valioso é o ${lista.descricao} no valor total de ${convertToCurrency(menosValioso)}`);
}
produtoMenosValioso();

// Item 10
console.log("10.")

let numeroTotalItens = listaProdutos.length;
const ticketMedio = inventario / numeroTotalItens;
console.log(`O valor do ticket médio é: ${convertToCurrency(ticketMedio)}`)


// Item 11
const removeDuplicates = (data, key) => [...new Map(data.map(item => [key(item), item])).values()];
console.log("11. Somatória de itens por departamento");


const sumPerDept = (deptId) => listaProdutos.filter((produto) => produto.departamento.idDepto === deptId)
.reduce((acumulator, currentValue) => acumulator + currentValue.qtdEstoque, 0);

const listQtdPerDept = [];
listaProdutos.map((produto) => {  
  listQtdPerDept.push({
    id: produto.departamento.idDepto,
    name: produto.departamento.nomeDepto,
    qtdEstoque: sumPerDept(produto.departamento.idDepto)
  })
});

console.log(removeDuplicates(listQtdPerDept, item => item.id));


// Item 12
console.log("12. Valor total do inventário por departamento (similar ao item anterior");

const sumPerPrice = (deptId) => listaProdutos.filter((produto) => produto.departamento.idDepto === deptId)
.reduce((acumulator, currentValue) => acumulator + currentValue.preco, 0);

const listQtdPerPrice = [];
listaProdutos.map((produto) => {  
  listQtdPerPrice.push({
    id: produto.departamento.idDepto,
    name: produto.departamento.nomeDepto,
    valor_inventario: sumPerPrice(produto.departamento.idDepto)
  })
});

console.log(removeDuplicates(listQtdPerPrice, item => item.id));


// Item 13
console.log("13. Ticket médio por departamento");

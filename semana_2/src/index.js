const listaProdutos = require('./data/data')

function convertToCurrency(value){
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value)
}
console.log("ENTREGAS DA PRIMEIRA SEMANA (exercícios: do 1 ao 10)")
console.log("                             ")
console.log("                             ")

console.log("01.")
const itensEmEstoque = listaProdutos.reduce((accumulator, currentValue) => accumulator + currentValue.qtdEstoque, 0);
console.log(`Quantidade de itens em estoque: ${itensEmEstoque};`);
// Item 2
console.log("02.")
let totalEmDestaque = listaProdutos.filter(value => value.emDestaque === "sim");
let dest = totalEmDestaque.reduce((sumOfParts, currentValue) => sumOfParts + currentValue.qtdEstoque, 0)

console.log(`Objetos com valor "sim" para a chave "emDestaque": ${totalEmDestaque.length};
Quantidade total de itens em estoque que estão em destaque: ${dest} `);

// Item 3
console.log("03.")
let totalDisponivel = listaProdutos.filter(value => value.disponivel === "sim");

console.log(`Objetos com valor "sim" para a chave "disponivel": ${totalDisponivel.length};
Quantidade total de itens em estoque que estão em "disponiveis": ${itensEmEstoque} `);
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
// || dest = itensDisponiveisEEmDestaque


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

console.log("                             ")
console.log("                             ")

console.log("ENTREGAS DA SEGUNDA SEMANA(exercícios: do 11 ao 15)")
console.log("                             ")
console.log("                             ")



console.log(`11.
Somatória de itens por departamento:`)

let deps = {}

for (const prod of listaProdutos) {
    if (deps[prod.departamento.nomeDepto] == undefined){
        deps[prod.departamento.nomeDepto] = prod.qtdEstoque
    } else {
        deps[prod.departamento.nomeDepto] += prod.qtdEstoque

    }

    // console.log(prod)
    
}
for (const departament in deps) {
   console.log(departament, deps[departament])
}


console.log(`12.
Valor total do inventário por departamento:`)

let invt = {}


for (const prod of listaProdutos) {
    if (invt[prod.departamento.nomeDepto] == undefined){
    invt[prod.departamento.nomeDepto] = prod.qtdEstoque * prod.preco
    } else {
        invt[prod.departamento.nomeDepto] += prod.qtdEstoque * prod.preco

    }

    
}
for (const departament in invt) {
   console.log(departament, convertToCurrency(invt[departament]))
}


console.log(`13.
Ticket médio por departamento: `)

let ticketDep = {}
let prods = {}


for (const prod of listaProdutos) {

    if (prods[prod.departamento.nomeDepto] == undefined) {
        prods[prod.departamento.nomeDepto] = 1
    } else {
        prods[prod.departamento.nomeDepto] + 1

    }
}
for (const departament in prods) { 
    console.log(departament, convertToCurrency((invt[departament] / prods[departament])))
}

console.log("14.")

let depValis = ""

for (const departament in invt) {
    if (!invt[depValis] || invt[depValis] < invt[departament]) {
        depValis = departament
    }
 }

 console.log("Departamento mais valioso é o de " + depValis)


 console.log("15.")


let depDisvalis = ""

for (const departament in invt) {
    if (!invt[depDisvalis] || invt[depDisvalis] > invt[departament]) {
        depDisvalis = departament
    }
 }

 console.log("Departamento menos valioso é o de " + depDisvalis)



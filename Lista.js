// Antigamente

// Novo
let lista = [];
console.log(lista);

// Adicionando um item
lista.push('Carvão');
lista.push('Carne');
lista.push('Cerveja sem alcool');
lista.push(10)
console.log(lista);


// Que todo array começa com zero;
console.log(lista[0]);

// O pop sempre remove o ultimo item da lista
console.log(lista.pop())

// Remover item em posição especifica
// 1º Parametro - Começa
// 2º Parametro - Deletar itens
// 3º Parametro - adiciona itens
console.log(lista.splice(0,1));

// Adicionar item em posição especifica
console.log(lista.splice(0,0,'elemento'));


// Filtrando informações
console.log('Utilizando Filter');
console.log(lista.filter(e => e === 'Carne'))

// Buscando Informação com Find
console.log('Utilizado Find');
console.log(lista.find(v => v === 'Carne'));

// Verificar tamanho da lista
console.log('Tamanho da lista');
console.log(lista.length)

console.log(lista);


let numeros = [1,2,3,4,5,6,7,8,9,10];
const resultado = numeros.map(Math.sqrt)
console.log('Utilizando Raiz Quadrada')
console.log(resultado)
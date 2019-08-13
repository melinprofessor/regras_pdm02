// Repetir
const abc = 'abc';
console.log(abc.repeat(2))

// Replace
let frase = 'Hoje o dia está bonito!';
console.log('Utilizando Replace');
console.log(frase
    .replace('dia', 'noite')
    .replace('bonito', 'bonita')
    .replace(' o ',' a '));

// Caracter no final da frase
console.log('Utilizando endsWith')
console.log(frase.endsWith('o!'))

// Caracter no inicio da frase
console.log('Utilizando startsWith')
console.log(frase.startsWith('o!'))

// Convertendo para minusculo
let fraseM = 'HOJE O DIA ESTA BONITO';
console.log('Utilizando toLowerCase')
console.log(fraseM.toLowerCase())

// Convertendo para maiusculo
console.log('Utilizando toUpperCase')
console.log(frase.toUpperCase())

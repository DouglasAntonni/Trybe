/*let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}*/

/*let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let letters of names) {
    letters;
    console.log('olá,' + ' ' +letters);
}*/

//exercise.js
/*let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);
console.log('------------------------------------------------------------');

let array = [1, 24, 56, 30, 32, 120]
for (let valor of array) {
  console.log(valor);
}

let pessoa = {nome: "João", idade: 25, profissao: "Programador"};

for (let propriedade in pessoa) {
  console.log(propriedade + ": " + pessoa[propriedade]);
}

let contador = [189, 254, 156, 1830, 3122, 1370]
for(let index = 0; index < contador.length; index += 1){
  
  console.log(contador[index])
}*/

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let name in names) {
  console.log('olá,', names[name]);
 }
 console.log('-------------------------------------------------------------------');

 let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for(let classes in car){
  console.log(classes + ':', car[classes]);
}

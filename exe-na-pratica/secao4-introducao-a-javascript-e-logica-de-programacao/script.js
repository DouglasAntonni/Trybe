let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}


let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);


let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);


let resulte = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resulte += numbers[index];
}

resulte = result / numbers.length;

if (resulte > 20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
}


// O valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso o valor 101 fosse atribuído à variável, o algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema, inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar com index = 1.

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

let Player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
    

}

Player.bestInTheWorld = ["2006", "2007", "2008", "2009", "2010", "2018"];


console.log('A jogadora ' + Player['name'] + ' ' + 'possui 5 medalhas olimpicas' +' '+ 'sendo'  + ' '+ Player.medals['golden'] +' '+ 'de ouro' + 'e' +' '+ Player.medals['silver'] +' '+ 'de prata');
console.log('A jogadora ' + Player['name'] + ' ' + Player['lastName'] + ' foi eleita a melhor do mundo por ' + Player['bestInTheWorld'].length + ' vezes.');
console.log('_____________________________________________________________________');

let Human = {
    name: 'Douglas Antonni',
    age: 37,
    ocuppation: 'FrontEnd Dev Jr',
    Academic: ['Tec. A.D.S.', 'Trybe FullStack Web Developer'],
    hobbie: 'Bateria'
}
Human.film = 'Lord of The Rings'
Human.series = 'Game of Thrones'
Human.music = ['Rock/Metal','alternative Things']
Human.State = 'Pernambuco'
console.log(Human.name, 'tenho', Human['age'], 'concluiu o ensino tecnico em Analise e Desenvolvimento de Sistemas, o famoso', Human.Academic[0], ' e é um estudante na Trybe de', Human.Academic[1], 'natural de', Human['State'], 'tenho uma paixão por', Human['hobbie'], 'e', Human.music[0], 'onde seus filme e série favoritaas são', Human['film'], 'e', Human['series'], 'que almeja imensamente uma vage de pelo menos', Human['ocuppation'], 'pra mudar de vida!')
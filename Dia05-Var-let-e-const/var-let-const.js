/*function userInfo() {
    let userEmail = 'maria@email.com';
    console.log(userEmail);
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    if (true) {
        // inicio do escopo do if
        var userAge = '20';
        console.log(userAge); // 20
        // fim do escopo do if
      }
      console.log(userAge); // 20
    
  }
  userInfo();*/

//var userName = 'Isabella';
//var userName = 'Lucas';
//console.log(userName); // Resultado: Lucas

/*const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition*/
const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }
  
  const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro
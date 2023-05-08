let order = {
    name: 'Douglas Antonni',
    phoneNumber: '81-9.8303-9364',
    address: {
      street: 'Rua Setenta e Oito',
      number: '499',
      apartment: 'SN',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Anylsk Gleycy',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Adicione abaixo as informações necessárias.
    return 'Olá,'+' ' + order.order.delivery.deliveryPerson + ', entrega para: '+ order.name +', Telefone:' + order.phoneNumber +', R.' + order.address.street + ', Nº:' + order.address.number + ', AP:' + order.address.apartment

    
  }
  
  console.log(customerInfo(order)); 
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    let newBuyer = order.name = 'Luna Lima'; // Altere o nome da pessoa compradora
    let newTotal = order.payment.total = '50'; // Altere o valor total da compra
    let pizzas = Object.keys(order.order.pizza); // Recupere as chaves que estão em `order.order.pizza`
    let drink = order.order.drinks.coke.type;
        return 'Olá, ' + newBuyer + ', o valor total de seu pedido de '  + pizzas[0] + ', ' + pizzas[1] + ' e ' + drink + ' é de ' + 'R$ ' + newTotal +',00 reais.'
    }
    
console.log(orderModifier(order));
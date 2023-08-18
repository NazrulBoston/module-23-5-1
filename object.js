const person = {
    name: 'sakib khan',
    id: 121,
    friends: ['aminul', 'bilal', 'salman', 'noman',],
    isSingle: true,
    act: function () {
        console.log('Acting like sakib khan')
    },
    address: 'dhaka',
    car: {
        brand: 'tesla',
        price: 60000,
        made: 2024,
        manufacture: {
            brand: 'tesla',
            price: 500000, 
            ceo : 'elon mask',
            sale: [2,3,5,6,7,8, { class:10 , vip: 'yes'}, {class: 11, vip: 'no'}]

        }
    },
    movies: [{ name: 'no 1', year: 2015, }, { name: 'don', year: 2022 }, { name: 'race', year: 2010 }],


}

// console.log(person.car.manufacture.sale);

// console.log(person.act);
// person.act()


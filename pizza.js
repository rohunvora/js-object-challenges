const menu = {
cheese: {
  toppings: ['bread', 'cheese', 'sauce'],
  price: 10
},
pepperoni: {
  toppings: ['bread', 'cheese', 'sauce', 'pepperoni'],
  price: 10
},
meat: {
  toppings: ['bread', 'cheese', 'sauce', 'ham'],
  price: 10
},
pineapple: {
  toppings: ['bread', 'cheese', 'sauce', 'pineapple'],
  price: 10
},
tomatoBasil: {
  toppings: ['bread', 'cheese', 'sauce','tomato','basil'],
  price: 10
}

}

console.log(Object.keys(menu))
console.log(menu.hasOwnProperty('banana'))

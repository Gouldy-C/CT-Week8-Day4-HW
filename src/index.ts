import Item from "./classes/Item"
import User from "./classes/User"


const user = new User('christian', 29)

const pear = new Item('pear', 1.99, 'asian pear') //Item A
const banana = new Item('banana', 0.25, 'yellow banana')//Item B
const cake = new Item('cake', 15.99, 'the cake is a lie')//Item C

user.addToCart(user,pear,1)
user.printCart(user)
user.cartTotal(user)

console.log('');

user.addToCart(user,banana,3)
user.printCart(user)
user.cartTotal(user)

console.log('');

user.addToCart(user,cake,3)
user.printCart(user)
user.cartTotal(user)

console.log('');

user.removeFromCart(user,banana)
user.printCart(user)
user.cartTotal(user)

console.log('');

user.removeQuantityFromCart(user,cake,2)
user.printCart(user)
user.cartTotal(user)
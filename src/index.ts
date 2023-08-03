import Item from "./classes/Item"
import User from "./classes/User"


const user = new User('christian', 29)

const pear = new Item('pear', 1.99, 'asian pear') //Item A
const banana = new Item('banana', 0.25, 'yellow banana')//Item B
const cake = new Item('cake', 15.99, 'the cake is a lie')//Item C

user.addToCart(pear,1)
user.printCart()
user.cartTotal()

console.log('');

user.addToCart(banana,3)
user.printCart()
user.cartTotal()

console.log('');

user.addToCart(cake,3)
user.printCart()
user.cartTotal()

console.log('');

user.removeFromCart(banana)
user.printCart()
user.cartTotal()

console.log('');

user.removeQuantityFromCart(cake,2)
user.printCart()
user.cartTotal()
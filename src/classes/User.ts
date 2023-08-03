import { v4 as uuidv4 } from 'uuid'

import Item from './Item'


export default class User {
  public readonly id: string = uuidv4()
  constructor(
    public name: string,
    public age: number,
    public cart: Item[] = []){
      this.name = name,
      this.age = age,
      this.cart = cart
    }
  
  displayUser(): void{
    console.log(this.name, this.age, this.cart, this.id)
  }
  
  addToCart(user: User, item: Item, qty: number): void{
    for (let i = 0; i < qty; i++){
      user.cart.push(item)
    }
  }
  
  removeFromCart(user: User, item: Item): void{
    for (let i = 0; i < user.cart.length; i++){
      if (user.cart[i].id === item.id){
        user.cart.splice(i, 1)
        i--
      }
    }
  }
  
  removeQuantityFromCart(user: User, item: Item, qty:number): void{
    let count = 0
    for (let x = 0; x < user.cart.length; x++){
      if (count === qty) {break}
      if (user.cart[x].id === item.id){
        user.cart.splice(x, 1)
        x--
        count++
      }
    }
  }
  
  cartTotal(user: User): number{
    let res = 0
    for (const item of user.cart) {
      res += item.price
    }
    return res
  }
  
  printCart(user: User): void{
    for (const item of user.cart) {
      console.log(item.name);
    }
  }
}

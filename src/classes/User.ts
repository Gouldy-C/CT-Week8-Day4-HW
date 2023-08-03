import { v4 as uuidv4 } from 'uuid'

import Item from './Item'


export default class User {
  public get cart(): Item[] {
    return this._cart
  }
  public set cart(value: Item[]) {
    this._cart = value
  }
  public get age(): number {
    return this._age
  }
  public set age(value: number) {
    this._age = value
  }
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
  public readonly id: string = uuidv4()
  constructor(
    private _name: string,
    private _age: number,
    private _cart: Item[] = []){
      this._name = _name,
      this._age = _age,
      this._cart = _cart
    }
  
  displayUser(): void{
    console.log(this.name, this.age, this.cart, this.id)
  }
  
  addToCart(item: Item, qty: number): void{
    for (let i = 0; i < qty; i++){
      this.cart.push(item)
    }
  }
  
  removeFromCart(item: Item): void{
    for (let i = 0; i < this.cart.length; i++){
      if (this.cart[i].id === item.id){
        this.cart.splice(i, 1)
        i--
      }
    }
  }
  
  removeQuantityFromCart(item: Item, qty:number): void{
    let count = 0
    for (let x = 0; x < this.cart.length; x++){
      if (count === qty) {break}
      if (this.cart[x].id === item.id){
        this.cart.splice(x, 1)
        x--
        count++
      }
    }
  }
  
  cartTotal(): number{
    let res = 0
    for (const item of this.cart) {
      res += item.price
    }
    return res
  }
  
  printCart(): void{
    for (const item of this.cart) {
      console.log(item.name);
    }
  }
}

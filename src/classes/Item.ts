import { v4 as uuidv4 } from 'uuid'
export default class Item {
  public readonly id: string = uuidv4()
  
  public get description(): string {
    return this._description
  }
  public set description(value: string) {
    this._description = value
  }
  public get price(): number {
    return this._price
  }
  public set price(value: number) {
    this._price = value
  }
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
  constructor(
    private _name: string,
    private _price: number,
    private _description: string){
      this._name = _name,
      this._price = _price,
      this._description = _description
    }
}

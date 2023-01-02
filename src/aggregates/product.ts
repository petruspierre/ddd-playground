export default class Product {
  private _id: string
  private _name: string
  private _price: number

  constructor(id: string, name: string, price: number) {
    this._id = id
    this._name = name
    this._price = price

    this.validate()
  }

  get name() {
    return this._name
  }

  get price() {
    return this._price
  }

  validate() {
    if (this._id === '') {
      throw new Error('Product id cannot be empty')
    }

    if (this._name === '') {
      throw new Error('Product name cannot be empty')
    }

    if (this._price < 0) {
      throw new Error('Price must be greater than zero')
    }

    return true
  }

  changeName(name: string): void {
    this._name = name
    this.validate()
  }

  changePrice(price: number): void {
    this._price = price
    this.validate()
  }
}

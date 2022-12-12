import OrderItem from '../entity/order_item'

export default class Order {
  private _id: string
  private _customerId: string
  private _items: OrderItem[] = []
  private _total: number

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id
    this._customerId = customerId
    this._items = items
    this._total = this.total()

    this.validate()
  }

  validate() {
    if (!this._id) {
      throw new Error('Order id cannot be empty')
    }

    if (!this._customerId) {
      throw new Error('Order customerId cannot be empty')
    }

    if (!this._items || this._items.length === 0) {
      throw new Error('Order should contain at least 1 item')
    }

    return true
  }

  total(): number {
    return this._items.reduce((total, item) => total + item._price, 0)
  }
}

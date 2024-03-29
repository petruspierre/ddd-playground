import OrderItem from './order_item'

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

  get id(): string {
    return this._id
  }

  get customerId(): string {
    return this._customerId
  }

  get items(): OrderItem[] {
    return this._items
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

    if (this._items.some(item => item.quantity <= 0)) {
      throw new Error('Quantity should be greater than 0')
    }

    return true
  }

  total(): number {
    return this._items.reduce((total, item) => total + item.orderItemTotal(), 0)
  }
}

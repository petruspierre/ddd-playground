import OrderItem from '../entity/order_item'

export default class Order {
  _id: string
  _customerId: string
  _items: OrderItem[] = []

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id
    this._customerId = customerId
    this._items = items
  }

  total(): number {
    return this._items.reduce((total, item) => total + item._price, 0)
  }
}

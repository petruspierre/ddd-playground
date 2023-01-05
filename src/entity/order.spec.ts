import OrderItem from '../entity/order_item'
import Order from './order'

describe('Order aggregate unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Order('', '123', [])
    }).toThrowError('Order id cannot be empty')
  })

  it('should throw error when customerId is empty', () => {
    expect(() => {
      new Order('123', '', [])
    }).toThrowError('Order customerId cannot be empty')
  })

  it('should throw error when item array is empty', () => {
    expect(() => {
      new Order('123', '1234', [])
    }).toThrowError('Order should contain at least 1 item')
  })

  it('should calculate total', () => {
    const items = [
      new OrderItem('i1', 'Item 1', 100, 2, 'p1'),
      new OrderItem('i2', 'Item 2', 50, 2, 'p2'),
    ]
    const order = new Order('o1', 'c1', items)

    const total = order.total()

    expect(total).toBe(300)
  })

  it('should throw error if the item quantity is lower or equal to 0', () => {
    const items = [
      new OrderItem('i1', 'Item 1', 100, -1, 'p1'),
      new OrderItem('i2', 'Item 2', 50, 2, 'p2'),
    ]

    expect(() => {
      new Order('o1', 'c1', items)
    }).toThrowError('Quantity should be greater than 0')
  })
})

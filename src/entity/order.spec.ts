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
      new OrderItem('i1', 'Item 1', 100),
      new OrderItem('i2', 'Item 2', 50),
    ]
    const order = new Order('o1', 'c1', items)

    const total = order.total()

    expect(total).toBe(150)
  })
})

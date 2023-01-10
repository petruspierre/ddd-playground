import { Customer } from './domain/entity/customer'
import Order from './domain/entity/order'
import OrderItem from './domain/entity/order_item'
import { Address } from './domain/value-objects/address'

const address = new Address('Main St', 123, '12345', 'Anytown')
const customer = new Customer('123', 'Petrus')

customer.activate()
customer.changeAddress(address)

const item1 = new OrderItem('1', 'Item 1', 10, 2, 'p1')
const item2 = new OrderItem('2', 'Item 2', 15, 1, 'p2')

const order = new Order('1', '123', [item1, item2])

import Order from './domain/checkout/entity/order'
import OrderItem from './domain/checkout/entity/order_item'
import { Customer } from './domain/customer/entity/customer'
import { Address } from './domain/customer/value-objects/address'

const address = new Address('Main St', 123, '12345', 'Anytown')
const customer = new Customer('123', 'Petrus')

customer.activate()
customer.changeAddress(address)

const item1 = new OrderItem('1', 'Item 1', 10, 2, 'p1')
const item2 = new OrderItem('2', 'Item 2', 15, 1, 'p2')

const order = new Order('1', '123', [item1, item2])

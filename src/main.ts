import { Customer } from './aggregates/customer'
import Order from './aggregates/order'
import OrderItem from './entity/order_item'
import { Address } from './value-objects/address'

const address = new Address('Main St', 123, '12345', 'Anytown')
const customer = new Customer('123', 'Petrus', address)

customer.activate()

const item1 = new OrderItem('1', 'Item 1', 10)
const item2 = new OrderItem('2', 'Item 2', 15)

const order = new Order('1', '123', [item1, item2])

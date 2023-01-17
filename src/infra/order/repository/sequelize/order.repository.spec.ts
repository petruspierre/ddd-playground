import { Sequelize } from 'sequelize-typescript'

import OrderRepository from './order.repository'
import CustomerModel from '../../../customer/repository/sequelize/customer.model'
import OrderItemModel from './order-item.model'
import OrderModel from './order.model'
import ProductModel from '../../../product/repository/sequelize/product.model'
import CustomerRepository from '../../../customer/repository/sequelize/customer.repository'
import { Customer } from '../../../../domain/customer/entity/customer'
import { Address } from '../../../../domain/customer/value-objects/address'
import ProductRepository from '../../../product/repository/sequelize/product.repository'
import Product from '../../../../domain/product/entity/product'
import Order from '../../../../domain/checkout/entity/order'
import OrderItem from '../../../../domain/checkout/entity/order_item'

describe('Order repository test', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    })

    await sequelize.addModels([
      CustomerModel,
      OrderItemModel,
      OrderModel,
      ProductModel,
    ])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a new order', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('123', 'Customer 1')
    const address = new Address('St 1', 1, 'ZIP', 'City')
    customer.changeAddress(address)
    await customerRepository.create(customer)

    const productRepository = new ProductRepository()
    const product = new Product('123', 'Product 1', 10)
    await productRepository.create(product)

    const orderItem = new OrderItem(
      '1',
      product.name,
      product.price,
      2,
      product.id
    )

    const order = new Order('123', customer.id, [orderItem])

    const orderRepository = new OrderRepository()
    await orderRepository.create(order)

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ['items'],
    })

    expect(orderModel.toJSON()).toStrictEqual({
      id: order.id,
      customer_id: customer.id,
      total: order.total(),
      items: [
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          quantity: orderItem.quantity,
          order_id: order.id,
          product_id: product.id,
        },
      ],
    })
  })

  it('should update an order', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('123', 'Customer 1')
    const address = new Address('St 1', 1, 'ZIP', 'City')
    customer.changeAddress(address)
    await customerRepository.create(customer)

    const productRepository = new ProductRepository()
    const product = new Product('123', 'Product 1', 10)
    await productRepository.create(product)

    const orderItem = new OrderItem(
      '1',
      product.name,
      product.price,
      2,
      product.id
    )
    const order = new Order('123', customer.id, [orderItem])

    const orderRepository = new OrderRepository()
    await orderRepository.create(order)

    const newProduct = new Product('1234', 'Product 2', 20)
    await productRepository.create(newProduct)
    const newOrderItem = new OrderItem(
      '2',
      newProduct.name,
      newProduct.price,
      3,
      newProduct.id
    )

    const newOrder = new Order('123', customer.id, [orderItem, newOrderItem])
    await orderRepository.update(newOrder)

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ['items'],
    })

    expect(orderModel.toJSON()).toStrictEqual({
      id: order.id,
      customer_id: customer.id,
      total: newOrder.total(),
      items: [
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          quantity: orderItem.quantity,
          order_id: order.id,
          product_id: product.id,
        },
        {
          id: newOrderItem.id,
          name: newOrderItem.name,
          price: newOrderItem.price,
          quantity: newOrderItem.quantity,
          order_id: order.id,
          product_id: newProduct.id,
        },
      ],
    })
  })

  it('should find order by id', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('123', 'Customer 1')
    const address = new Address('St 1', 1, 'ZIP', 'City')
    customer.changeAddress(address)
    await customerRepository.create(customer)

    const productRepository = new ProductRepository()
    const product = new Product('123', 'Product 1', 10)
    await productRepository.create(product)

    const orderItem = new OrderItem(
      '1',
      product.name,
      product.price,
      2,
      product.id
    )

    const order = new Order('123', customer.id, [orderItem])
    const orderRepository = new OrderRepository()
    await orderRepository.create(order)

    const foundOrder = await orderRepository.find(order.id)

    expect(foundOrder).toStrictEqual(order)
  })

  it('should find all orders', async () => {
    const customerRepository = new CustomerRepository()
    const customer = new Customer('123', 'Customer 1')
    const address = new Address('St 1', 1, 'ZIP', 'City')
    customer.changeAddress(address)
    await customerRepository.create(customer)

    const productRepository = new ProductRepository()
    const product = new Product('123', 'Product 1', 10)
    await productRepository.create(product)

    const orderItem = new OrderItem(
      '1',
      product.name,
      product.price,
      2,
      product.id
    )

    const order = new Order('123', customer.id, [orderItem])
    const orderRepository = new OrderRepository()
    await orderRepository.create(order)

    const foundOrders = await orderRepository.findAll()

    expect(foundOrders).toStrictEqual([order])
  })

  it('should throw error when order is not found', async () => {
    const orderRepository = new OrderRepository()

    await expect(orderRepository.find('123')).rejects.toThrow('Order not found')
  })
})

import { Address } from '../value-objects/address'
import { Customer } from './customer'

describe('Customer aggregate unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Customer('', 'Petrus')
    }).toThrowError('Customer id cannot be empty')
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      new Customer('123', '')
    }).toThrowError('Customer name cannot be empty')
  })

  it('should change name', () => {
    const customer = new Customer('1', 'Name 1')

    customer.changeName('Name 2')

    expect(customer.name).toBe('Name 2')
  })

  it('should activate customer', () => {
    const customer = new Customer('1', 'Name 1')
    const address = new Address('Street 1', 123, '12345-678', 'City 1')

    customer.changeAddress(address)
    customer.activate()

    expect(customer.isActive()).toBe(true)
  })

  it('should throw error when address is undefined when activating customer', () => {
    const customer = new Customer('1', 'Name 1')

    expect(() => {
      customer.activate()
    }).toThrowError('Customer address cannot be empty')
  })

  it('should deactivate customer', () => {
    const customer = new Customer('1', 'Name 1')
    const address = new Address('Street 1', 123, '12345-678', 'City 1')

    customer.changeAddress(address)
    customer.activate()

    expect(customer.isActive()).toBe(true)

    customer.deactivate()
    expect(customer.isActive()).toBe(false)
  })
})

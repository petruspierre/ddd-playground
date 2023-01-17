import { Address } from '../value-objects/address'
import CustomerFactory from './customer.factory'

describe('Customer factory unit test', () => {
  it('should create a customer', () => {
    const customer = CustomerFactory.create('John')

    expect(customer.id).toBeDefined()
    expect(customer.name).toBe('John')
    expect(customer.Address).toBeUndefined()
  })

  it('should create a customer with an address', () => {
    const address = new Address('street', 123, 'zip', 'city')

    const customer = CustomerFactory.createWithAddress('John', address)

    expect(customer.id).toBeDefined()
    expect(customer.name).toBe('John')
    expect(customer.Address).toBe(address)
  })
})

import { Customer } from './customer'

describe('Customer entity unit tests', () => {
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

  it('should activate and deactivate', () => {
    const customer = new Customer('1', 'Name 1')

    customer.activate()

    expect(customer.isActive()).toBe(true)

    customer.deactivate()

    expect(customer.isActive()).toBe(false)
  })
})

import { Address } from '../value-objects/address'

export class Customer {
  _id: string
  _name: string
  _address!: Address
  _active = false

  get name() {
    return this._name
  }

  constructor(id: string, name: string) {
    this._id = id
    this._name = name

    this.validate()
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error('Customer name cannot be empty')
    }

    if (this._id.length === 0) {
      throw new Error('Customer id cannot be empty')
    }
  }

  changeName(name: string) {
    this._name = name
    this.validate()
  }

  isActive() {
    return this._active
  }

  activate() {
    if (!this._address) {
      throw new Error('Customer address cannot be empty')
    }
    this._active = true
  }

  deactivate() {
    this._active = false
  }

  changeAddress(address: Address) {
    this._address = address
  }
}

export class Customer {
  _id: string
  _name: string
  _address: string
  _active = true

  constructor(id: string, name: string, address: string) {
    this._id = id
    this._name = name
    this._address = address

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
  }

  activate() {
    this._active = true
  }

  deactivate() {
    this._active = false
  }
}

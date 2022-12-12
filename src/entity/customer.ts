export class Customer {
  private _id: string
  private _name: string
  private _active = true

  constructor(id: string, name: string) {
    this._id = id
    this._name = name

    this.validate()
  }

  get name() {
    return this._name
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
    this._active = true
  }

  deactivate() {
    this._active = false
  }
}

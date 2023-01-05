export class Customer {
  _id: string
  _name: string
  _address: string
  _active = true

  constructor(id: string, name: string, address: string) {
    this._id = id
    this._name = name
    this._address = address
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get address(): string {
    return this._address
  }

  get active(): boolean {
    return this._active
  }

  set active(active: boolean) {
    this._active = active
  }
}

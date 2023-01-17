import { Address } from '../value-objects/address'

export class Customer {
  private _id: string
  private _name: string
  private _address!: Address
  private _active = false
  private _rewardPoints = 0

  get name() {
    return this._name
  }

  get id() {
    return this._id
  }

  get rewardPoints() {
    return this._rewardPoints
  }

  get Address() {
    return this._address
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

  addRewardPoints(points: number) {
    this._rewardPoints += points
  }
}

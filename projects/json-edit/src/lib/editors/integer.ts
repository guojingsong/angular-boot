import { NumberEditor } from './number'
import { isInteger } from '../utilities'

export class IntegerEditor extends NumberEditor {
  dependenciesFulfilled: any

  getNumColumns () {
    return 2
  }

  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    return isInteger(this.value) ? parseInt(this.value) : this.value
  }
  value(value: any) {
    throw new Error("Method not implemented.")
  }
}

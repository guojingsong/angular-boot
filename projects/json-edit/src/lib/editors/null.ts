import { AbstractEditor } from '../editor'

export class NullEditor extends AbstractEditor {
  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    return null
  }

  setValue () {
    this.onChange()
  }

  getNumColumns () {
    return 2
  }
}

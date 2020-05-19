/* Non-Active editor for displaying text blocks in form */
import { ButtonEditor } from './button'

export class InfoEditor extends ButtonEditor {
  label: any
  build () {
    this.options.compact = false
    this.header = this.label = this.theme.getFormInputLabel(this.getTitle())
    this.description = this.theme.getDescription(this.schema.description || '')
    this.control = this.theme.getFormControl(this.label, this.description, null)
    this.container.appendChild(this.control)
  }

  getTitle () {
    return this.schema.title
  }

  getNumColumns () {
    return 12
  }
}

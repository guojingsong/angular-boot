import { AbstractEditor } from '../editor'

export class UuidEditor extends AbstractEditor {
  uuid: string
  preBuild () {
    super.preBuild()

    /* Use Schema "default" for setting autogenerated uuid */
    this.schema.default = this.uuid = this.getUuid()

    /* Force pattern validation */
    this.jsoneditor.validator.schema.properties[this.key].pattern = this.schema.pattern = '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$'

    /* Set cleave options if no existing options is present */
    if (!this.schema.options) this.schema.options = {}
    if (!this.schema.options.cleave) {
      this.schema.options.cleave = {
        delimiters: ['-'],
        blocks: [8, 4, 4, 4, 12]
      }
    }

    /* Set field to readonly and hide field, label and description */
    /* this.schema.readonly = this.options.compact = this.options.hidden = true; */
  }

  sanitize (value) {
    if (!this.testUuid(value)) value = this.uuid
    return value
  }

  setValue (value, initial?, fromTemplate?) {
    if (!this.testUuid(value)) value = this.uuid
    this.uuid = value
    //super.setValue(value, initial, fromTemplate)
    super.setValue(value)
  }

  getUuid () {
    /* https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript */
    let d = new Date().getTime()

    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now() /* use high-precision timer if available */
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
  }

  testUuid (value) {
    return (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value))
  }
}

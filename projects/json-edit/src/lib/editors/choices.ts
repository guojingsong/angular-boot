import { SelectEditor } from './select'
import { extend } from '../utilities'
//import rules from './choices.css.js'

declare const window:any;
export class ChoicesEditor extends SelectEditor {
  choices_instance: any
  enum_values: any
  value: any
  is_dirty: boolean
  jsoneditor: any
  input: any
  enum_options: any
  defaults: any
  options: any
  enum_display: any
  always_disabled: any
  static rules: any
  setValue (value, initial) {
    if (this.choices_instance) {
      /* Sanitize value before setting it */
      let sanitized = this.typecast(value || '')

      if (!this.enum_values.includes(sanitized)) sanitized = this.enum_values[0]

      if (this.value === sanitized) return

      if (initial) this.is_dirty = false
      else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

      this.input.value = this.enum_options[this.enum_values.indexOf(sanitized)]

      this.choices_instance.setChoiceByValue(this.input.value)

      this.value = sanitized
      this.onChange()
    } else super.setValue(value, initial)
  }
  typecast(arg0: any): void{
    throw new Error("Method not implemented.")
  }
  onChange() {
    throw new Error("Method not implemented.")
  }

  afterInputReady () {
    if (window.Choices && !this.choices_instance) {
      /* Get options, either global options from "this.defaults.options.choices" or */
      /* single property options from schema "options.choices" */
      const options = this.expandCallbacks('choices', extend({}, this.defaults.options.choices || {}, this.options.choices || {}))

      this.choices_instance = new window.Choices(this.input, options)
    }
    super.afterInputReady()
  }
  expandCallbacks(arg0: string, arg1: any) {
    throw new Error("Method not implemented.")
  }

  onWatchedFieldChange () {
    super.onWatchedFieldChange()
    if (this.choices_instance) {
      const choicesList = this.enum_options.map((v, i) => ({
        value: v,
        label: this.enum_display[i]
      }))
      this.choices_instance.setChoices(choicesList, 'value', 'label', true)
      this.choices_instance.setChoiceByValue(`${this.value}`) /* Set new selection */
    }
  }

  enable () {
    if (!this.always_disabled && this.choices_instance) this.choices_instance.enable()
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.choices_instance) this.choices_instance.disable()
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.choices_instance) {
      this.choices_instance.destroy()
      this.choices_instance = null
    }
    super.destroy()
  }
}
//ChoicesEditor.rules = rules

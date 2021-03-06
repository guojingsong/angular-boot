import { StringEditor } from './string'
import { extend } from '../utilities'
declare const window:any;

export class AutocompleteEditor extends StringEditor {
  autocomplete_wrapper: HTMLDivElement
  autocomplete_dropdown: HTMLUListElement
  autocomplete_instance: any
  postBuild () {
    if (window.Autocomplete) {
      /* create wrapper container */
      this.autocomplete_wrapper = document.createElement('div')

      /* insert wrapper after this.input in the DOM tree */
      this.input.parentNode.insertBefore(this.autocomplete_wrapper, this.input.nextSibling)

      /* move this.input into wrapper */
      this.autocomplete_wrapper.appendChild(this.input)

      /* create dropdown container */
      this.autocomplete_dropdown = document.createElement('ul')

      /* insert dropdown after this.input in the DOM tree */
      this.input.parentNode.insertBefore(this.autocomplete_dropdown, this.input.nextSibling)
    }
    super.postBuild()
  }

  afterInputReady () {
    let options

    if (window.Autocomplete && !this.autocomplete_instance) {
      /* Get options, either global options from "this.defaults.options.autocomplete" or */
      /* single property options from schema "options.autocomplete" */
      options = this.expandCallbacks('autocomplete', extend({}, {
        search: (jseditor, input) => {
          console.log(`No "search" callback defined for autocomplete in property "${jseditor.key}"`)
          return []
        },
        baseClass: 'autocomplete'
      }, this.defaults.options.autocomplete || {}, this.options.autocomplete || {}))

      this.autocomplete_wrapper.classList.add(options.baseClass)
      this.autocomplete_dropdown.classList.add(`${options.baseClass}-result-list`)
      /* this.input.classList.add(options.baseClass + '-input'); */

      this.autocomplete_instance = new window.Autocomplete(this.autocomplete_wrapper, options)
    }
    super.afterInputReady()
  }

  destroy () {
    if (this.autocomplete_instance) {
      if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
      if (this.autocomplete_dropdown && this.autocomplete_dropdown.parentNode) this.autocomplete_dropdown.parentNode.removeChild(this.autocomplete_dropdown)
      if (this.autocomplete_wrapper && this.autocomplete_wrapper.parentNode) this.autocomplete_wrapper.parentNode.removeChild(this.autocomplete_wrapper)
      this.autocomplete_instance = null
    }
    super.destroy()
  }
}

declare const window:any;
export const lodashTemplate = () => {
  if (!window._) return false

  return {
    compile (template) {
      return context => window._.template(template)(context)
    }
  }
}

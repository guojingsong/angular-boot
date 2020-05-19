declare const window:any;
export const underscoreTemplate = () => {
  if (!window._) return false

  return {
    compile (template) {
      return context => window._.template(template)(context)
    }
  }
}

import { defaultTemplate } from './default'
import { ejsTemplate } from './ejs'
import { handlebarsTemplate } from './handlebars'
import { hoganTemplate } from './hogan'
import { lodashTemplate } from './lodash'
import { markupTemplate } from './markup'
import { mustacheTemplate } from './mustache'
import { swigTemplate } from './swig'
import { underscoreTemplate } from './underscore'

export const templates = {
  default: defaultTemplate,
  ejs: ejsTemplate,
  handlebars: handlebarsTemplate,
  hogan: hoganTemplate,
  lodash: lodashTemplate,
  markup: markupTemplate,
  mustache: mustacheTemplate,
  swig: swigTemplate,
  underscore: underscoreTemplate
}

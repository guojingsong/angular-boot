/* Internal helper function called only here so we won't export as part of class */
/* Previously the assignment to the JSONEditor.defaults.editors was done in each of the editor */
/* files but doing it this way removes each of the editors' dependency on JSONEditor */

import { AceEditor as ace } from './ace'
import { ArrayEditor as array } from './array'
import { ArrayChoicesEditor as arrayChoices } from './array/choices'
import { ArraySelect2Editor as arraySelect2 } from './array/select2'
import { ArraySelectizeEditor as arraySelectize } from './array/selectize'
import { AutocompleteEditor as autocomplete } from './autocomplete'
import { Base64Editor as base64 } from './base64'
import { ButtonEditor as button } from './button'
import { CheckboxEditor as checkbox } from './checkbox'
import { ChoicesEditor as choices } from './choices'
import { DatetimeEditor as datetime } from './datetime'
import { DescribedByEditor as describedBy } from './describedby'
import { EnumEditor } from './enum'
import { HiddenEditor as hidden } from './hidden'
import { InfoEditor as info } from './info'
import { IntegerEditor as integer } from './integer'
import { IpEditor as ip } from './ip'
import { JoditEditor as jodit } from './jodit'
import { MultipleEditor as multiple } from './multiple'
import { MultiSelectEditor as multiselect } from './multiselect'
import { NullEditor } from './null'
import { NumberEditor as number } from './number'
import { ObjectEditor as object } from './object'
import { RadioEditor as radio } from './radio'
import { ScEditor as sceditor } from './sceditor'
import { SelectEditor as select } from './select'
import { Select2Editor as select2 } from './select2'
import { SelectizeEditor as selectize } from './selectize'
import { SignatureEditor as signature } from './signature'
import { SimplemdeEditor as simplemde } from './simplemde'
import { StarratingEditor as starrating } from './starrating'
import { StringEditor as string } from './string'
import { TableEditor as table } from './table'
import { UploadEditor as upload } from './upload'
import { UuidEditor as uuid } from './uuid'
import { ColorEditor as colorpicker } from './colorpicker'

export const editors = {
  ace,
  array,
  arrayChoices,
  arraySelect2,
  arraySelectize,
  autocomplete,
  base64,
  button,
  checkbox,
  choices,
  datetime,
  describedBy,
  enum: EnumEditor,
  hidden,
  info,
  integer,
  ip,
  jodit,
  multiple,
  multiselect,
  null: NullEditor,
  number,
  object,
  radio,
  sceditor,
  select,
  select2,
  selectize,
  signature,
  simplemde,
  starrating,
  string,
  table,
  upload,
  uuid,
  colorpicker
}

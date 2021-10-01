import { FormKitSchemaNode, FormKitSchemaComposable } from '@formkit/schema'
import { extend } from '@formkit/utils'

const outer: FormKitSchemaComposable = (schema = {}, children = []) => ({
  if: '$slots.outer',
  then: '$slots.outer',
  else: extend(
    {
      $el: 'div',
      attrs: {
        class: 'outer',
      },
      children,
    },
    schema
  ) as FormKitSchemaNode,
})

export default outer

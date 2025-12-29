import { type SchemaTypeDefinition } from 'sanity'
import { schemas } from '../../../sanity-schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemas as SchemaTypeDefinition[],
}

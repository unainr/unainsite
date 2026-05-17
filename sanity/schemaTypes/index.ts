import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { templates } from './templates'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project,templates],
}

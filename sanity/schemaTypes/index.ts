import { type SchemaTypeDefinition } from 'sanity'
import { article } from './pages/article'
import { seo } from './objects/seo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article],
}

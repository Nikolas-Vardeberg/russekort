import { type SchemaTypeDefinition } from 'sanity'
import { article } from './pages/article'
import { editor } from './objects/editor'
import { quote } from './objects/quote'
import { TransportPage } from './pages/transport-page'
import { tags } from './objects/tags'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, editor, TransportPage, tags],
}

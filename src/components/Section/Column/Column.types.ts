import type { Trait } from "../../../author/Author.types.ts"

export interface ColumnProps {
  header?: string
  description?: string
  items: Trait[]
}

export interface TraitLevel {
  text: string
  value: number
}

export interface Trait {
  text: string
  level: TraitLevel
}

export interface AuthorTypes {
  names: Trait[]
  pronouns: Trait[]
}

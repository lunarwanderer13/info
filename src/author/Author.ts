import type { AuthorTypes, TraitLevel } from "./Author.types.ts"

const TraitLevels: Record<number, TraitLevel> = {
  1: {
    text: "You're asking to be blocked.",
    value: 1,
  },
  2: {
    text: "Not a huge fan",
    value: 2,
  },
  3: {
    text: "Meh",
    value: 3,
  },
  4: {
    text: "Like it",
    value: 4,
  },
  5: {
    text: "Love it",
    value: 5,
  },
}

export const Author: AuthorTypes = {
  names: [
    {
      text: "Mikaela",
      level: TraitLevels[5],
    },
    {
      text: "Luna",
      level: TraitLevels[3],
    },
  ],
  nicknames: [
    {
      text: "Mika",
      level: TraitLevels[5],
    },
    {
      text: "Miki",
      level: TraitLevels[5],
    },
    {
      text: "Miku",
      level: TraitLevels[4],
    },
  ],
  pronouns: [
    {
      text: "She/Her",
      level: TraitLevels[5],
    },
    {
      text: "They/Them",
      level: TraitLevels[3],
    },
    {
      text: "He/Him",
      level: TraitLevels[1],
    },
  ],
}

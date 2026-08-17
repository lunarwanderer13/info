import { Author } from "./author/Author.ts"
import Header from "./components/Header/Header.tsx"
import Section from "./components/Section/Section"
import Column from "./components/Section/Column/Column.tsx"
import WorkInProgress from "./components/Dev/WorkInProgress/WorkInProgress.tsx"

function App() {
  return (
    <main className="h-screen bg-purple-950 flex items-center justify-center">
      <div
        className="
          w-full h-full
          md:w-3/4 md:h-3/4
          md:max-w-200 md:max-h-200
          md:rounded-2xl
          bg-zinc-700
          overflow-x-hidden overflow-y-auto
        "
      >
        <Header />

        <Section
          header="Basic Info"
          description="Some basic info about me for when we're just getting to know each other."
        >
          <Column header="Names" description="" items={Author.names} />
          <Column header="Nicknames" description="" items={Author.nicknames} />
          <Column header="Pronouns" description="" items={Author.pronouns} />
        </Section>
      </div>

      <WorkInProgress />
    </main>
  )
}

export default App

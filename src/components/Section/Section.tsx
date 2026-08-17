import type { SectionProps } from "./Section.types.ts"
import SectionHeader from "../SectionHeader/SectionHeader.tsx"

function Section({ header, description, children }: SectionProps) {
  return (
    <section className="w-full mt-20 px-10">
      <SectionHeader header={header} description={description} />
      <section className="grid grid-cols-1 sm:grid-cols-2">
        {children}
      </section>
    </section>
  )
}

export default Section

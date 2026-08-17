import type { SectionProps } from "./Section.types.ts"

function Section({ header, description, children }: SectionProps) {
  return (
    <section className="w-full mt-20 px-10">
      {header && (
        <h1 className="w-1/2 text-4xl text-white font-bold text-shadow-lg">
          {header}
        </h1>
      )}
      {description && (
        <h3 className="w-1/2 text-xl text-white font-semibold text-shadow-lg mx-3">
          {description}
        </h3>
      )}

      {(header || description) && (
        <h6 className="w-1/2 text-xs text-gray-300 font-light italic text-shadow-xs mx-3">
          Hover over the content for tooltips.
        </h6>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {children}
      </section>
    </section>
  )
}

export default Section

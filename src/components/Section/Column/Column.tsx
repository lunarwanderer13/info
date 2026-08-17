import type { ColumnProps } from "./Column.types.ts"

function Column({ header, description, items }: ColumnProps) {
  return (
    <section className="m-5 text-white text-shadow-md">
      {header && <h1 className="text-xl font-extrabold mx-5">{header}</h1>}
      {description && <h3 className="text-sm font-bold mx-5">{description}</h3>}
      <hr className="my-1" />
      <ul className="mx-5">
        {items.map((item) => (
          <li key={item.text} title={item.level.text}>
            {item.level.value === 5
              ? "🌟"
              : item.level.value === 1
                ? "❌"
                : ">"}
            &nbsp;
            <span
              className={
                item.level.value === 5
                  ? "text-sky-300 font-bold"
                  : item.level.value === 1
                    ? "text-red-500 font-bold"
                    : "text-white font-normal"
              }
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Column

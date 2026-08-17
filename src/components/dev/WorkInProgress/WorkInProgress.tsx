import { useState } from "react"

function WorkInProgress() {
  const [closed, setClosed] = useState(false)

  const closePopUp = () => {
    setClosed(true)
  }

  return (
    <div
      className={`
        fixed w-screen p-5 bottom-10 
        bg-yellow-500 border-8 border-dashed border-black
        ${closed ? "transition-all duration-500 ease-in-out translate-y-[calc(100%+2.5rem)] opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <button
        type="button"
        className="absolute top-0 right-0 w-10 h-10 text-4xl font-black"
        onClick={closePopUp}
      >
        ×
      </button>
      <h2 className="w-full text-2xl text-red-500 font-extrabold text-center text-shadow-lg">
        Hi there!
      </h2>
      <h4 className="w-full text-lg text-red-500 font-semibold text-center text-shadow-lg">
        This website is currently a work in progress, many features might not
        work or be buggy, here be dragons!
      </h4>
    </div>
  )
}

export default WorkInProgress

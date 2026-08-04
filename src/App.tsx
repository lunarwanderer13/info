import Header from "./components/header/Header.tsx"

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
      </div>
    </main>
  )
}

export default App

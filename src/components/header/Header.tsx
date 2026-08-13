function Header() {
  return (
    <header className="relative h-50">
      {/* Header banner */}
      <img
        src="https://avatars.githubusercontent.com/u/76808845?v=4"
        alt=""
        className="
          absolute
          bottom-0 left-20
          w-full
        "
      />

      {/* Gradients */}
      <div
        className="
          absolute
          left-20
          w-70 h-50
          bg-linear-to-r from-orange-500/50 to-orange-300/0
        "
      />
      <div
        className="
          absolute
          -top-30 -left-30
          w-100 h-100
          bg-radial from-orange-500 to-orange-300/0 to-50%
        "
      />

      {/* Avatar */}
      <img
        src="https://avatars.githubusercontent.com/u/76808845?v=4"
        alt=""
        className="
          absolute
          -top-10 -left-10
          w-60 h-60
          rounded-full
        "
      />

      {/* Text */}
      <div
        className="
          absolute
          top-5 right-5
          sm:top-10 sm:right-10
          w-1/3
          text-white text-right text-shadow-lg
        "
      >
        <h1 className="text-2xl sm:text-4xl font-bold">Hi! 👋</h1>
        <h3 className="text-xl sm:text-2xl font-semibold">
          Welcome to my page!
        </h3>
      </div>
    </header>
  )
}

export default Header

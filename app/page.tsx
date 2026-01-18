export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-zinc-900 font-sans">
      <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
        {/* Robot Avatar */}
        <div className="mb-8 transition-transform duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-700/30 to-transparent blur-3xl"></div>
            <div className="relative z-10 text-8xl sm:text-9xl drop-shadow-[0_0_30px_rgba(244,244,245,0.3)]">
              🤖
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-5xl font-light tracking-tight text-zinc-50 sm:text-6xl md:text-7xl transition-opacity duration-300">
          Motti Aronsohn
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-zinc-400 sm:text-2xl md:text-3xl font-light tracking-wide transition-opacity duration-300">
          Data Science & Fullstack Developer
        </p>
      </main>
    </div>
  );
}

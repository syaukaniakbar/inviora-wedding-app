function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-10">
        <div className="absolute inset-0 w-28 h-28 m-auto rounded-full bg-gray-500 opacity-10 animate-ping" />
        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-gray-400 via-gray-700 to-gray-400 flex items-center justify-center shadow-2xl shadow-gray-400/30 border border-white/10">
          <span className="text-3xl font-extrabold animate-pulse">⚡</span>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2 animate-fade-in">
        Crafting Your Experience...
      </h2>
      <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed mb-6 animate-fade-in-slow">
        We’re loading your personalized portfolio filled with creativity, modern
        tech, and passion-driven projects. This won’t take long.
      </p>
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-gradient-to-r from-gray-400 to-gray-500 animate-loading-bar rounded-full" />
      </div>
      <p className="text-sm text-gray-500 italic animate-fade-in-slow">
        “Great designs start with great patience.”
      </p>
    </div>
  );
}

export default Loading;

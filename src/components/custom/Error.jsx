function Error() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[8rem] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 select-none drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-widest uppercase">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-xl">
          Sorry, the page you are looking for does not exist or has been moved.
          <br />
          But hey, you can always go back to the homepage!
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold text-lg shadow-lg hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Go Home
        </a>
        <div className="mt-12 opacity-50 select-none">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto animate-pulse"
          >
            <circle cx="60" cy="60" r="55" stroke="white" strokeWidth="4" />
            <text
              x="50%"
              y="54%"
              textAnchor="middle"
              fill="white"
              fontSize="2.5rem"
              fontWeight="bold"
              dy=".3em"
            >
              ?
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Error;

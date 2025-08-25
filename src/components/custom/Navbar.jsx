import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project");

  return (
    <header>
      <nav className="bg-black text-white">
        <div className="w-full flex flex-wrap items-center justify-between px-6 md:px-10 py-6">
          <Link
            to={isProjectPage ? "/" : "/project"}
            className="flex items-center group"
          >
            <span className="text-xs md:text-2xl font-semibold relative transition-colors duration-300 hover:text-gray-400">
              {isProjectPage ? "BACK TO HOME" : "THINGS I’VE MADE"}
            </span>
          </Link>
          <div className="w-auto">
            <Link
              to="/contact"
              className="block py-2 text-xs md:text-2xl font-semibold relative transition-colors duration-300 hover:text-gray-400"
              aria-current="page"
            >
              LET'S WORK TOGETHER
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

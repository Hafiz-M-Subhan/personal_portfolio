// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent" role="navigation" aria-label="Main navigation">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold transition-colors duration-300 hover:text-violet-500 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
            aria-label="Hafiz Subhan - Portfolio home"
          >
            Hafiz Subhan
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded" 
              href="#about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded" 
              href="#experience"
            >
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded" 
              href="#skills"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded" 
              href="#education"
            >
              EDUCATION
            </Link>
          </li>
          <li>
            <Link 
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded" 
              href="#projects"
            >
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
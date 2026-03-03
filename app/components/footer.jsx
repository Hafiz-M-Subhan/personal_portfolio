// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © Portfolio by <Link 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hafiz-muhammad-subhan-shahid-628a66183/" 
              className="text-[#16f2b3] hover:text-violet-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
              aria-label="Visit Hafiz Subhan's LinkedIn profile"
            >
              Hafiz Subhan
            </Link>
          </p>
          <nav className="flex items-center gap-5" aria-label="Social links">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/RanaSubhaan/hafiz_subhan"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              aria-label="Star this repository on GitHub"
            >
              <IoStar aria-hidden="true" />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/RanaSubhaan/hafiz_subhan/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              aria-label="Fork this repository on GitHub"
            >
              <CgGitFork aria-hidden="true" />
              <span>Fork</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
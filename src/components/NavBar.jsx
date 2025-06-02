import { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  // this useEffect checks if the hamburger menu is open or not
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8) backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl  mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* logos and links will be here */}

          <a href="#Home" className="font-mono font-bold text-xl text-white">
            
            My<span className="text-blue-800">Portfolio</span>
          </a>

          {/* hamburger menu */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={()=>setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* initially hidden but for medium or higher device show as flex */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#Home"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#Projects"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

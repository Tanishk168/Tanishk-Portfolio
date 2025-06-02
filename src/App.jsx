// Importing useState for managing local component state
import { useState } from "react";

// Importing CSS files
import "./App.css";
import "./index.css";

// Importing custom components
import { LoadingScreen } from "./components/LoadingScreen";
import { NavBar } from "./components/NavBar.jsx";
import { MobileNavBar } from "./components/MobileNavBar.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Contact } from "./components/sections/Contact.jsx";

// importing sections
import {Home} from './components/sections/Home.jsx'
import {About} from './components/sections/About.jsx'

function App() {
  // State to check if the loading screen is complete
  const [isLoaded, setIsLoaded] = useState(false);

  // State to manage the visibility of the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Show loading screen only when isLoaded is false.
          When LoadingScreen finishes, it calls onComplete → sets isLoaded to true */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Main page content wrapper */}
      <div
        className={`min-h-screen transition-opacity duration-700 
          ${isLoaded ? "opacity-100" : "opacity-0"} 
          bg-black text-gray-100`}
      >
        {/* NavBar is shown for all screen sizes (NavBar may hide/show based on Tailwind breakpoints internally) */}
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* MobileNavBar is shown conditionally inside based on screen size and menuOpen state */}
        <MobileNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Home section */}
        <Home />

        {/* about section */}
        <About />

        {/* Projects section */}
        <Projects />

        {/* Contact me */}
        <Contact />
      </div>
    </>
  );
}

export default App; 

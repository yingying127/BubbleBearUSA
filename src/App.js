import Navbar from "./scenes/Navbar";
import Home from "./scenes/Home";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
     <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
     />
     <div className="w-5/6 mx-auto md:h-full">
      {isDesktop}
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
      >
        <Home setSelectedPage={setSelectedPage} />
      </motion.div>
     </div>
    </div>
  )
}

export default App;

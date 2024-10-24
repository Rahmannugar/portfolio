import "./App.css";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Services from "./sections/Services";
import Works from "./sections/Works";
import GridLoader from "react-spinners/GridLoader";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const date = new Date();
  const currentYear = date.getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className={`flex justify-center h-screen items-center bg-black`}>
          <GridLoader color={`white`} />
        </div>
      ) : (
        <div className="bg-black overflow-hidden w-screen text-white">
          <Navbar />
          <div>
            <section>
              <Hero />
            </section>
            <section id="Services">
              <Services />
            </section>
            <section id="Works">
              <Works />
            </section>
            <div className="my-16 bg-gray-400 h-[1px] mx-10" />
            <section id="Contact">
              <Contact />
            </section>
          </div>
          <footer className="flex flex-col font-bold space-y-3 justify-center items-center my-10">
            <button
              onClick={scrollToTop}
              className="py-2 px-3 bg-white text-black rounded"
            >
              Back to top
            </button>
            <h1>&copy; {currentYear} Nugar.dev. All rights reserved.</h1>
          </footer>
        </div>
      )}
    </div>
  );
};
export default App;

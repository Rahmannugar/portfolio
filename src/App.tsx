import "./App.css";
import GridLoader from "react-spinners/GridLoader";
import { useEffect, useState, Suspense, lazy } from "react";
import Footer from "./sections/Footer";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Contact = lazy(() => import("./sections/Contact"));
const Hero = lazy(() => import("./sections/Hero"));
const Services = lazy(() => import("./sections/Services"));
const Works = lazy(() => import("./sections/Works"));
const Navbar = lazy(() => import("./components/Navbar"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="bg-black overflow-hidden w-screen text-white relative">
      {isLoading ? (
        <div className={`flex justify-center h-screen items-center bg-black`}>
          <GridLoader color={`white`} />
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
              <GridLoader color={`white`} />
            </div>
          }
        >
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
          <footer className="flex flex-col font-bold justify-center items-center my-7">
            <Footer />
            <button
              onClick={scrollToTop}
              className="py-2 px-2 rounded-full bg-white text-black"
            >
              <ArrowDropUpIcon />
            </button>
          </footer>
        </Suspense>
      )}
    </div>
  );
};

export default App;

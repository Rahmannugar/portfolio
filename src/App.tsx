import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";
const App = () => {
  return (
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
    </div>
  );
};
export default App;

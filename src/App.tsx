import "./App.css";
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
        <section id="Contact">
          <Works />
        </section>
      </div>
    </div>
  );
};
export default App;

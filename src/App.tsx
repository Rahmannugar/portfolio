import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";
const App = () => {
  return (
    <div className="bg-black overflow-hidden w-screen text-white">
      <div>
        <Navbar />
        <section>
          <Hero />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Works />
        </section>
      </div>
    </div>
  );
};
export default App;
